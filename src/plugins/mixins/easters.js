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

import { ref } from 'vue'
export const easterPicture = () => {
	const pictureCount = ref(0)
	const pictureEasterIsOn = ref(false)

	const pictureOnClick = () => {
		pictureCount.value += 1

		if (pictureCount.value === 5) {
			pictureEasterIsOn.value = true
			setTimeout(() => {
				pictureEasterIsOn.value = false
				pictureCount.value = 0
			}, 1920)
		}
	}
}
