import { reactive } from 'vue'

const transitionState = reactive({
  transitionComplete: null,
})

export const useTransitionComposable = () => {
  const toggleTransitionComplete = (value) => {
    transitionState.transitionComplete = value
  }

  return {
    transitionState,
    toggleTransitionComplete,
  }
}
