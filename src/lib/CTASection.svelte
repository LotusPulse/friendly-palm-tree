<script>
    import { t } from "svelte-i18n";
    export let image = "";
</script>

<section class="relative bg-secondary overflow-hidden py-24 md:py-0">
    <!-- Background Accents -->
    <div
        class="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0 hidden lg:block"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
        <div
            class="grid lg:grid-cols-12 items-center min-h-[600px] gap-12 md:gap-20"
        >
            <!-- Text Content -->
            <div class="lg:col-span-7 py-12 md:py-32">
                <div class="flex flex-col gap-8">
                    <div class="space-y-4">
                        <div class="w-12 h-1 bg-primary"></div>
                        <h2
                            class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase italic"
                        >
                            {$t("cta_section.title")} <br />
                            <span class="text-primary not-italic"
                                >{$t("cta_section.title_italic")}</span
                            >
                        </h2>
                    </div>

                    <p
                        class="text-lg md:text-2xl text-gray-400 max-w-xl leading-relaxed font-bold uppercase tracking-tight"
                    >
                        {$t("cta_section.description")}
                    </p>

                    <div class="mt-8">
                        <a
                            href="/kontakt"
                            class="group relative inline-flex items-center justify-center bg-white text-secondary px-12 py-6 font-black transition-all hover:bg-primary hover:text-white shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] hover:shadow-none"
                        >
                            <span
                                class="relative z-10 uppercase tracking-[0.3em] text-sm"
                                >{$t("cta_section.button")}</span
                            >
                        </a>
                    </div>
                </div>
            </div>

            <!-- Image/Visual Side -->
            <div class="lg:col-span-5 h-full relative hidden lg:block">
                <div
                    class="absolute inset-0 grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-1000 border-l border-white/5"
                >
                    <img
                        src={image}
                        alt="Tehniline keskkond"
                        class="w-full h-full object-cover"
                    />
                </div>

                <!-- Floating Technical Detail -->
                <div
                    class="absolute bottom-12 right-12 bg-primary/90 text-white p-8 backdrop-blur shadow-2xl"
                >
                    <div
                        class="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-50"
                    >
                        Sertifitseeritud
                    </div>
                    <div
                        class="text-xl font-black uppercase italic tracking-tighter"
                    >
                        Premium Tech
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
