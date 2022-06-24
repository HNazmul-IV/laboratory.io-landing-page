<script lang="ts">
  import NavBar from './lib/NavBar.svelte'
  const sections = []
  for(let i = 1; i < 10; ++i) sections.push(i)
</script>
<NavBar/>
{#each sections as section }
<section id={'sec'+section}><h1>Section {section}</h1></section>
{/each}
<style>
  section {
    padding: 8rem 0;
    padding-top: 11rem;
  }
  #sec1 {
    background-color:green;
  }
  #sec2 { background-color: blue;}
  #sec3 { background-color: red;}
  #sec4 { background-color: purple;}
  #sec5 { background-color: orange;}
  #sec6 { background-color: cyan;}
</style>