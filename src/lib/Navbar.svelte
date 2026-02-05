<script>
  import { t, locale } from "svelte-i18n";
  import ContactModal from "./ContactModal.svelte";

  let isOpen = false;
  let isModalOpen = false;

  function setLocale(newLocale) {
    $locale = newLocale;
    localStorage.setItem("locale", newLocale);
    isOpen = false;
  }

  function handleKeydown(event, lang) {
    if (event.key === "Enter" || event.key === " ") {
      setLocale(lang);
    }
  }
</script>

<nav
  class="bg-white border-b border-gray-100 sticky top-0 z-50 py-6"
  aria-label="Peamine navigatsioon"
>
  <div class="container mx-auto px-4 flex justify-between items-center">
    <a
      href="/"
      class="text-3xl font-black text-secondary flex items-baseline gap-1 tracking-tighter uppercase italic"
      aria-label="E-Autoalarm Avaleht"
    >
      <span class="text-primary not-italic" aria-hidden="true">E</span>
      <span>Autoalarm</span>
    </a>

    <div class="hidden md:flex items-center space-x-12">
      <div
        class="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400"
      >
        <a href="/" class="hover:text-primary transition-colors"
          >{$t("nav.home")}</a
        >
        <a href="/#services" class="hover:text-primary transition-colors"
          >{$t("nav.services")}</a
        >
        <a href="/kontakt" class="hover:text-primary transition-colors"
          >{$t("nav.contact")}</a
        >
      </div>

      <div class="h-8 w-px bg-gray-100" aria-hidden="true"></div>

      <!-- Language Switcher -->
      <div
        class="flex gap-3 text-[10px] font-black uppercase tracking-widest"
        role="group"
        aria-label="Keele valik"
      >
        {#each ["et", "en", "ru"] as lang}
          <button
            on:click={() => setLocale(lang)}
            on:keydown={(e) => handleKeydown(e, lang)}
            class="transition-colors {$locale === lang
              ? 'text-primary'
              : 'text-gray-300 hover:text-secondary'}"
            aria-pressed={$locale === lang}
            aria-label="Vali keel: {lang.toUpperCase()}"
          >
            {lang}
          </button>
        {/each}
      </div>

      <div class="h-8 w-px bg-gray-100" aria-hidden="true"></div>

      <button
        on:click={() => (isModalOpen = true)}
        class="bg-secondary text-white p-3 hover:bg-primary transition-all group flex items-center gap-3"
        aria-label={$t("nav.inquiry")}
      >
        <span class="text-[10px] font-bold px-2 hidden group-hover:block"
          >{$t("nav.inquiry")}</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>

    <button
      class="md:hidden flex flex-col gap-1.5 border-none bg-transparent cursor-pointer p-2"
      on:click={() => (isOpen = !isOpen)}
      aria-expanded={isOpen}
      aria-label="Mobiilimenüü"
    >
      <span class="w-8 h-0.5 bg-secondary block"></span>
      <span
        class="w-8 h-0.5 bg-secondary block transition-all {isOpen
          ? 'opacity-0'
          : ''}"
      ></span>
      <span class="w-8 h-0.5 bg-secondary block"></span>
    </button>
  </div>

  {#if isOpen}
    <div
      class="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
    >
      <div
        class="flex flex-col gap-6 text-xs font-bold uppercase tracking-[0.3em]"
      >
        <a href="/" on:click={() => (isOpen = false)}>01 // {$t("nav.home")}</a>
        <a href="/#services" on:click={() => (isOpen = false)}
          >02 // {$t("nav.services")}</a
        >
        <a href="/kontakt" on:click={() => (isOpen = false)}
          >03 // {$t("nav.contact")}</a
        >
      </div>
      <div class="h-px bg-gray-100 my-2" aria-hidden="true"></div>

      <div
        class="flex gap-6 mono text-[10px] font-black uppercase tracking-widest justify-center"
      >
        {#each ["et", "en", "ru"] as lang}
          <button
            on:click={() => setLocale(lang)}
            on:keydown={(e) => handleKeydown(e, lang)}
            class="transition-colors {$locale === lang
              ? 'text-primary'
              : 'text-gray-400'}"
            aria-pressed={$locale === lang}
            aria-label="Vali keel: {lang.toUpperCase()}"
          >
            {lang}
          </button>
        {/each}
      </div>

      <div class="h-px bg-gray-100 my-2" aria-hidden="true"></div>
      <button
        on:click={() => {
          isModalOpen = true;
          isOpen = false;
        }}
        class="bg-primary text-white py-4 font-bold text-center uppercase tracking-widest text-xs"
        aria-label={$t("nav.inquiry")}
      >
        {$t("nav.inquiry")}
      </button>
    </div>
  {/if}
</nav>

<ContactModal bind:isOpen={isModalOpen} />
