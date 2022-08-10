<script lang="ts">
    import UPPER_IMG from "../../assets/play-and-earn-game.png";
    import CHARACTER_IMG from "../../assets/p2e-nft.png";
    import PHON_IMG from "../../assets/p2e-mobile.png";
    import GAME_CONTROLLER_IMG from "../../assets/game-controller.png";
    import GAMEFI_DEV_IMG from "../../assets/gamifi-dev.png";
</script>

<section id="gamification">
    <!-- <div class="section-wrapper py-3 py-lg-5">
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
                            <button class="green-button"> Comming Soon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="game-controller-img">
            <img src="{GAME_CONTROLLER_IMG}" alt="" />
        </div>
    </div> -->
    <div class="section-wrapper py-3 py-lg-5">
        <div class="p2e-upper-image">
            <div class="sidetext">
                <h1><span class="text-white">Gamified </span> <br /> <span class="text-green"> DeFi</span></h1>
            </div>
            <img src="{GAMEFI_DEV_IMG}" alt="" />
        </div>
        <div class="p-1 pb-lg-5 about-game">
            <div class="row justify-content-center ">
                <div class="col-12 col-md-8 col-lg-7 col-xl-6">
                    <div class="details mb-5 py-4">
                        <div class="wrapper text-center p-4  mx-auto">
                            <h3 class="text-green">About Gamified DeFi</h3>
                            <p class="text-white">
                                Labverse will consist of gamified DeFi & mini games that will provide opportunities for the Laboratory community to win and earn. The value of Labverse will be
                                interlinked with Lab’s gamified DeFi
                            </p>
                            <button class="green-button"> Coming Soon</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="console-img img-1"><img src="{GAME_CONTROLLER_IMG}" alt="" /></div>
            <div class="console-img img-2"><img src="{GAME_CONTROLLER_IMG}" alt="" /></div>
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
        position: relative;
        z-index: 1;
        .sidetext {
            position: absolute;
            left: 7%;
            top: 39%;
            width: fit-content;
            text-align: center;

            h1 {
                font-size: 5vw;
            }
        }
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
            width: 14vw;
            & > img {
                width: 100%;
            }
        }
    }
    .character {
        & > img {
            width: 36.5vw;
            max-width: 698px;
            transform: translateX(-0.1vw);
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
                font-size: 2vw;
                border-radius: 1.3vw;
                box-shadow: 0px 0px 20px 3px transparentize($color: $purple, $amount: 0.5), 0px 0px 100px 3px transparentize($color: $purple, $amount: 0.3);
                border: none;
                margin-top: 2rem;
            }
        }
    }

    .about-game {
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .console-img {
        position: absolute;
        z-index: -1;
        animation: moving 10s infinite linear alternate;
        width: 10vw;
        & > img {
            width: 100%;
        }

        &.img-1 {
            top: 50%;
            left: 6vw;
        }
        &.img-2 {
            top: 40%;
            right: 6vw;
            animation-direction: alternate-reverse;

            & > img {
                transform: rotate(-60deg);
            }
        }
    }

    @keyframes moving {
        0% {
            transform: translate(0vw, 50%);
        }
        50% {
            transform: translate(0vw, 0%);
        }
        100% {
            transform: translate(0vw, -50%);
        }
    }
</style>
