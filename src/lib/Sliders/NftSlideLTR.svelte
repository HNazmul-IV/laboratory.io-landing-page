<script lang="ts">
    import { onMount } from "svelte";
    import NftCard from "../Cards/NftCard.svelte";

    const card = (right: number) => ` <div class="nft-card" style="--right:${right}%"><div class="card-wrapper"><img src="" alt="" /></div></div>`;

    let nftSliderArea: HTMLDivElement;

    const movingElement = () => {
        const allbox = nftSliderArea.querySelectorAll(".nft-card_slide_container");
        allbox.forEach((elem: HTMLDivElement) => {
            let translate = 0;
            const animate = () => {
                const { right: parentRightPosition }: DOMRect = nftSliderArea.getBoundingClientRect();
                const { right: elemenRightPosition }: DOMRect = elem.getBoundingClientRect();

                translate = translate + 0.3;
                elem.style.transform = `translateX(${translate}vw)`;
                if (elemenRightPosition > parentRightPosition + elem.clientWidth + (2 * window.innerWidth) / 100) {
                    translate = 0;
                    elem.style.right = "100vw";
                }
                requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        });
    };

    onMount(movingElement);
</script>

<div class="nft-slider " bind:this={nftSliderArea}>
    <div class="nft-slider__wrapper">
        <div class="nft-card_slide_container" style="--right:100vw">
            <NftCard image="98.webp" />
            <NftCard image="98.webp" />
            <NftCard image="98.webp" />
            <NftCard image="98.webp" />
        </div>
        <div class="nft-card_slide_container" style="--right:0vw">
            <NftCard image="98.webp" />
            <NftCard image="98.webp" />
            <NftCard image="98.webp" />
            <NftCard image="98.webp" />
        </div>
    </div>
</div>

<style lang="scss">
    .nft-slider {
        width: 100vw;
        height: 23vw;
        margin: auto;
        transform: rotate(-4deg);

        & > .nft-slider__wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
        }
    }

    .nft-card_slide_container {
        width: 98vw;
        height: 100%;
        position: absolute;
        right: var(--right);
        left: auto;
        display: flex;
        gap: 2vw;

        --card-width-width-gap: 23vw;
    }
</style>
