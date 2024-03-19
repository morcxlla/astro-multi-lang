import gbFlag from '@/components/flags/gb.astro'
import esFlag from '@/components/flags/es.astro'
import deFlag from '@/components/flags/de.astro'
import frFlag from '@/components/flags/fr.astro'

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof esFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: gbFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: esFlag,
	},
	de: {
		code: 'de',
		name: 'Deutsch',
		flag: deFlag,
	},
	fr: {
		code: 'fr',
		name: 'Français',
		flag: frFlag,
	}
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
	en: {
		'nav.inicio': 'Home',
	},
	es: {
		'nav.inicio': 'Inicio',
	},
	de: {
		'nav.inicio': 'Heim',
	},
	fr: {
		'nav.inicio': 'Maison',
	}
} as const;

export const routes = {
	en: {
		home: 'home',
	},
	es: {
		home: 'home',
	},
	de: {
		home: 'home',
	},
	fr: {
		home: 'home',
	}
};