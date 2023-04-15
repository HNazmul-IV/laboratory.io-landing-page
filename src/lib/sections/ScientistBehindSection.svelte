<script lang="ts">
  import ScientistCard from "../Cards/scientistCard.svelte";
  import FRED_NFT from "../../assets/nft-fred.png";
  import DANIEL_NFT from "../../assets/nft-daniel.png";
  import WILLIAM_NFT from "../../assets/nft-william.png";
  import NAZ_NFT from "../../assets/nft-naz.png";
  import ODIN_NFT from "../../assets/nft-odin.png";

  const staticDataAboutScientist = [
    {
      name: "Fred ",
      subtittle: "The Visionary",
      desc: "Fred has years of experience in management, marketing, entrepreneurial and freelance work. He has been in crypto for many years and is bringing his experienced big brain to solve centralized issues with the use of blockchain technology",
      avatar: FRED_NFT,
      title: "Head of <br/> Laboratory",
    },
    {
      name: "Daniel",
      subtittle: "The Deranged",
      desc: "Daniel has served 8 years in the Australian Defence Force transferred his regimental skills to a life of experimentation with The Laboratory. With years of experience within crypto and studied at RMIT, he brings structure and expertise to running his team of Crazy Scientists.",
      avatar: DANIEL_NFT,
      title: "Chief <br> Operations <br/> Officer",
    },
    {
      name: "William",
      subtittle: "The Insane",
      desc: "William is a full-stack developer with 33 years of general programming experience and over 20 years of full-stack developer experience, which includes experience in e-commerce. He has been developing on top of blockchain technology for the past five years and his potential is insane.",
      avatar: WILLIAM_NFT,
      title: "Full <br/> Stack <br/> Developer",
    },
    {
      name: "NAZ",
      subtittle: "The Nutty ",
      desc: "Naz has the energy of a space frog charged with God Particles. Naz is the Frontend Developer and is particularly keen on the blockchain industry and bringing his skills to this booming industry.",
      avatar: NAZ_NFT,
      title: "<span='me-5'>Front <br/> End <br/> Developer</span=>",
    },
    {
      name: "UMAIR",
      subtittle: "The Phsycotic",
      desc: "The most creative of the Crazy Scientists. Umair is most known for locking himself in his laboratory for 9 years to hone his skills in UX Design. He frequently conducts interplanetary experiments, combining his academic skills in communications design to close the gap between Cronos and other planets in the blockchain solar system.",
      avatar: ODIN_NFT,
      title: "UI/UX <br/> Design & <br/> Marketing",
    },
  ];
</script>

<section>
  <div class="title text-center py-4">
    <h1 class="display-1 text-white">Scientists behind</h1>
  </div>
  <div class="scientist-card-wrapper">
    <div class="card-row">
      {#each [...new Array(4)] as n, i} <div class="stick n{i + 1}" /> {/each}
      {#each staticDataAboutScientist as data} <ScientistCard {data} /> {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @use "sass:math";
  section {
    background: url("../../assets/black-green-texture.png") no-repeat center / cover;
    position: relative;
    z-index: 1;
  }
  .scientist-card-wrapper {
    padding: 4vw 0;
    .card-row {
      max-width: 1500px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: clamp(5px, 3.5vw, 40px);
      @include max(1310px) {
        gap: 2vw;
      }
      @include media-breakpoint-down(sm) {
        gap: 12vw 10vw;
      }
    }
  }

  .stick {
    width: 45vw;
    height: clamp(10px, 2vw, 20px);
    position: absolute;
    background: $green;
    left: 0px;
    $bp-1: 1000px;
    $bp-2: 653px;
    &.n1 {
      top: 28%;
      @include max($bp-1) {
        top: 20%;
      }
      @include max($bp-2) {
        top: 30%;
      }
    }
    &.n2 {
      top: 20%;
      left: auto;
      right: 0px;
      @include max($bp-1) {
        top: 12%;
      }
    }
    &.n3 {
      top: 60%;
      left: auto;
      right: 0px;
      @include max($bp-1) {
        top: 45%;
      }
    }
    &.n4 {
      top: 70%;
      @include max($bp-1) {
        top: 72%;
      }
      @include max($bp-2) {
        top: 68%;
      }
    }
  }
</style>
