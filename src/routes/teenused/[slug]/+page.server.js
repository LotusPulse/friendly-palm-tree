import { error } from '@sveltejs/kit';

// Custom frontmatter parser
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { data: {}, content: content };

    const frontmatterRaw = match[1];
    const body = match[2];
    const data = {};

    frontmatterRaw.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length) {
            let value = values.join(':').trim();
            if (value === 'true') value = true;
            else if (value === 'false') value = false;
            else if (!isNaN(Number(value)) && value !== '') value = Number(value);
            else if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
            } else {
                value = value.replace(/^['"]|['"]$/g, '');
            }
            data[key.trim()] = value;
        }
    });

    return { data, content: body };
}

export async function load({ params }) {
    const { slug } = params;

    try {
        const serviceFiles = import.meta.glob('../../../content/services/*.md', { as: 'raw', eager: true });
        const filePath = `../../../content/services/${slug}.md`;

        if (!serviceFiles[filePath]) {
            throw error(404, 'Teenust ei leitud');
        }

        const { data, content } = parseFrontmatter(serviceFiles[filePath]);

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
