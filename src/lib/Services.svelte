<script>
    import { t, locale } from "svelte-i18n";
    import { fade, fly } from "svelte/transition";
    export let services = [];

    let activeCategory = "Kõik";

    // Manual categories for now or derived from data
    const categories = ["Kõik", "Turvalisus", "Mugavus", "Lisavarustus"];

    $: filteredServices =
        activeCategory === "Kõik"
            ? services
            : services.filter((s) => s.category === activeCategory);

    // Helper to get translated field or fallback to default
    function getField(item, field) {
        const localizedField = `${field}_${$locale}`;
        return item[localizedField] || item[field] || "";
    }
</script>

<section id="services" class="py-16 md:py-32 bg-white relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-px h-full bg-gray-50 -z-10"></div>

    <div class="container mx-auto px-4 relative z-10">
        <div
            class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8"
        >
            <div class="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <h2
                    class="text-4xl md:text-7xl font-black text-secondary tracking-tighter leading-none uppercase"
                >
                    {$t("services.title")}
                    <span class="text-primary italic"
                        >{$t("services.title_italic")}</span
                    >
                </h2>
                <div class="h-1 w-20 bg-primary mt-6 mx-auto md:mx-0"></div>
            </div>
            <p
                class="text-gray-400 font-bold max-w-xs text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed text-center md:text-left hidden sm:block"
            >
                {$t("services.description")}
            </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-12">
            {#each categories as cat}
                <button
                    on:click={() => (activeCategory = cat)}
                    class="px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border {activeCategory ===
                    cat
                        ? 'bg-secondary text-white border-secondary'
                        : 'bg-transparent text-gray-400 border-gray-100 hover:border-primary hover:text-primary'}"
                >
                    {cat}
                </button>
            {/each}
        </div>

        <!-- Services Display -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredServices as service (service.slug)}
                <div in:fade={{ duration: 300 }}>
                    <a
                        href="/teenused/{service.slug}"
                        class="group block bg-white border border-gray-100 p-8 hover:border-primary transition-all duration-300 h-full relative"
                    >
                        <div class="flex items-start gap-6">
                            <!-- Technical Icon Box -->
                            <div
                                class="w-12 h-12 flex-shrink-0 border border-gray-100 group-hover:border-primary/30 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-all"
                            >
                                {#if service.icon_image}
                                    <img
                                        src={service.icon_image}
                                        alt=""
                                        class="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all"
                                    />
                                {:else if service.icon}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        class="w-6 h-6 text-secondary group-hover:text-primary transition-colors"
                                    >
                                        <path
                                            d={service.icon}
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                {/if}
                            </div>

                            <div class="flex-1">
                                <div
                                    class="text-[9px] text-primary font-bold uppercase tracking-widest mb-2 opacity-50 group-hover:opacity-100"
                                >
                                    {service.category || "Mugavus"}
                                </div>
                                <h3
                                    class="text-xl font-black text-secondary uppercase italic tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors"
                                >
                                    {getField(service, "title")}
                                </h3>
                                <p
                                    class="text-gray-400 text-xs leading-relaxed group-hover:text-gray-600 transition-colors line-clamp-3"
                                >
                                    {getField(service, "description")}
                                </p>
                            </div>
                        </div>

                        <div
                            class="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between"
                        >
                            <span
                                class="text-[9px] font-black uppercase tracking-[0.3em] text-secondary group-hover:text-primary transition-colors"
                                >{$t("services.read_more")}</span
                            >
                            <div
                                class="w-6 h-px bg-gray-200 group-hover:w-10 group-hover:bg-primary transition-all"
                            ></div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>
