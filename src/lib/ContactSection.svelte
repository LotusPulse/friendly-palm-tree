<script>
    import { t } from "svelte-i18n";
</script>

<section
    id="contact-info"
    class="py-24 md:py-40 bg-white relative overflow-hidden"
>
    <!-- Clean Geometric Decor -->
    <div class="absolute top-0 left-0 w-px h-full bg-gray-50 z-0"></div>
    <div class="absolute top-1/2 right-0 w-full h-px bg-gray-50 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <!-- Content -->
            <div class="space-y-16">
                <div class="animate-on-scroll">
                    <h2
                        class="text-5xl md:text-7xl font-black text-secondary tracking-tighter leading-none uppercase italic mb-8"
                    >
                        {$t("contact.title")} <br />
                        <span class="text-primary not-italic"
                            >{$t("contact.title_italic")}</span
                        >
                    </h2>
                    <p
                        class="text-gray-400 font-bold max-w-md text-sm uppercase tracking-tight leading-relaxed"
                    >
                        {$t("contact.description")}
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div class="space-y-4">
                        <div
                            class="text-[10px] text-primary font-black uppercase tracking-[0.4em]"
                        >
                            {$t("contact.address_label")}
                        </div>
                        <p
                            class="text-xl font-black text-secondary uppercase italic leading-tight"
                        >
                            Kadaka tee 1 <br />
                            12915 Tallinn, Eesti
                        </p>
                    </div>

                    <div class="space-y-4">
                        <div
                            class="text-[10px] text-primary font-black uppercase tracking-[0.4em]"
                        >
                            {$t("contact.contact_label")}
                        </div>
                        <div class="flex flex-col gap-2">
                            <a
                                href="mailto:info@e-autoalarm.ee"
                                class="text-xl font-black text-secondary uppercase italic leading-tight hover:text-primary transition-colors"
                            >
                                info@e-autoalarm.ee
                            </a>
                            <span
                                class="text-xl font-black text-secondary uppercase italic leading-tight"
                            >
                                +372 50 123 456
                            </span>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div
                            class="text-[10px] text-primary font-black uppercase tracking-[0.4em]"
                        >
                            {$t("contact.hours_label")}
                        </div>
                        <p
                            class="text-xl font-black text-gray-300 uppercase italic leading-tight"
                        >
                            E-R: 09:00 - 18:00<br />L-P: Suletud
                        </p>
                    </div>
                </div>

                <div class="pt-8">
                    <a
                        href="/kontakt"
                        class="group relative inline-flex items-center gap-8 bg-secondary text-white px-10 py-6 font-black transition-all hover:bg-primary shadow-[10px_10px_0_0_rgba(0,0,0,0.05)] hover:shadow-none"
                    >
                        <span class="uppercase tracking-[0.3em] text-sm"
                            >{$t("contact.cta_button")}</span
                        >
                        <div
                            class="w-12 h-px bg-white/20 group-hover:bg-white group-hover:w-20 transition-all"
                        ></div>
                    </a>
                </div>
            </div>

            <!-- Visual / Map Placeholder -->
            <div class="relative min-h-[400px] lg:min-h-full group">
                <div class="absolute inset-0 border border-gray-100 p-2">
                    <div
                        class="w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
                    >
                        <!-- Technical looking map placeholder -->
                        <iframe
                            title="Asukoha kaart"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5694857476685!2d24.673859677461436!3d59.42358897466184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb1388655555%3A0x67375276c12513a8!2sKadaka%20tee%201%2C%2012915%20Tallinn!5e0!3m2!1set!2see!4v1707166000000!5m2!1set!2see"
                            width="100%"
                            height="100%"
                            style="border:0;"
                            allowfullscreen
                            loading="lazy"
                            class="filter contrast-[1.1] brightness-[0.95]"
                        ></iframe>
                    </div>
                </div>

                <!-- Floating Info -->
                <div
                    class="absolute -bottom-8 -left-8 bg-primary p-8 text-white hidden md:block shadow-2xl"
                >
                    <div
                        class="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-50"
                    >
                        Workshop
                    </div>
                    <div
                        class="text-3xl font-black uppercase italic tracking-tighter"
                    >
                        Tallinn HQ
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
