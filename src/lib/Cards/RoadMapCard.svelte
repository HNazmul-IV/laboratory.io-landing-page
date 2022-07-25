<script lang="ts">
    import { onMount } from "svelte";
    import VanillaTilt from "vanilla-tilt";

    export let conf = { outline: false, shadow: false, title: "", desc: "" };
    let card: HTMLElement;

    onMount(() => {
        VanillaTilt.init(card, {
            max: 12,
            speed: 300,
        });
    });
</script>

<article data-tilt bind:this={card} class="roadmap-card {conf.shadow ? 'shadow' : conf.outline ? 'outline' : 'pure'}">
    <div class="card-header">
        <h3>{conf.title || "Phase 1"}</h3>
    </div>
    <div class="card-body py-xxl-5 p-0 col-xl-10 mx-auto">
        <p>{@html conf.desc || "NFT collection packed with utilities NFT collection packed with utilities NFT collection packed with utilities NFT collection packed "}</p>
    </div>
</article>

<style lang="scss">
    article.roadmap-card {
        width: 100%;

        text-align: center;
        color: black;
        border-radius: 20px;
        border: 3px solid $green;
        min-height: clamp(450px, 35vw, 678px);
        height: 100%;
        // @include media-breakpoint-up(xxl) {
        //     max-height: 678px;
        //     border-width: 7px;
        // }

        &.pure,
        &.shadow {
            background: $green;
        }

        &.shadow {
            box-shadow: 0px 0px 20px 5px transparentize($green, 0.4) !important;
            @include media-breakpoint-up(xxl) {
                box-shadow: 0px 0px 30px 5px transparentize($green, 0.1) !important;
            }
        }
        &.outline {
            color: $green;
        }
        .card-header {
            padding: #{clamp(2rem, 2vw, 3rem)} 10px;
            border: 0px;
            background: transparent;
            h3 {
                font-size: clamp(2rem, 3vw, 4rem);
            }
        }

        .card-body {
            padding: 2rem 0px;
            p {
                font-size: clamp(1.1rem, 1.2vw, 2.2rem);
                font-weight: 500;
            }
        }
    }
</style>
