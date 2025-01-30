<!--page.svelte-->

<script lang="ts">
    import type { PageData } from './$types';
    // import Footer from "./Footer.svelte";

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


<div class="block-element">
<h1>About</h1>

<strong>Kerim Anater is a arabic-german boy</strong>, technologist and artist.
<br>
Munich, Germany
</div>




<div class="block-element">
<h1>Past</h1>
<ul>
  <li>Bachelor's degree in Computer Science at the Technical University of Munich '24</li>
  <li>Thesis on Context-Aware Action Recognition on Film scenes</li>
  <li>Intern at QAware</li>
  <li>Working Student as Full-Stack Developer at SelectCode</li>
  <li>HackaTUM</li>
  <li>Berlin Symposium on Artificial Teacher Avatars</li>
  <li>LabLab.ai hackathon 2025</li>
</ul>
</div>


<div class="block-element">
<h1>Present</h1>
<ul>
  <li>Kerim works as a fullstack software engineer and studies his masters with a focus on data science and machine learning.
    He is a proponent of building software that is easy to use, maintainable and lightweight.</li>
  <li>Learning Svelte</li>
</ul>
</div>


<!--<Footer />-->

