<script>
    import { t } from "svelte-i18n";
</script>

<section
    class="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-white"
>
    <!-- Clean Industrial Accents -->
    <div
        class="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-32 z-0 hidden md:block"
    ></div>
    <div class="absolute top-1/2 left-0 w-full h-px bg-gray-100 z-0"></div>
    <div class="absolute top-0 left-1/4 w-px h-full bg-gray-100 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="grid md:grid-cols-12 gap-12 items-start">
            <div class="md:col-span-12 lg:col-span-12 xl:col-span-7">
                <h1
                    class="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] mb-8 text-secondary tracking-tighter uppercase italic"
                >
                    {$t("hero.title1")} <br />
                    <span class="text-primary not-italic"
                        >{$t("hero.title2")}</span
                    >
                    <br />
                    {$t("hero.title3")}
                    <span class="not-italic">{$t("hero.title4")}</span>
                </h1>

                <p
                    class="text-lg md:text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-bold uppercase tracking-tight"
                >
                    {$t("hero.subtitle")}
                </p>

                <div class="flex flex-wrap gap-6 items-center">
                    <a
                        href="/kontakt"
                        class="group relative inline-flex items-center justify-center bg-secondary text-white px-12 py-5 font-bold transition-all hover:bg-primary shadow-[8px_8px_0_0_rgba(239,68,68,0.1)] hover:shadow-none"
                        aria-label={$t("hero.cta")}
                    >
                        <span
                            class="relative z-10 uppercase tracking-widest text-sm"
                            >{$t("hero.cta")}</span
                        >
                    </a>
                </div>
            </div>

            <div
                class="md:col-span-12 lg:col-span-12 xl:col-span-5 relative mt-12 xl:mt-0"
            >
                <div class="border-accent p-2 bg-white shadow-2xl rotate-2">
                    <img
                        src="/hero-image.png"
                        alt="E-Autoalarm tehniline töökoda ja kaasaegne autohooldus"
                        class="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
