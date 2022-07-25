<script lang="ts">
    import UNDER_CONTENT_BG from "../../assets/roadmap-under-background.png";
    import DISCORD_ICON from "../../assets/discord-icon.png";
</script>

<div class="lets-be-crazy">
    <div class="background">
        <img src="{UNDER_CONTENT_BG}" alt="" />
    </div>
    <div class="button-content">
        <div class="wrapper">
            
        </div>
    </div>
    <div class="matcher-overlay"></div>
</div>

<style lang="scss">
    .lets-be-crazy {
        position: relative;
        z-index: 1;
        & > .background {
            & > img {
                width: 100%;
            }
        }

        & > .button-content {
            position: absolute;
            top: 2vw;
            left: 0%;
            color: $white;
            padding: 2rem #{clamp(4rem, 6vw, 7rem)};
            width: 100%;
            @include media-breakpoint-down(sm) {
                padding: 10px;
                text-align: center;
            }
            & > .wrapper {
                width: clamp(340px, 45vw, 820px);
                & > h1 {
                    font-size: clamp(1rem, 7vw, 80px);
                }
                @include media-breakpoint-down(sm) {
                    margin: auto;
                }
                & > a.btn {
                    background: $green;
                    padding: 0.4em 2em;
                    font-weight: 500;
                    font-size: 32px;
                    border-radius: 20px;
                    margin-top: 2rem;
                    @include media-breakpoint-down(md) {
                        padding: 0.3rem 1em;
                        font-size: 20px;
                        border-radius: 10px;
                        margin-top: 1rem;
                        & > img {
                            width: 40px;
                        }
                    }
                }
            }
        }

        .matcher-overlay {
            position: absolute;
            width: 100%;
            height: 30%;
            background: linear-gradient(to top, black, rgba(0, 0, 0, 0.247));
            bottom: 0px;
        }
    }
</style>
