<!--page.svelte-->

<script lang="ts">
    import type { PageData } from './$types';
    import Footer from "./Footer.svelte";

    interface Props {
        data: PageData;
    }

    let { data = $bindable() }: Props = $props();

  let meAscii = data.meAscii;
</script>


<h1>Kerim Anater</h1>

<div id="ascii-art">
  <pre style="font-size: 0.25rem; line-height: 1.0;">
    {meAscii}
  </pre>
</div>



<h1>About</h1>


<Footer />

