<script lang="ts">
    import CHARACTER_NFT from "../../assets/utilities-character.png";
    import UtilitiesCard from "../Cards/UtilitiesCard.svelte";
    import RIBON_IMG from "../../assets/utility-section-ribon.png";
</script>

<section id="utilites">
    <div class="title text-center">
        <h1>Utilities</h1>
    </div>

    <div class="utilities-wrapper">
        <div class="row align-items-center">
            <div class="col-md-6 offset-md-1">
                <UtilitiesCard />
                <UtilitiesCard />
                <UtilitiesCard />
                <UtilitiesCard />
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
