export interface ContactFormFields {
  name: string
  email: string
  phone: string
  message: string
}

export type ContactFormField = keyof ContactFormFields

export type ContactFormErrors = Partial<Record<ContactFormField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(
  fields: ContactFormFields,
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const name = fields.name.trim()
  if (!name) {
    errors.name = 'Le nom est requis.'
  } else if (name.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères.'
  }

  const email = fields.email.trim()
  if (!email) {
    errors.email = 'L’adresse e-mail est requise.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'L’adresse e-mail n’est pas valide.'
  }

  const phone = fields.phone.trim()
  if (phone && phone.length < 6) {
    errors.phone = 'Le numéro de téléphone n’est pas valide.'
  }

  const message = fields.message.trim()
  if (!message) {
    errors.message = 'Le message est requis.'
  } else if (message.length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères.'
  }

  return errors
}
