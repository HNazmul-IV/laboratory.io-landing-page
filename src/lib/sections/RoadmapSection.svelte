<script lang="ts">
    import RoadMapCard from "../Cards/RoadMapCard.svelte";
    import UNDER_CONTENT_BG from "../../assets/roadmap-under-background.webp";
    import DISCORD_ICON from "../../assets/discord-icon.webp";

    const card_conf = [
        {
            shadow: false,
            outline: false,
        },
        {
            shadow: true,
            outline: false,
        },
        {
            shadow: false,
            outline: true,
        },
    ];
</script>

<section id="roadmap" class="pt-5">
    <div class="title py-5">
        <h1 class=" text-center text-white">Roadmap</h1>
    </div>

    <div class="roadmap-content-wrapper p-5">
        <div class="row row-cols-1 row-cols-md-3 g-5">
            {#each card_conf as conf}
                <div class="col">
                    <RoadMapCard {conf} />
                </div>
            {/each}
        </div>
    </div>

    <div class="roadmap-under-content">
        <div class="background">
            <img src={UNDER_CONTENT_BG} alt="" />
        </div>
        <div class="button-content">
            <div class="wrapper">
                <h1>Lets be crazy togather.</h1>
                <a href="/" class="btn">
                    <img src={DISCORD_ICON} alt="" />
                    Join Discord
                </a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        background: url("../../assets/black-green-texture.webp") no-repeat center / cover;
        overflow-x: hidden;
        & > .title {
            & > h1 {
                font-size: clamp(80px, 5vw, 156px);
            }
        }
        .roadmap-content-wrapper {
            & > .row > .col {
                padding: clamp(10px, 2.5vw, 2.7rem);
            }
        }

        & > .roadmap-under-content {
            position: relative;
            & > .background {
                & > img {
                    width: 100%;
                }
            }

            & > .button-content {
                position: absolute;
                top: 2vw;
                left: 1vw;
                color: $white;
                padding: 2rem 4rem;
                & > .wrapper {
                    width: clamp(500px, 45vw, 820px);
                    & > h1 {
                        font-size: clamp(3rem, 7vw, 80px);
                    }
                    & > a.btn {
                        background: $green;
                        padding: 0.4em 2em;
                        font-weight: 500;
                        font-size: 32px;
                        border-radius: 20px;
                        margin-top: 2rem;
                    }
                }
            }
        }
    }
</style>
