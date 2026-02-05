/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#E63946',
                secondary: '#1D3557',
                'bg-light': '#F8F9FA',
            },
            fontFamily: {
                sans: ['Urbanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
