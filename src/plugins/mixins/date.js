export default {
	methods: {
		dateFormat (value, options) {
			return new Intl.DateTimeFormat('fr-FR', options).format(new Date(value))
		}
	}
}
