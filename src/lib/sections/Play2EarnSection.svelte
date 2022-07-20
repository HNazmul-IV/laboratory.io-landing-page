<script lang="ts">
    import UPPER_IMG from "../../assets/play-and-earn-game.png";
    import CHARACTER_IMG from "../../assets/p2e-nft.png";
    import PHON_IMG from "../../assets/p2e-mobile.png";
    import GAME_CONTROLLER_IMG from "../../assets/game-controller.png";
</script>

<section id="p2e">
    <div class="section-wrapper py-3 py-lg-5">
        <div class="p2e-upper-image">
            <img src="{UPPER_IMG}" alt="" />
        </div>
    </div>

    <div class="down-section-wrapper">
        <div class="row align-items-center justify-content-between">
            <div class="col-md-5 d-none d-lg-block">
                <div class="character">
                    <img src="{CHARACTER_IMG}" alt="" />
                </div>
            </div>
            <div class="col-lg-7 col-xxl-6 offset-xxl-1">
                <div class="wrapper d-flex flex-column w-100">
                    <div class="phone-img w-100 text-end">
                        <img src="{PHON_IMG}" class="" alt="" />
                    </div>
                    <div class="details mt-5 py-4 pb-md-0">
                        <div class="wrapper text-center p-4  mx-auto">
                            <h3 class="text-green">About game</h3>
                            <p class="text-white">NFT collection packed with utilities NFT collection packed with utilities NFT collection packed with utilities NFT collection packed</p>
                            <button class="green-button"> Play Now !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="game-controller-img">
            <img src="{GAME_CONTROLLER_IMG}" alt="" />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: url("../../assets/black-green-texture.png") no-repeat center / cover;
        overflow-x: hidden;
        @include media-breakpoint-up(md) {
            margin-top: -2%;
            padding-top: 4vw;
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
        position: relative;
        @include media-breakpoint-up(md) {
            margin-top: -15vw;
        }

        .game-controller-img {
            position: absolute;
            top: 73.3%;
            left: 37.2%;
            width:14vw;
            &> img{
                width:100%;
            }
        }
    }
    .character {
        & > img {
            width: 36.5vw;
            transform: translateX(-0.5vw);
        }
    }
    .phone-img {
        position: relative;
        width: 30vw;
        @include media-breakpoint-up(xxl) {
            margin-top: 8vw;
        }
        & > img {
            width: 92%;
            transform: translateX(4.8vw);
        }
    }
    .details {
        & > .wrapper {
            & > h3 {
                font-size: clamp(30px, 3vw, 58px);
                margin-bottom: 1rem;
            }
            & > p {
                font-size: clamp(16px, 1.2vw, 24px);
            }
            & > .green-button {
                background: $green;
                padding: 0.7rem 3.5rem;
                font-size: 2.3vw;
                border-radius: 1.3vw;
                box-shadow: 0px 0px 20px 3px $purple;
                border: none;
                margin-top: 2rem;
            }
        }
    }
</style>
