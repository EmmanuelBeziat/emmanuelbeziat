export const easterSearch = {
	data () {
		return {
			easters: {}
		}
	},

	methods: {
		searchWithEaster (value) {
			setTimeout(() => {
				this.$emit('input', value)

				this.easterEggReset()

				switch (value) {
					case 'tilt':
					case 'zoom':
					case 'roll': this.easterEgg(value)
						break
				}
			}, 150)
		},

		easterEggReset () {
			this.easters = {
				tilt: false,
				roll: false,
				zoom: false
			}

			document.body.classList.forEach(className => {
				if (className.startsWith('egg')) {
					document.body.classList.remove(className)
				}
			})
		},

		easterEgg (value) {
			document.body.classList.add(`egg-${value}`)
		}
	}
}
