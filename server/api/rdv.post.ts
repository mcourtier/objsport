import { validateRdvForm } from '~/utils/validateRdvForm'

interface RdvPayload {
  name?: string
  email?: string
  phone?: string
  memberId?: string
  preferredDate?: string
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<RdvPayload>(event)

  const fields = {
    name: body.name ?? '',
    email: body.email ?? '',
    phone: body.phone ?? '',
    memberId: body.memberId ?? '',
    preferredDate: body.preferredDate ?? '',
    message: body.message ?? '',
  }

  const errors = validateRdvForm(fields)

  if (Object.keys(errors).length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Données du formulaire invalides',
      data: { errors },
    })
  }

  // Email delivery (Resend, Nodemailer, etc.) — configure via runtimeConfig when ready.
  if (import.meta.dev) {
    console.info('[rdv] New appointment request:', fields)
  }

  return { success: true }
})
