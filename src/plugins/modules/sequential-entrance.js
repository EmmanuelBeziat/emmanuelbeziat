/* const SequentialEntrance = {
	functional: true,

	render (createElement, { props, data, children }) {
		const delay = props.delay || 250
		const tag = props.tag || 'span'
		let animation = props.animation || 'entranceFromRight'

		if (props.fromTop !== 'undefined') animation = 'entranceFromTop'
		if (props.fromRight !== 'undefined') animation = 'entranceFromRight'
		if (props.fromBottom !== 'undefined') animation = 'entranceFromBottom'
		if (props.fromLeft !== 'undefined') animation = 'entranceFromLeft'

		if (children) {
			children.forEach((child, index) => {
				child.data.staticStyle = {
					opacity: 0,
					animationFillMode: 'forwards',
					animationDelay: index * delay + 'ms'
				}
				child.data.staticClass += ' ' + animation
			})
		}

		return createElement(tag, {
			attrs: {
				class: data.staticClass
			}
		}, children)
	}
} */

export default {
	install (app, options) {
		console.log('bite', app, options)
	}
}
