<script lang="ts">
    import NavBar from "./lib/NavBar.svelte";
    import AboutSection from "./lib/sections/AboutSection.svelte";
    import TopSection from "./lib/sections/TopSection.svelte";
    const sections = [];
    for (let i = 1; i < 10; ++i) sections.push(i);
</script>

<NavBar />
<TopSection />
<AboutSection />
<section id={"nfts"}><h1>Section is is red</h1></section>
<section id={"play2earn"}><h1>Section is is red</h1></section>

<style>
    section {
        padding: 8rem 0;
        padding-top: 11rem;
    }
    #about {
        background-color: green;
    }
    #nfts {
        background-color: blue;
    }
    #play2earn {
        background-color: red;
    }
    #sec4 {
        background-color: purple;
    }
    #sec5 {
        background-color: orange;
    }
    #sec6 {
        background-color: cyan;
    }
</style>
