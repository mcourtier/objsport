import { TEAM_PHOTOS_BUCKET, useSupabaseService } from '../../utils/supabase'

const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])
const MAX_BYTES = 5 * 1024 * 1024

const EXT_BY_TYPE: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

function extractStoragePath(publicUrl: string, bucket: string): string | null {
  const marker = `/object/public/${bucket}/`
  const index = publicUrl.indexOf(marker)
  if (index === -1) return null
  return decodeURIComponent(publicUrl.slice(index + marker.length))
}

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)
  if (!formData?.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Aucun fichier envoyé',
    })
  }

  const filePart = formData.find((part) => part.name === 'file' && part.data)
  const previousUrlPart = formData.find((part) => part.name === 'previousUrl')
  const memberIdPart = formData.find((part) => part.name === 'memberId')

  if (!filePart?.data || !filePart.type) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Fichier image requis',
    })
  }

  if (!ALLOWED_TYPES.has(filePart.type)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Format non supporté (JPEG, PNG ou WebP)',
    })
  }

  if (filePart.data.byteLength > MAX_BYTES) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Image trop volumineuse (max 5 Mo)',
    })
  }

  const ext = EXT_BY_TYPE[filePart.type] ?? 'jpg'
  const memberId = memberIdPart?.data?.toString('utf8').trim()
  const prefix =
    memberId && /^[a-zA-Z0-9_-]+$/.test(memberId)
      ? memberId
      : crypto.randomUUID()
  const path = `${prefix}/${crypto.randomUUID()}.${ext}`

  const supabase = useSupabaseService()
  const { error: uploadError } = await supabase.storage
    .from(TEAM_PHOTOS_BUCKET)
    .upload(path, filePart.data, {
      contentType: filePart.type,
      upsert: false,
    })

  if (uploadError) {
    throw createError({
      statusCode: 502,
      statusMessage: `Échec de l’upload : ${uploadError.message}`,
    })
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(TEAM_PHOTOS_BUCKET).getPublicUrl(path)

  const previousUrl = previousUrlPart?.data?.toString('utf8').trim()
  if (previousUrl) {
    const previousPath = extractStoragePath(previousUrl, TEAM_PHOTOS_BUCKET)
    if (previousPath) {
      await supabase.storage.from(TEAM_PHOTOS_BUCKET).remove([previousPath])
    }
  }

  return { url: publicUrl }
})
