<script lang="ts">
    import VIDEO_PL from "../../assets/video-thumbnail.png";
    import PLAY_BUTTON from "../../assets/play-button.png";
</script>

<section id="about">
    <div class="video-wrapper">
        <div class="video">
            <img src="{VIDEO_PL}" alt="" srcset="" />
        </div>
        <div class="play-button">
            <img src="{PLAY_BUTTON}" alt="" />
        </div>
    </div>

    <div class="details-wrapper text-white">
        <div class="wrapper text-center">
            <div class="py-5">
                <h1 class="title">
                    <span class="text-green">The Crazy </span><span class="text-green">Scientist </span><br /> <span class="small">back Story</span>
                </h1>
                <div class="p-2 p-lg-5 px-xxl-0 col-xxl-10 mx-auto">
                    <p class="poppins fs-xl-4 mb-4 fw-light">
                        Far out in the uncharted areas of the universe lies The Blockchain solar system which consists of 8 known planets and all orbiting the center, Bitcoin a golden magnificent star
                        that provides sanctity to its neighboring planets.
                    </p>
                    <p class="poppins fs-xl-4 fw-light">
                        The 3rd planet from the center is Cronos, a deep sapphire blue colored planet and populated by varying humanoid species, collectively known as #CROFam. Cronos is a relatively
                        young planet and the birthplace of a life form, Crazy Scientists. Not much is known about the background of the Crazy Scientists other than they have been around since
                        inception and surfaced relatively late from the underground Laboratories.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    #about {
        padding-bottom: 4rem;
        .video-wrapper {
            position: relative;
            z-index: 1;
            .video {
                & > img {
                    width: 100%;
                }
            }
            .play-button {
                width: 10vw;
                min-width: 80px;
                max-width: 234px;
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                & > img {
                    width: 100%;
                    height: 100%;
                    transition: 0.2s ease-in;
                    animation: zoom-in-out 0.4s ease-in alternate infinite;
                    &:hover {
                        filter: drop-shadow(2px 2px 15px lighten($green, 10));
                        // cursor: pointer;
                        // transform: scale(0.8);
                        animation: none;
                        cursor: pointer;
                    }
                }
            }
        }

        .details-wrapper {
            .title {
                font-size: clamp(40px, 5vw, 94px);
                line-height: 1;
                letter-spacing: 0.05em;

                .small {
                    font-size: clamp(30px, 4vw, 64px);
                }

                @include media-breakpoint-down(md) {
                    line-height: 44px;
                    margin-bottom: 4rem;
                    text-align: center;
                }
            }
            .fs-xl-4{
                font-size: clamp(18px , 2vw, 26px)
            }

            .right-side {
                padding: 2rem;
                @include media-breakpoint-down(md) {
                    text-align: center;
                }
            }
        }
    }
</style>
