<script lang="ts">
    import UPPER_IMG from "../../assets/play2earn-upper.webp";
    import CHARACTER_IMG from "../../assets/p2e-nft.webp";
    import PHON_IMG from "../../assets/p2e-mobile.webp";
</script>

<section id="p2e">
    <div class="section-wrapper py-3 py-lg-5">
        <div class="p2e-upper-image">
            <img src={UPPER_IMG} alt="" />
        </div>
    </div>

    <div class="down-section-wrapper">
        <div class="row align-items-center">
            <div class="col-md-5 d-none d-lg-block">
                <div class="character">
                    <img src={CHARACTER_IMG} alt="" />
                </div>
            </div>
            <div class="col-md-7">
                <div class="wrapper d-flex flex-column w-100">
                    <div class="phone-img w-100 ">
                        <img src={PHON_IMG} class="w-100" alt="" />
                    </div>
                    <div class="details mt-5 pt-4">
                        <div class="wrapper text-center col-lg-8 mx-auto">
                            <h3 class="text-green">About game</h3>
                            <p class="text-white">NFT collection packed with utilities NFT collection packed with utilities NFT collection packed with utilities NFT collection packed</p>
                            <button class="green-button"> Play Now !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: url("../../assets/black-green-texture.webp") no-repeat center / cover;
        overflow-x: hidden;
        @include media-breakpoint-up(md) {
            margin-top: -2%;
        }
       
    }

    .p2e-upper-image {
        width: 100%;
        overflow: hidden;
        & > img {
            width: 101%;
        }
    }

    .down-section-wrapper {
         @include media-breakpoint-up(md) {
            margin-top: -15vw;
        }
    }
    .character {
        & > img {
            width: 35vw;
            transform: translateX(-1vw);
        }
    }
    .phone-img {
        & > img {
            transform: translateX(10px);
        }
    }
    .details {
        & > .wrapper {
            & > h3 {
                font-size: clamp(30px, 2vw, 48px);
                margin-bottom: 1rem;
            }
            & > p {
                font-size: clamp(16px, 1.2vw, 24px);
            }
            & > .green-button {
                background: $green;
                padding: 0.7rem 2.5rem;
                font-size: 20px;
                border-radius: 15px;
                box-shadow: 0px 0px 20px 3px $purple;
                border: none;
                margin-top: 2rem;
            }
        }
    }
</style>
