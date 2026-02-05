<script>
    export let partners = [];
</script>

<section class="bg-white py-12 border-b border-gray-100 relative">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
            <div
                class="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-8 items-center flex-1"
            >
                {#each partners as partner}
                    <div
                        class="text-xl md:text-2xl font-black text-gray-200 hover:text-secondary hover:scale-110 transition-all duration-500 cursor-default select-none grayscale hover:grayscale-0 opacity-50 hover:opacity-100 italic uppercase"
                    >
                        {partner.title}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
