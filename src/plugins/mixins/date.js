export const dateFormat = (value, options) => new Intl.DateTimeFormat('fr-FR', options).format(new Date(value))
