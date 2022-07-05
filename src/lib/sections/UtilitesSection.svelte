<script lang="ts">
    import CHARACTER_NFT from "../../assets/utilities-character.png";
    import UtilitiesCard from "../Cards/UtilitiesCard.svelte";
    import RIBON_IMG from "../../assets/utility-section-ribon.png";

    const utilities_data = [
        {
            title: "Lab DEX",
            desc: "The preferred DEX on Cronos and the cheapest",
        },
        {
            title: "Lab Growth chambers",
            desc: "DeFi, Stake, grow, experiment with our NFTs and LAB token",
        },
        {
            title: "CERN",
            desc: "The Head of Laboratory has experiments for our community and unique token and NFT rewards Lab Pad <br> Launch your NFT or token and be empowered by the Laboratory community",
        },
        {
            title: "Community",
            desc: "Since Nov 2021, Laboratory community have worked together to buy the best performing Cronos assets",
        },
        {
            title: "Smart contract services",
            desc: "Want to up your NFT project utility with customized/ adventure like DeFi? We provide unique smart contracts and team building services.",
        },
        {
            title: "Lab Store",
            desc: "Coming Soon",
        },
        {
            title: "Play 2earn",
            desc: "Labverse will consist of mini games that will provide opportunities for the Laboratory community to win and earn. The value of Labverse will be interlinked with Lab’s gamified DeFi.",
        },
    ];
</script>

<section id="utilites">
    <div class="title text-center">
        <h1>Utilities</h1>
    </div>

    <div class="utilities-wrapper">
        <div class="row">
            <div class="col-md-6 offset-md-1">
                {#each utilities_data as data}
                    <UtilitiesCard {data} />
                {/each}
            </div>
            <div class="col-md-5 d-none d-md-block">
                <div class="character-nft">
                    <img src={CHARACTER_NFT} alt="" />
                </div>
            </div>
        </div>
        <div class="section-ribon">
            <img src={RIBON_IMG} alt="" />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: url("../../assets/black-green-texture.png") no-repeat center / cover;
        overflow-x: hidden;
    }
    section > .title h1 {
        font-size: clamp(62px, 8vw, 154px);
        padding: clamp(10px, 4vw, 30px);
        color: white;
        font-weight: 500;
    }
    .character-nft {
        width: 40vw;
        max-width: 795px;
        margin-left: auto;
        position: relative;
        z-index: 1;
        right: -2%;
        margin-top: -14%;

        img {
            width: 100%;
        }
    }

    .section-ribon {
        img {
            width: 100%;
        }
    }
</style>
