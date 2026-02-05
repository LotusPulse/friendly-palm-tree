import matter from 'gray-matter';

export async function load() {
    const serviceFiles = import.meta.glob('/src/content/services/*.md', { as: 'raw', eager: true });
    const partnerFiles = import.meta.glob('/src/content/partners/*.md', { as: 'raw', eager: true });

    const services = Object.entries(serviceFiles).map(([path, content]) => {
        const { data } = matter(content);
        return {
            ...data,
            slug: path.split('/').pop().replace('.md', '')
        };
    }).sort((a, b) => (a.order || 0) - (b.order || 0));

    const partners = Object.entries(partnerFiles).map(([path, content]) => {
        const { data } = matter(content);
        return {
            ...data,
            slug: path.split('/').pop().replace('.md', '')
        };
    }).sort((a, b) => (a.order || 0) - (b.order || 0));

    return {
        services,
        partners
    };
}
