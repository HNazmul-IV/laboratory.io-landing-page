<script lang="ts">
    import HEADER_RIBON from "../../assets/nft-section-ribon.png";
    import NFT_SLIDE_1 from "../../assets/nft-slide-one.png";
    import NFT_SLIDE_2 from "../../assets/nft-slide-2.png";
    import PROD_LOGO from "../../assets/logo-dark-prod.svg"
</script>

<section id="nfts">
    <div class="nft-showcase-wrapper">
        <div class="ribon">
            <img src={HEADER_RIBON} alt="" />
        </div>
        <div class="slide-one">
            <img src={NFT_SLIDE_1} alt="" />
        </div>
        <div class="slide-two">
            <img src={NFT_SLIDE_2} alt="" />
        </div>
        <div class="nft-slide-text">
            <h1 class={"text-green prime"}>Play to earn with NFT collection on cronos.</h1>
            <h3 class="text-light second">NFT collection packed with utilities. NFT collection packed with utilities.</h3>
        </div>
    </div>

    <div class=" mint-area-wrapper p-0 py-5">
            <div class="container py-lg-5">
                <div class="row align-items-center justify-content-center">
                <div class="col-lg-7">
                    <div class="crazy-card text-center">
                        <h1 ><span class="text-green">Creazy</span> <br> <span class="large-text text-white">5555</span> <br> <span class="text-green">Scientists</span></h1>
                    </div>
                </div>
                <div class="col-lg-5 col-md-10 py-5 py-lg-0">
                    <div class="mint-area d-flex flex-column ">
                        <h1 class="text-light mint-text">Mint: </h1>
                        <button class="green-button">
                            Sold Out
                        </button>
                        <button class="green-button second d-flex">
                            <img src="{PROD_LOGO}" alt="">
                            <div class="text text-start">
                                <p class="mb-0">Buy it on</p>
                                <p class="mb-0 fs-2">Ebisu's Bay</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            </div>
    </div>

</section>

<style lang="scss">
    section#nfts {
        background: url("../../assets/black-green-texture.png") no-repeat center / cover;
        overflow-x: hidden;
        .nft-showcase-wrapper {
            .ribon,
            .slide-one,
            .slide-two {
                & > img {
                    width: 100%;
                }
            }
            .slide-one {
                & > img {
                    margin-top: -6vw;
                }
            }
            .slide-two {
                & > img {
                    margin-top: -6vw;
                }
            }

            .nft-slide-text {
                transform: rotate(-4deg) ;
                margin-top: -3vw;
                &*{
                    white-space: nowrap;
                }
                font-size: 16px;
                .prime {
                    font-size: 4em ;
                }
                .second {
                    font-weight: normal;
                }
            }
        }

    

        .crazy-card{
            width:fit-content;
            padding:3em;
            font-size:16px;
            margin:auto;
            position:relative;
            z-index: 1;
            user-select: none;
            &::after{
                content: "";
                position:absolute;
                z-index: -1;
                width:100%;
                height:100%;
                top:0px;
                left:0px;
                filter:drop-shadow(2px 2px 10px $green );
                border:8px solid $green;
                border-radius: 25px;
            }
            h1 > span{
                font-size: 1.4em;
            }
            .large-text{
                font-size:2.5em;
            }
            @include media-breakpoint-down(sm){
                padding:1.5em 1em;
            }
        }

        .mint-area{
            text-align:center;
            margin:auto;
            row-gap: 10px;
            
            .mint-text{
                font-size:clamp(50px, 10vw,100px)
                ;font-weight: 500;
                line-height:clamp(40px,5vw,70px ) ;
            }
            button.green-button{
                font-size: clamp(25px, 5vw,40px);
                background:$green;
                padding:10px 20px;
                border-radius:20px;
                border:none;

                &.second{
                    box-shadow: 0px 3px 15px 2px transparentize($green, 0.4);
                    margin-top: 10px;;
                    img{
                        width: 60px;
                        margin-right: 10px;
                    }
                    .text{
                        font-size: 16px;
                       
                    }
                    &:hover{
                        box-shadow: 0px 3px 15px 4px transparentize($green, 0.3);
                    }
                }
            }
            
        }

    }
</style>
