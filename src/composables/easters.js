import { reactive } from 'vue'

export const useEasterSearch = (emit) => {
	const easters = reactive({
		tilt: false,
		roll: false,
		zoom: false
	})

	const easterEggReset = () => {
		easters.tilt = false
		easters.roll = false
		easters.zoom = false

		document.body.classList.forEach(className => {
			if (className.startsWith('egg')) {
				document.body.classList.remove(className)
			}
		})
	}

	const easterEgg = (value) => {
		document.body.classList.add(`egg-${value}`)
	}

	const searchWithEaster = (value) => {
		setTimeout(() => {
			emit('input', value)

			easterEggReset()

			switch (value) {
				case 'tilt':
				case 'zoom':
				case 'roll': easterEgg(value)
					break
			}
		}, 150)
	}

	return { easters, searchWithEaster, easterEggReset, easterEgg }
}
