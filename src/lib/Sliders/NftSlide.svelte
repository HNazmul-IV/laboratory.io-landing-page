<script lang="ts">
    import { onMount } from "svelte";
    import NftCard from "../Cards/NftCard.svelte";

    export let directions: "ltr" | "rtl" = "rtl";

    let nftSliderArea: HTMLDivElement;

    const addRandomImg = () => {
        let limit = 300;
        let base_url = "cs-images";
        return `${base_url}/nft-${Math.ceil(Math.random() * limit - 1)}.png`;
    };

    const addImgToAllElement = (elm: HTMLDivElement) => {
        const allImg = elm.querySelectorAll("img._card-image");
        allImg.forEach((img: HTMLImageElement) => {
            img.src = "";
            img.src = addRandomImg();
        });
    };

    const movingElement = () => {
        const allbox = nftSliderArea.querySelectorAll(".nft-card_slide_container");
        allbox.forEach((elem: HTMLDivElement) => {
            let translate = 0;
            let speed = 0.1;

            //animate function for both LTR and RTL
            const animate = () => {
                const { right: elemenRightPosition, left: elementLeftPosition }: DOMRect = elem.getBoundingClientRect();
                const { right: parentRightPosition, left: parentLeftPosition }: DOMRect = nftSliderArea.getBoundingClientRect();
                if (directions === "ltr") {
                    translate = translate + speed;
                    elem.style.transform = `translateX(${translate}vw)`;
                    if (elemenRightPosition > parentRightPosition + elem.clientWidth + (2 * window.innerWidth) / 100) {
                        translate = 0;
                        elem.style.right = "100vw";
                        addImgToAllElement(elem);
                    }
                } else if (directions === "rtl") {
                    translate = translate - speed;
                    elem.style.transform = `translateX(${translate}vw)`;
                    if (elementLeftPosition < parentLeftPosition - elem.clientWidth - (2 * window.innerWidth) / 100) {
                        translate = 0;
                        elem.style.left = "100vw";
                        addImgToAllElement(elem);
                    }
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
            <NftCard image="/cs-images/nft-3.png" />
            <NftCard image="/cs-images/nft-9.png" />
            <NftCard image="/cs-images/nft-15.png" />
            <NftCard image="/cs-images/nft-20.png" />
        </div>
        <div class="nft-card_slide_container" style="--right:0vw">
            <NftCard image="cs-images/nft-14.png" />
            <NftCard image="cs-images/nft-55.png" />
            <NftCard image="cs-images/nft-40.png" />
            <NftCard image="cs-images/nft-56.png" />
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
