<script lang="ts">
    import NavBar from "./lib/NavBar.svelte";
    import AboutSection from "./lib/sections/AboutSection.svelte";
    import NftSections from "./lib/sections/Nft-sections.svelte";
import Play2EarnSection from "./lib/sections/Play2EarnSection.svelte";
    import TopSection from "./lib/sections/TopSection.svelte";
import UtilitesSection from "./lib/sections/UtilitesSection.svelte";
    const sections = [];
    for (let i = 1; i < 10; ++i) sections.push(i);
</script>

<NavBar />
<TopSection />
<AboutSection />
<NftSections />
<UtilitesSection/>
<Play2EarnSection/>
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
