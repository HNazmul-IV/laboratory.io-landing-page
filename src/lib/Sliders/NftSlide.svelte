<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { detach } from "svelte/internal";

    import NftCard from "./../Cards/NftCard.svelte";
    export let imageTranslate: number = 0;
    export let direction: string;

    let images: string[] = ["98.webp"];
    let makingElementInterval: number;
    let newDiveRemoverTimeout: number;
    let defaultElementRemoveTimeout: number;

    let card = (image: string): string => ` <div class="card-wrapper ${direction}"><img src=${image} class="_card-image" alt="" /></div>`;
    let container: HTMLDivElement;
    let duration = 20000;

    const removeAfterAnimation = (elm: HTMLElement) =>
        elm.addEventListener("animationend", function () {
            if (elm !== null) {
                elm?.remove?.();
            }
        });

    const toggleAnimationState = () => {
        document.addEventListener("visibilitychange", function () {
            const all = document.querySelectorAll<HTMLDivElement>(".nft-card");
            console.log({ state: document.visibilityState });
            all.forEach((elem) => {
                if (document.visibilityState === "hidden") {
                    elem.style.animationPlayState = "paused";
                } else {
                    elem.style.animationPlayState = null;
                }
            });
        });
    };

    const creatingCard = (timstamp: number) => {
        const div = document.createElement("div");
        div.className = "nft-card " + direction;
        div.innerHTML = card("98.webp");
        console.log(timstamp);
        removeAfterAnimation(div);
        if (container !== null) {
            container.appendChild(div);
        }
        setTimeout(() => {
            requestAnimationFrame(creatingCard);
        }, duration / 7.9);
    };

    const elementRemove = function () {
        const all = document.querySelectorAll<HTMLDivElement>(".nft-card");
        all.forEach((elm) => removeAfterAnimation(elm));
    };

    onMount(() => {
        requestAnimationFrame(creatingCard);
        elementRemove();
        toggleAnimationState();
    });
</script>

<div nft-slider class="slider ">
    <div class="slider-wrapper">
        <div>
            <div class="card-holder" bind:this={container} style="transform: rotate(-3.4deg) translateX(-{imageTranslate || '50'}px); --animation-timing:{duration}ms">
                <!--Slide Element Will be Apend Here -->
                {#each [...new Array(5)] as deta, idx}
                    <div class="nft-card {direction} default c{idx + 1}">
                        {@html card("98.webp")}
                    </div>
                {/each}
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
