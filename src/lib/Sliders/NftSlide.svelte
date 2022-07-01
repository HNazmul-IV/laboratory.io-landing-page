<script lang="ts">
    import NftsScroller from "../Animate/Nfts_Scroller.svelte";
    import { diretionsEnum } from "../Animate/Nfts_Scroller.svelte";

    import NftCard from "./../Cards/NftCard.svelte";
    export let imageTranslate: number = 0;
    export let images: string[] = [];
    export let direction: diretionsEnum = diretionsEnum.ltr;
</script>

<div class="slider">
    <div class="slider-wrapper">
        <NftsScroller {direction}>
            <div class="card-holder" style="transform: rotate(-3.4deg) translateX(-{imageTranslate || '50'}px);">
                {#each images as image}
                    <NftCard {image} />
                {/each}
            </div>
        </NftsScroller>
    </div>
</div>

<style lang="scss">
    .slider {
        width: 100%;
        --card-width-width-gap: 24.2vw;
        --card-amount: 10;
        --gap: 20px;
        height: 31.6vw;
        overflow: hidden;
        @include media-breakpoint-down(md) {
            --gap: 10px;
            height: 33.6vw;
        }

        .slider-wrapper {
            padding: 10px;
            position: relative;
            z-index: 1;
            width: calc(var(--card-width-width-gap) * var(--card-amount));

            .card-holder {
                display: flex;
                gap: var(--gap);
            }
        }
    }
</style>
