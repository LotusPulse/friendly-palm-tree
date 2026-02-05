<script>
    import { t } from "svelte-i18n";
    import { fade, fly } from "svelte/transition";

    export let isOpen = false;
    export let onClose = () => {
        isOpen = false;
    };
</script>

{#if isOpen}
    <!-- Backdrop -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="fixed inset-0 bg-secondary/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
        on:click|self={onClose}
        transition:fade={{ duration: 300 }}
    >
        <!-- Modal Content -->
        <div
            class="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            transition:fly={{ y: 50, duration: 500 }}
        >
            <!-- Close Button -->
            <button
                on:click={onClose}
                class="absolute top-6 right-6 z-20 text-secondary hover:text-primary transition-colors p-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <div class="grid grid-cols-1 lg:grid-cols-12">
                <!-- Left: Info -->
                <div
                    class="lg:col-span-5 bg-gray-50 p-8 md:p-16 border-r border-gray-100 hidden lg:block"
                >
                    <div class="space-y-12">
                        <div>
                            <h2
                                class="text-4xl font-black text-secondary tracking-tighter uppercase italic mb-8"
                            >
                                {$t("contact.title")} <br />
                                <span class="text-primary not-italic"
                                    >{$t("contact.title_italic")}</span
                                >
                            </h2>
                            <p
                                class="text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-relaxed"
                            >
                                {$t("contact.description")}
                            </p>
                        </div>

                        <div class="space-y-8">
                            <div class="group">
                                <div
                                    class="text-[10px] text-primary font-bold tracking-[0.3em] mb-2 uppercase"
                                >
                                    {$t("contact.address_label")}
                                </div>
                                <div
                                    class="text-lg font-black text-secondary italic"
                                >
                                    Kadaka tee 1, Tallinn
                                </div>
                            </div>
                            <div class="group">
                                <div
                                    class="text-[10px] text-primary font-bold tracking-[0.3em] mb-2 uppercase"
                                >
                                    {$t("contact.contact_label")}
                                </div>
                                <div
                                    class="text-lg font-black text-secondary italic"
                                >
                                    info@e-autoalarm.ee
                                </div>
                                <div
                                    class="text-lg font-black text-secondary italic"
                                >
                                    +372 50 123 456
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Form -->
                <div class="lg:col-span-7 p-8 md:p-16">
                    <form class="space-y-10">
                        <h3
                            class="text-2xl font-black uppercase tracking-tight mb-4 italic text-secondary"
                        >
                            {$t("contact.form_title")}
                        </h3>

                        <div class="space-y-8">
                            <div class="group relative">
                                <label
                                    for="modal-name"
                                    class="text-[10px] text-gray-400 uppercase tracking-widest block mb-1 group-focus-within:text-primary transition-colors font-bold"
                                    >{$t("contact.name_label")}</label
                                >
                                <input
                                    type="text"
                                    id="modal-name"
                                    class="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-all text-lg font-bold uppercase tracking-tight text-secondary"
                                    placeholder="Nimi"
                                />
                            </div>

                            <div class="group relative">
                                <label
                                    for="modal-email"
                                    class="text-[10px] text-gray-400 uppercase tracking-widest block mb-1 group-focus-within:text-primary transition-colors font-bold"
                                    >{$t("contact.email_label")}</label
                                >
                                <input
                                    type="email"
                                    id="modal-email"
                                    class="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-all text-lg font-bold uppercase tracking-tight text-secondary"
                                    placeholder="e-post"
                                />
                            </div>

                            <div class="group relative">
                                <label
                                    for="modal-message"
                                    class="text-[10px] text-gray-400 uppercase tracking-widest block mb-1 group-focus-within:text-primary transition-colors font-bold"
                                    >{$t("contact.message_label")}</label
                                >
                                <textarea
                                    id="modal-message"
                                    rows="3"
                                    class="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-primary transition-all text-lg font-bold uppercase tracking-tight text-secondary resize-none"
                                    placeholder="Sõnum"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="w-full bg-primary text-white py-5 font-black uppercase tracking-[0.3em] hover:bg-secondary transition-all flex items-center justify-center gap-4 shadow-xl"
                            >
                                {$t("contact.send_button")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
{/if}
