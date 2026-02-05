<script>
    import { t } from "svelte-i18n";
</script>

<svelte:head>
    <title>{$t("nav.contact")} | E-Autoalarm</title>
</svelte:head>

<section class="py-24 md:py-40 bg-white relative overflow-hidden">
    <!-- Clean Geometric Lines -->
    <div class="absolute top-0 left-1/4 w-px h-full bg-gray-100 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto">
            <div class="mb-20">
                <h1
                    class="text-6xl md:text-9xl font-black text-secondary tracking-tighter leading-[0.85] uppercase italic"
                >
                    {$t("contact.title")} <br />
                    <span class="text-primary not-italic"
                        >{$t("contact.title_italic")}</span
                    >
                </h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <!-- Info Column -->
                <div class="space-y-16">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div class="group">
                            <div
                                class="text-[10px] text-primary font-bold tracking-[0.3em] mb-4 uppercase"
                            >
                                {$t("contact.address_label")}
                            </div>
                            <p
                                class="text-2xl font-black text-secondary uppercase italic leading-tight"
                            >
                                Kadaka tee 1<br />12915 Tallinn, Eesti
                            </p>
                        </div>

                        <div class="group">
                            <div
                                class="text-[10px] text-primary font-bold tracking-[0.3em] mb-4 uppercase"
                            >
                                {$t("contact.contact_label")}
                            </div>
                            <a
                                href="mailto:info@e-autoalarm.ee"
                                class="text-2xl font-black text-secondary uppercase italic leading-tight hover:text-primary transition-colors"
                            >
                                info@e-autoalarm.ee
                            </a>
                        </div>

                        <div class="group">
                            <div
                                class="text-[10px] text-primary font-bold tracking-[0.3em] mb-4 uppercase"
                            >
                                {$t("contact.contact_label")}
                            </div>
                            <a
                                href="tel:+37250123456"
                                class="text-2xl font-black text-secondary uppercase italic leading-tight hover:text-primary transition-colors"
                            >
                                +372 50 123 456
                            </a>
                        </div>

                        <div class="group">
                            <div
                                class="text-[10px] text-primary font-bold tracking-[0.3em] mb-4 uppercase"
                            >
                                {$t("contact.hours_label")}
                            </div>
                            <p
                                class="text-2xl font-black text-gray-300 uppercase italic leading-tight"
                            >
                                E-R: 09:00 - 18:00<br />L-P: Suletud
                            </p>
                        </div>
                    </div>

                    <!-- Map Integrated directly -->
                    <div
                        class="h-[400px] border-accent overflow-hidden relative group"
                    >
                        <iframe
                            title="Asukoha kaart"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5694857476685!2d24.673859677461436!3d59.42358897466184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb1388655555%3A0x67375276c12513a8!2sKadaka%20tee%201%2C%2012915%20Tallinn!5e0!3m2!1set!2see!4v1707166000000!5m2!1set!2see"
                            width="100%"
                            height="100%"
                            style="border:0;"
                            allowfullscreen
                            loading="lazy"
                            class="filter grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 transition-all duration-1000"
                        ></iframe>
                    </div>
                </div>

                <!-- Form Column -->
                <div class="relative">
                    <div
                        class="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[100px] pointer-events-none"
                    ></div>

                    <form
                        class="bg-secondary p-8 md:p-16 shadow-2xl relative z-10 text-white"
                    >
                        <h3
                            class="text-2xl font-black uppercase tracking-tight mb-12 italic"
                        >
                            {$t("contact.form_title")}
                        </h3>

                        <div class="space-y-10">
                            <div class="group relative">
                                <label
                                    for="name"
                                    class="text-[10px] text-gray-500 uppercase tracking-widest block mb-4 group-focus-within:text-primary transition-colors font-bold"
                                    >{$t("contact.name_label")}</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    class="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-xl font-bold uppercase tracking-tight placeholder:text-white/5"
                                />
                            </div>

                            <div class="group relative">
                                <label
                                    for="email"
                                    class="text-[10px] text-gray-500 uppercase tracking-widest block mb-4 group-focus-within:text-primary transition-colors font-bold"
                                    >{$t("contact.email_label")}</label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    class="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-xl font-bold uppercase tracking-tight placeholder:text-white/5"
                                />
                            </div>

                            <div class="group relative">
                                <label
                                    for="message"
                                    class="text-[10px] text-gray-500 uppercase tracking-widest block mb-4 group-focus-within:text-primary transition-colors font-bold"
                                    >{$t("contact.message_label")}</label
                                >
                                <textarea
                                    id="message"
                                    rows="4"
                                    class="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-xl font-bold uppercase tracking-tight placeholder:text-white/5 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="w-full bg-primary text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-white hover:text-secondary transition-all flex items-center justify-center gap-4"
                            >
                                {$t("contact.send_button")}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
