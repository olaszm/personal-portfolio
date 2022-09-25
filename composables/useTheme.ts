import { ref, onMounted } from "vue";


type themeOption = "light" | "dark";


export function useTheme() {
	const currentTheme = ref('dark');

	const getColorPreference = (): themeOption => {
		let themeInLocalStorage = localStorage.getItem("theme") as themeOption;
		if (themeInLocalStorage) {
			return themeInLocalStorage
		} else {
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : "light"
		}
	};

	const setPreference = () => {
		localStorage.setItem('theme', currentTheme.value)
		reflectPreference()
	}

	const reflectPreference = () => {
		document.documentElement.setAttribute("data-theme", currentTheme.value);
	};


	const togglePreference = () => {
		currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
		setPreference()		
	}


	onMounted(() => {
		currentTheme.value = getColorPreference()
		reflectPreference()

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches: isDark}) => {
				currentTheme.value = isDark ? 'dark' : "light"
				setPreference()
			})
	})

	return { currentTheme, togglePreference };
}
