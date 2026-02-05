<script>
    import Hero from "$lib/Hero.svelte";
    import Services from "$lib/Services.svelte";
    import Partners from "$lib/Partners.svelte";
    import ContactSection from "$lib/ContactSection.svelte";
    import CTASection from "$lib/CTASection.svelte";
    import { t } from "svelte-i18n";

    export let data;
    const { services, partners } = data;
</script>

<svelte:head>
    <title
        >E-Autoalarm | Kvaliteetsed Veokonksud ja Turvasüsteemid Tallinnas</title
    >
    <meta
        name="description"
        content="E-Autoalarm pakub kvaliteetset veokonksude paigaldust, haagisemooduleid ja autode turvasüsteeme Tallinnas. Thule, Bosal ja Steinhof ametlik partner. Küsi pakkumist!"
    />
    <meta
        name="keywords"
        content="veokonksud, veokonksude paigaldus, autoalarmid, turvasüsteemid, Tallinn, Bosal, Thule, Steinhof, Webasto, Autoterm"
    />
    <meta
        property="og:title"
        content="E-Autoalarm | Kvaliteetsed Veokonksud ja Turvasüsteemid"
    />
    <meta
        property="og:description"
        content="Professionaalne veokonksude paigaldus ja autoelektroonika lahendused Tallinnas."
    />
    <link rel="canonical" href="https://e-autoalarm.ee/" />
</svelte:head>

<Hero />
<Partners {partners} />
<Services {services} />
<ContactSection />

<CTASection image="/images/cta-bg.png" />
