import {ref} from 'vue'

export function useToggleModal() {
    const isOpen = ref(false)
    
    const toggleModal = () => {
        isOpen.value = !isOpen.value  
    }

    return { toggleModal, isOpen }
}