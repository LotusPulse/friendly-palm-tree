// Custom frontmatter parser to avoid gray-matter/Buffer dependency
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
            // Basic type parsing
            if (value === 'true') value = true;
            else if (value === 'false') value = false;
            else if (!isNaN(Number(value)) && value !== '') value = Number(value);
            else if (value.startsWith('[') && value.endsWith(']')) {
                // Simple list parsing
                value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
            } else {
                // Remove quotes if present
                value = value.replace(/^['"]|['"]$/g, '');
            }
            data[key.trim()] = value;
        }
    });

    return { data, content: body };
}

export async function load() {
    const serviceFiles = import.meta.glob('../content/services/*.md', { as: 'raw', eager: true });
    const partnerFiles = import.meta.glob('../content/partners/*.md', { as: 'raw', eager: true });

    const services = Object.entries(serviceFiles).map(([path, content]) => {
        const { data } = parseFrontmatter(content);
        // Get generic filename from path regardless of directory structure
        const fileName = path.split('/').pop();
        const slug = fileName ? fileName.replace('.md', '') : '';

        return {
            ...data,
            slug
        };
    }).sort((a, b) => (a.order || 0) - (b.order || 0));

    const partners = Object.entries(partnerFiles).map(([path, content]) => {
        const { data } = parseFrontmatter(content);
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
