<script>
    import { marked } from "marked";
    import { t, locale } from "svelte-i18n";
    import CTASection from "$lib/CTASection.svelte";

    export let data;
    const { service } = data;

    // Helper to get translated field or fallback to default
    function getField(item, field) {
        const localizedField = `${field}_${$locale}`;
        return item[localizedField] || item[field] || "";
    }

    const title = getField(service, "title");
    const description = getField(service, "description");
</script>

<svelte:head>
    <title>{title} | E-Autoalarm</title>
    <meta name="description" content={description} />
    <meta property="og:title" content="{title} | E-Autoalarm" />
    <meta property="og:description" content={description} />
    {#if service.image}
        <meta property="og:image" content={service.image} />
    {/if}
</svelte:head>

<!-- Service Hero -->
<section
    class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-gray-100"
>
    <!-- Clean Industrial Accents -->
    <div
        class="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-20 z-0 hidden md:block"
        aria-hidden="true"
    ></div>
    <div
        class="absolute top-0 left-1/4 w-px h-full bg-gray-100 z-0"
        aria-hidden="true"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl">
            <nav
                class="flex mb-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-300"
                aria-label="Breadcrumb"
            >
                <a href="/" class="hover:text-primary transition-colors"
                    >{$t("nav.home")}</a
                >
                <span class="mx-4 text-gray-100" aria-hidden="true">//</span>
                <span class="text-secondary italic">{$t("nav.services")}</span>
            </nav>

            <h1
                class="text-5xl md:text-7xl lg:text-8xl font-black text-secondary tracking-tighter leading-[0.85] uppercase italic mb-12"
            >
                {title.split(" ")[0]} <br />
                <span class="text-primary not-italic"
                    >{title.split(" ").slice(1).join(" ")}</span
                >
            </h1>

            <div
                class="flex flex-col md:flex-row gap-12 items-start mt-16 md:mt-24"
            >
                <div class="w-full md:w-1/2">
                    {#if service.image}
                        <div
                            class="border border-gray-100 p-2 bg-white shadow-2xl relative group"
                        >
                            <img
                                src={service.image}
                                alt="{title} teenuse pilt"
                                class="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                            />
                            <!-- Technical Badge -->
                            <div
                                class="absolute -bottom-6 -right-6 bg-secondary text-white p-6 hidden md:block"
                            >
                                <div
                                    class="text-[9px] font-black uppercase tracking-widest opacity-50 mb-1"
                                >
                                    Service Type
                                </div>
                                <div
                                    class="text-lg font-black uppercase italic tracking-tighter"
                                >
                                    {service.category || "Standard"}
                                </div>
                            </div>
                        </div>
                    {:else}
                        <div
                            class="w-full bg-gray-50 aspect-video flex items-center justify-center border border-gray-100"
                        >
                            <div
                                class="text-[10px] font-black uppercase tracking-[0.5em] text-gray-200"
                            >
                                No Image Available
                            </div>
                        </div>
                    {/if}
                </div>

                <div class="w-full md:w-1/2 space-y-8 py-4">
                    <p
                        class="text-xl md:text-2xl text-secondary font-bold uppercase tracking-tight leading-relaxed italic border-l-4 border-primary pl-8"
                    >
                        {description}
                    </p>

                    {#if service.items && service.items.length > 0}
                        <div
                            class="grid grid-cols-1 gap-4 pt-8"
                            role="list"
                            aria-label="Teenuse detailid"
                        >
                            {#each service.items as item}
                                <div
                                    class="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-gray-400"
                                    role="listitem"
                                >
                                    <div
                                        class="w-8 h-px bg-primary"
                                        aria-hidden="true"
                                    ></div>
                                    {item}
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Content Body -->
<section class="py-24 bg-white relative">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <article
                class="prose prose-lg max-w-none
                prose-headings:text-secondary prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter
                prose-p:text-gray-500 prose-p:leading-relaxed prose-p:font-medium
                prose-strong:text-secondary prose-strong:font-black
                prose-li:text-gray-500 prose-li:font-medium
                prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                prose-img:border prose-img:border-gray-100 prose-img:p-2 prose-img:shadow-xl prose-img:rotate-1"
            >
                {@html marked(service.content || "")}
            </article>
        </div>
    </div>
</section>

<CTASection image="/images/cta-bg.png" />
