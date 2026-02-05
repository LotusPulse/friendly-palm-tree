<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import { page } from "$app/stores";
  import "../lib/i18n";
  import { isLoading } from "svelte-i18n";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="E-Autoalarm" />
  <meta property="og:locale" content="et_EE" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:font-bold"
>
  Hüppa sisu juurde
</a>

{#if $isLoading}
  <div class="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <div
      class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"
    ></div>
  </div>
{:else}
  <div class="flex flex-col min-h-screen">
    {#if $page.url.pathname !== "/admin"}
      <Navbar />
    {/if}

    <main id="main-content" class="flex-1">
      <slot />
    </main>

    {#if $page.url.pathname !== "/admin"}
      <Footer />
    {/if}
  </div>
{/if}
