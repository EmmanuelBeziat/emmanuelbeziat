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

export const easterPicture = {
	data () {
		return {
			pictureCount: 0,
			pictureEasterIsOn: false
		}
	},

	mounted () {
		this.pictureCount = 0
	},

	methods: {
		pictureOnClick () {
			this.pictureCount += 1

			if (this.pictureCount === 5) {
				this.pictureEasterIsOn = true
				setTimeout(() => {
					this.pictureEasterIsOn = false
					this.pictureCount = 0
				}, 1920)
			}
		}
	}
}
