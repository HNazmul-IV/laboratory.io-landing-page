<script lang="ts">
    import RoadMapCard from "../Cards/RoadMapCard.svelte";

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-circle-fill me-2" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                </svg>`;

    const card_conf = [
        {
            shadow: false,
            outline: false,
            title: "Phase 1",
            desc: `<ul class="text-start roadmap-card-list">
                        <li>DeFi Ecosystem</li>
                        <li>Trading community on Cronos.</li>
                        <li>Crazy Scientist NFT collection sold out</li>
                        <li>LAB token presale & launch</li>
                        <li>Lab DEX V1 deployed</li>
                        <li>NFT Staking</li>
                        <li>LAB token staking</li>
                    <ul>`,
        },
        {
            shadow: true,
            outline: false,
            title: "Phase 2",
            desc: `<ul class="text-start roadmap-card-list">
                        <li>Lab DEX V2</li>
                        <li>Lab Pad</li>
                        <li>CERN Laboratory</li>
                        <li>Compound X & Y</li>
                        <li>Growth Chambers</li>
                        <li>Lab Store</li>
                    <ul>`,
        },
        {
            shadow: false,
            outline: true,
            title: "Phase 3",
            desc: `<ul class="text-start roadmap-card-list green">
                        <li>Labverse</li>
                        <li>CERN V2</li>
                        <li>Smart Contract Services</li>
                    <ul>`,
        },
    ];
</script>

<section id="roadmap" class="pt-5">
    <div class="title py-5">
        <h1 class=" text-center text-white">Roadmap</h1>
    </div>

    <div class="roadmap-content-wrapper p-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-5">
            {#each card_conf as conf}
                <div class="col">
                    <RoadMapCard conf="{conf}" />
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: url("../../assets/black-green-texture.png") no-repeat center / cover;
        & > .title {
            & > h1 {
                font-size: clamp(40px, 8vw, 154px);
                padding: clamp(10px, 4vw, 30px);
                color: white;
                font-weight: 500;
            }
        }
        .roadmap-content-wrapper {
            & > .row > .col {
                padding: clamp(10px, 2.5vw, 2.7rem);
            }
        }
    }
</style>
