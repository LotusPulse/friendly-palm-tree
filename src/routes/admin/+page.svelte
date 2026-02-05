<script>
    import { onMount } from "svelte";

    onMount(() => {
        const script = document.createElement("script");
        script.src =
            "https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js";
        document.body.appendChild(script);
    });
</script>

<svelte:head>
    <title>Sisuhaldus</title>
    <link rel="config" type="text/yaml" href="/config.yml" />
</svelte:head>

<div id="nc-root">Laadin sisuhaldust...</div>
