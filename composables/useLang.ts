import type { langOption } from "#imports";


export function useLang() {
    const currentLang = ref<langOption>('en');

    const getColorPreference = (): langOption => {
        let themeInLocalStorage = localStorage.getItem("lang") as langOption;
        if (themeInLocalStorage) {
            return themeInLocalStorage
        } else {
            return 'en'
        }
    };

    const updatePreference = () => {
        localStorage.setItem('lang', currentLang.value)
    }

    const setLang = (lang: langOption) => {
        currentLang.value = lang
        updatePreference()
    }


    onMounted(() => {
        currentLang.value = getColorPreference()
    })

    return { currentLang, setLang };
}
