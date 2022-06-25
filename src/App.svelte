<script lang="ts">
  import NavBar from './lib/NavBar.svelte'
import About from './lib/sections/about.svelte'
import Header from './lib/sections/Header.svelte'
  const sections = []
  for(let i = 1; i < 10; ++i) sections.push(i)
</script>



<NavBar/>
<Header/>
<About/>
<section id={"nft-collection"}><h1>Section is is red </h1></section>
<section id={"play2earn"}><h1>Section is is red </h1></section>


<style>
  section {
    padding: 8rem 0;
    padding-top: 11rem;
  }
  #about {
    background-color:green;
  }
  #nft-collection { background-color: blue;}
  #play2earn { background-color: red;}
  #sec4 { background-color: purple;}
  #sec5 { background-color: orange;}
  #sec6 { background-color: cyan;}
</style>