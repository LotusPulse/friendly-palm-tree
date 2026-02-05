import matter from 'gray-matter';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    try {
        const serviceFiles = import.meta.glob('../../../content/services/*.md', { as: 'raw', eager: true });
        const filePath = `../../../content/services/${slug}.md`;

        if (!serviceFiles[filePath]) {
            throw error(404, 'Teenust ei leitud');
        }

        const { data, content } = matter(serviceFiles[filePath]);

        return {
            service: {
                ...data,
                content
            }
        };
    } catch (e) {
        throw error(404, 'Teenust ei leitud');
    }
}
