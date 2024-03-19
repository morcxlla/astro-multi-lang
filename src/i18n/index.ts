import english from '@/i18n/langs/en.json';
import spanish from '@/i18n/langs/es.json';
import german from '@/i18n/langs/de.json';
import french from '@/i18n/langs/fr.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
	GERMAN: 'de',
	FRENCH: 'fr',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	if (currentLocale === LANG.SPANISH) return {...english, ...spanish};
	if (currentLocale === LANG.GERMAN) return {...english, ...german};
	if (currentLocale === LANG.FRENCH) return {...english, ...french};
	return english;
};