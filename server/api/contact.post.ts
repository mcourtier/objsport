import { validateContactForm } from '~/utils/validateContactForm'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)

  const fields = {
    name: body.name ?? '',
    email: body.email ?? '',
    phone: body.phone ?? '',
    message: body.message ?? '',
  }

  const errors = validateContactForm(fields)

  if (Object.keys(errors).length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Données du formulaire invalides',
      data: { errors },
    })
  }

  // Email delivery (Resend, Nodemailer, etc.) — configure via runtimeConfig when ready.
  if (import.meta.dev) {
    console.info('[contact] New message:', fields)
  }

  return { success: true }
})
