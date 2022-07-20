<script lang="ts">
    import HEADER_NFT_IMG from "../../assets/header-nft.png";
    import HEADER_SMOKE from "../../assets/header-mash-bg.png";
    import HEADER_CROS_IMG from "../../assets/header-cros.png";
    import CRAZY_TEXT from "../../assets/creazy-text.png";
    import CHAIN_TEXT from "../../assets/chain-text.png";
    import HEADER_RIBON from "../../assets/header-ribon.png";
    import McAnimation from "./McAnimation.svelte";
</script>

<header id="top">
    <div class="header-wrapper">
        <!-- <img class="header-smoke" src="{HEADER_SMOKE}" alt="background" /> -->
        <McAnimation />
        <!-- <ShaderVideo/> -->
        <div class="nft">
            <img src="{HEADER_NFT_IMG}" alt="" />
        </div>
        <div class="cros">
            <img src="{HEADER_CROS_IMG}" alt="" />
        </div>
        <div class="creazy-text header-text">
            <img src="{CRAZY_TEXT}" alt="" />
        </div>
        <div class="chain-text header-text ">
            <img src="{CHAIN_TEXT}" alt="" />
        </div>
        <div class="header-ribon">
            <img src="{HEADER_RIBON}" alt="" />
        </div>
    </div>
</header>

<style lang="scss">
    header {
        width: 100%;
        @include media-breakpoint-down(lg) {
            padding-top: 2rem;
        }
        @include media-breakpoint-down(md) {
            padding-top: 3rem;
        }
    }

    .header-wrapper {
        width: 100%;
        position: relative;
        z-index: 2;
        .nft,
        .cros,
        .creazy-text,
        .chain-text {
            pointer-events: none;
        }

        .header-smoke {
            width: 100%;
            // position: absolute;
            // z-index: -1;
        }
        .nft > img,
        .cros > img {
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -55%);
            width: 35vw;
        }
        .nft > img {
            transform: translate(-54%, -60%);
        }

        .cros > img {
            width: 50vw;
            z-index: 1;
        }

        .header-text {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 25vw;
            & > img {
                width: 100%;
            }
        }

        .chain-text {
            right: 11%;
        }
        .creazy-text {
            left: 9%;
        }
        .header-ribon {
            width: 100%;
            position: absolute;
            z-index: 3;
            bottom: -6%;
            & > img {
                width: 100%;
            }
        }
    }
</style>
