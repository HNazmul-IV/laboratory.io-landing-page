<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    import NftCard from "./../Cards/NftCard.svelte";
    export let imageTranslate: number = 0;
    export let direction: string;

    let images: string[] = ["98.webp"];
    let makingElementInterval: number;

    let card = (image: string): string => ` <div class="card-wrapper ${direction}"><img src=${image} class="_card-image" alt="" /></div>`;
    let container: HTMLDivElement;
    let duration = 18000;

    const elementInAndOut = () => {
        makingElementInterval = window.setInterval(() => {
            const div = document.createElement("div");
            div.className = `nft-card ${direction}`;
            div.innerHTML = card("98.webp");
            console.log(container);
            container.appendChild(div);
            setTimeout(() => {
                div.remove();
            }, duration);
        }, duration / 7.9);

        setTimeout(() => {
            document.querySelectorAll(".nft-card.default").forEach((elem) => elem.remove());
        }, duration * 0.9);
    };
    elementInAndOut()

    onMount(() => {
    });
</script>

<div nft-slider class="slider ">
    <div class="slider-wrapper">
        <div>
            <div class="card-holder" bind:this={container} style="transform: rotate(-3.4deg) translateX(-{imageTranslate || '50'}px); --animation-timing:{duration}ms">
                <!--Slide Element Will be Apend Here -->
                <div class="nft-card {direction} default one">
                    <div class="card-wrapper "><img src="98.webp" class="_card-image" alt="" /></div>
                </div>
                <div class="nft-card {direction} default two">
                    <div class="card-wrapper "><img src="98.webp" class="_card-image" alt="" /></div>
                </div>
                <div class="nft-card {direction} default three">
                    <div class="card-wrapper "><img src="98.webp" class="_card-image" alt="" /></div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .slider {
        width: 100%;
        --card-width-width-gap: 24.2vw;
        --card-amount: 6;
        --gap: 20px;
        --animation-timing: 20s;
        height: 31.6vw;
        overflow: hidden;
        padding: 3vw 0px;
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
