import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('et', () => import('./locales/et.json'));
register('en', () => import('./locales/en.json'));
register('ru', () => import('./locales/ru.json'));

init({
    fallbackLocale: 'et',
    initialLocale: typeof window !== 'undefined' ? (localStorage.getItem('locale') || getLocaleFromNavigator()) : 'et',
});
