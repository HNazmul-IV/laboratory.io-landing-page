<script lang="ts">
  import VIDEO_PL from "../../assets/video-thumbnail.png";
  import PLAY_BUTTON from "../../assets/play-button.png";
  import ABOUT_LAB from "../../assets/about-lab.png";
  import BRANDING_VIDEO_POSTER from "../../assets/branding-video-poster.png";
  import { onMount } from "svelte";

  let brandingVideo: HTMLVideoElement;
  let playButton: HTMLDivElement;
  let isPlaying = false;
  let videoOverlay: HTMLDivElement;

  const playPauseVideo = () => {
    playButton.addEventListener("click", playing);

    brandingVideo.addEventListener("ended", () => (isPlaying = false));

    function playing() {
      if (!isPlaying || brandingVideo.ended) {
        isPlaying = true;
        brandingVideo.play();
        console.log("video playing");
        videoOverlay.addEventListener("click", () => {
          brandingVideo.pause();
          isPlaying = false;
        });
      } else {
        isPlaying = false;
        brandingVideo.pause();
      }
    }
  };

  onMount(() => playPauseVideo());
</script>

<section id="about">
  <div class="about-lab">
    <img src={ABOUT_LAB} alt="" />
    <div class="overlay" />
  </div>

  <div class="details-wrapper text-white">
    <div class="wrapper text-center">
      <div class="">
        <h1 class="title">
          <span class="text-green">The Crazy </span><span class="text-green"
            >Scientist
          </span><br /> <span class="small">back Story</span>
        </h1>
        <div class="p-2 p-lg-5 px-xxl-0 col-xxl-10 mx-auto">
          <p class="poppins fs-xl-4 mb-4 fw-light">
            Far out in the uncharted areas of the universe lies The Blockchain
            solar system which consists of 8 known planets and all orbiting the
            center, Bitcoin a golden magnificent star that provides sanctity to
            its neighboring planets.
          </p>
          <p class="poppins fs-xl-4 fw-light">
            The 3rd planet from the center is Cronos, a deep sapphire blue
            colored planet and populated by varying humanoid species,
            collectively known as #CROFam. Cronos is a relatively young planet
            and the birthplace of a life form, Crazy Scientists. Not much is
            known about the background of the Crazy Scientists other than they
            have been around since inception and surfaced relatively late from
            the underground Laboratories.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="video-area">
    <div class="video-over-text py-1 py-lg-4 position-absolute w-100 top-0">
      <!-- <h1 class="text-green text-center display-3">Crezy Scientist</h1> -->
    </div>
    <div class="video">
      <div
        bind:this={playButton}
        class="play-button {isPlaying ? 'd-none' : ' '}"
      >
        <img src={PLAY_BUTTON} alt="play-button" />
      </div>
      <div bind:this={videoOverlay} class="video-overlay" />
      <video
        bind:this={brandingVideo}
        class="branding-video"
        poster={BRANDING_VIDEO_POSTER}
      >
        <source src="./lab-branding-video.mp4" type="" />
        <track kind="captions" />
      </video>
    </div>
  </div>
</section>

<style lang="scss">
  #about {
    margin-bottom: -2.4vw;

    .details-wrapper {
      margin-top: -10vw;
      position: relative;
      z-index: 2;
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
      .fs-xl-4 {
        font-size: clamp(16px, 2vw, 26px);
      }
    }
  }
  .about-lab {
    width: 100vw;
    position: relative;
    z-index: 1;
    & > img {
      width: 100%;
    }

    .overlay {
      width: 100%;
      height: 40%;
      bottom: 0px;
      position: absolute;
      background: linear-gradient(
        to top,
        #000000 20.25%,
        rgba(0, 0, 0, 0) 92.2%
      );
    }
  }

  .video-area {
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding-top: clamp(40px, 3.5vw, 200px);

    .video-over-text {
      background: linear-gradient(
        180deg,
        #000000 0%,
        #000000 39.67%,
        rgba(11, 11, 11, 0) 100%
      );
      height: 10vw;
      z-index: 1;
      @include media-breakpoint-down(sm) {
        h1 {
          font-size: 30px;
        }
      }
    }
    .video-overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 2;
    }

    .video {
      width: 100%;
      position: relative;

      .branding-video {
        width: 100%;
        aspect-ratio: 16 / 9;
        max-width: 2560px;
        max-height: 1440px;
        display: block;
        margin: auto;
      }
    }
    .play-button {
      width: clamp(70px, 10vw, 200px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      transition: 0.3s;
      border-radius: 30%;
      cursor: pointer;
      &:hover {
        background: $green;
        padding: clamp(5px, 2vw, 30px);
        border-radius: 50%;
      }
      & > img {
        width: 100%;
      }
    }
  }
</style>
