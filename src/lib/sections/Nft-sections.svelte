<script lang="ts">
    import HEADER_RIBON from "../../assets/nft-section-ribon.png";
    import NFT_SLIDE_1 from "../../assets/nft-slide-one.png";
    import NFT_SLIDE_2 from "../../assets/nft-slide-two.png";
    import PROD_LOGO from "../../assets/logo-dark-prod.svg";
    import NftSlideLTR from "../Sliders/NftSlide.svelte";
    import { onMount } from "svelte";

    let crazyCard: HTMLDivElement;
    let glowingBorder: HTMLDivElement;
    // let upFromMiddle = 0;
    // let downFromMiddle = 0;
    // //Animation Crazy Card.

    // const animatingGlow = (e: Event) => {
    //     const { top }: DOMRect = crazyCard.getBoundingClientRect();
    //     const windowMiddlePosition = Math.floor(window.innerHeight / 2);
    //     const windowHeightByItem = Math.floor(top + crazyCard.clientHeight / 2);
    //     const inRange = (item: number, start: number, end: number) => item >= start && item <= end;
    //     upFromMiddle = upFromMiddle <= 0 ? windowMiddlePosition - windowHeightByItem : 0;
    //     downFromMiddle = upFromMiddle <= 0 ? windowHeightByItem - windowMiddlePosition : 0;
    //     console.log({ upFromMiddle, downFromMiddle });
    // };

    // onMount(() => {
    //     window.addEventListener("scroll", animatingGlow);
    // });
</script>

<section id="nfts">
    <div class="nft-showcase-wrapper">
        <div class="ribon">
            <img src="{HEADER_RIBON}" alt="" />
        </div>
        <div class="slide-one">
            <NftSlideLTR directions="rtl" />
        </div>
        <div class="slide-two">
            <NftSlideLTR directions="ltr" />
        </div>
        <div class="nft-slide-text">
            <div class="d-flex">
                <h1 class="{'text-green prime'}">Play to earn with NFT collection on cronos.&nbsp;&nbsp;&nbsp;</h1>
                <h1 class="{'text-green prime'}">Play to earn with NFT collection on cronos.&nbsp;&nbsp;&nbsp;</h1>
            </div>
            <div class="d-flex" style="">
                <h3 class="text-light second">NFT collection packed with utilities. NFT collection packed with utilities.&nbsp;&nbsp;&nbsp;</h3>
                <h3 class="text-light second">NFT collection packed with utilities. NFT collection packed with utilities.&nbsp;&nbsp;&nbsp;</h3>
            </div>
        </div>
    </div>

    <div class=" mint-area-wrapper">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <div bind:this="{crazyCard}" class="crazy-card text-center">
                        <h1><span class="text-green creazy">Crazy</span> <br /> <span class="large-text text-white">5555</span> <br /> <span class="text-green scientist">Scientists</span></h1>
                        <div bind:this="{glowingBorder}" class="glowing-border"></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-10 py-5 py-lg-0 px-0 ps-lg-5 text-center">
                    <div class="mint-area flex-column">
                        <h1 class="text-light mint-text">Mint:</h1>
                        <button class="green-button"> Sold Out </button>
                        <a href="https://app.ebisusbay.com/collection/crazy-scientists" target="_blank" class="d-inline-block text-decoration-none">
                            <button class="green-button second d-flex">
                                <img src="{PROD_LOGO}" alt="" />
                                <div class="text text-start">
                                    <p class="mb-0 small-text">Buy it on</p>
                                    <p class="mb-0">Ebisu's Bay</p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section#nfts {
        background: url("../../assets/black-green-texture.png") center / 104%;
        overflow-x: hidden;
        position: relative;
        z-index: 2;

        @mixin sm {
            @include media-breakpoint-down(sm) {
                @content;
            }
        }
        .container {
            @include media-breakpoint-up(xl) {
                max-width: 92%;
            }
        }
        .nft-showcase-wrapper {
            .ribon {
                & > img {
                    width: 100%;
                }
            }
            .slide-one {
                margin-top: -2%;
                margin-bottom: 2%;
            }
            .nft-slide-text {
                transform: rotate(-3.4deg);
                margin-top: 2vw;
                overflow-x: hidden;

                @include media-breakpoint-down(sm) {
                    margin-top: 0px;
                }
                &* {
                    white-space: nowrap;
                }
                font-size: 16px;
                .prime {
                    font-size: clamp(2.3em, 6vw, 5em);
                    animation: moving-text 20s linear infinite;
                    --minus-move: calc(-100%);
                    font-weight: 900;
                }
                .second {
                    font-weight: normal;
                    font-size: clamp(1.3em, 4vw, 2.5em);
                    animation: moving-text 30s linear 0s infinite;
                    --minus-move: calc(-100%);
                }
            }
        }

        .mint-area-wrapper {
            padding: 10vw 1vw;

            .crazy-card {
                width: fit-content;
                padding: 8.7vw 5vw;
                font-size: 16px;
                margin: auto;
                position: relative;
                z-index: 1;
                user-select: none;
                @include media-breakpoint-down(md) {
                    padding: 20vw 9vw;
                }
                .glowing-border {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    left: 0px;
                    filter: drop-shadow(0px 0px 0.4vw $green) drop-shadow(0px 0px 1.5vw transparentize($green, 0.1));
                    border: 15px solid $green;
                    border-radius: 3.5vw;

                    @include media-breakpoint-down(md) {
                        border-width: 8px;
                    }
                }
                span.creazy {
                    font-size: clamp(40px, 4.8vw, 300px);
                    letter-spacing: 0.15vw;
                    line-height: 0.5;
                    @include sm {
                        font-size: 10vw;
                    }
                }
                span.scientist {
                    font-size: clamp(40px, 4.8vw, 300px);
                    line-height: 0.8;
                    letter-spacing: 0.1vw;

                    @include sm {
                        font-size: 10vw;
                    }
                }
                .large-text {
                    font-size: clamp(85px, 9.5vw, 300px);
                    line-height: 0.9em;

                    @include sm {
                        font-size: 20vw;
                    }
                }
            }

            .mint-area {
                text-align: center;
                margin: auto;
                row-gap: 2.2vw;
                display: flex;
                width: 85%;
                margin: auto;

                .mint-text {
                    font-size: clamp(90px, 9vw, 160px);
                    font-weight: 500;
                    line-height: clamp(40px, 8vw, 85px);

                    @include sm {
                        font-size: 23vw;
                    }
                }
                button.green-button {
                    font-size: 5vw;
                    background: $green;
                    padding: 1.5vw 20px;
                    min-height: 8vw;
                    font-size: 3vw;
                    border-radius: 2vw;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @include sm {
                        font-size: 9vw;
                    }

                    &.second {
                        box-shadow: 0px 3px 15px 2px transparentize($green, 0.4);
                        justify-content: flex-start;
                        img {
                            width: 6vw;
                            margin: 0 1.4vw;
                            @include sm {
                                width: 17vw;
                            }
                        }
                        .small-text {
                            font-size: 1.5vw;
                            @include sm {
                                font-size: 3vw;
                            }
                        }
                        .text {
                            font-size: 3vw;
                            line-height: 1;
                            @include sm {
                                font-size: 6.2vw;
                            }
                        }
                        &:hover {
                            box-shadow: 0px 3px 15px 4px transparentize($green, 0.3);
                        }
                    }
                }
            }
        }
    }

    @keyframes moving-text {
        from {
            transform: translateX(0%);
            will-change: transform;
        }

        to {
            transform: translateX(var(--minus-move));
            will-change: transform;
        }
    }
</style>
