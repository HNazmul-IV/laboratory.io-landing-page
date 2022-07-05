<script lang="ts">
    import VIDEO_PL from "../../assets/video-thumbnail.png";
    import PLAY_BUTTON from "../../assets/play-button.png";
</script>

<section id="about">
    <div class="video-wrapper">
        <div class="video">
            <img src={VIDEO_PL} alt="" srcset="" />
        </div>
        <div class="play-button">
            <img src={PLAY_BUTTON} alt="" />
        </div>
    </div>

    <div class="details-wrapper text-white">
        <div class="col-xl-10 mx-auto py-5">
            <div class="row m-0 w-100 align-items-center  justify-content-center">
                <div class="col-lg-7 col-md-6">
                    <h1 class="left-title">
                        <span class="text-green">How</span> <br /> <span class="text-green">cronos</span> <br /> <span class="text-green">chain</span> <br /> got <br /> captured?
                    </h1>
                </div>
                <div class="col-lg-5 col-md-6 col-12 right-side">
                    <h4 class="text-green">How to get started?</h4>
                    <p class="poppins fs-5 fw-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, hic. Omnis in maiores, tempore facilis, modi aperiam porro illum, expedita voluptate corrupti repellat
                        voluptates necessitatibus quos quaerat sed odit totam.
                    </p>
                    <p class="poppins fs-5 fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, dignissimos.</p>
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
            .left-title {
                font-size: clamp(40px, 5vw, 94px);
                line-height: 66px;

                @include media-breakpoint-down(md) {
                    line-height: 44px;
                    margin-bottom: 4rem;
                    text-align: center;
                }
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
