export interface RdvFormFields {
  name: string
  email: string
  phone: string
  memberId: string
  preferredDate: string
  message: string
}

export type RdvFormField = keyof RdvFormFields

export type RdvFormErrors = Partial<Record<RdvFormField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRdvForm(fields: RdvFormFields): RdvFormErrors {
  const errors: RdvFormErrors = {}

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

  if (!fields.memberId.trim()) {
    errors.memberId = 'Veuillez sélectionner un praticien.'
  }

  const message = fields.message.trim()
  if (!message) {
    errors.message = 'Le message est requis.'
  } else if (message.length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères.'
  }

  return errors
}
