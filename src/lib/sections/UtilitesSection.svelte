<script lang="ts">
  import CHARACTER_NFT from "../../assets/utilities-character.png";
  import UtilitiesCard from "../Cards/UtilitiesCard.svelte";
  import RIBON_IMG from "../../assets/utility-section-ribon.png";
  import ICON_LAB_BOTTOL from "../../assets/icon/util-lab-bottle.png";
  import ICON_COMMUNITY from "../../assets/icon/util-community.png";
  import ICON_ROCKET from "../../assets/icon/util-rocket.png";
  import ICON_LABSTORE from "../../assets/icon/lab-store.png";
  import ICON_LABDEX from "../../assets/icon/lab-dex.png";
  import ICON_CERN from "../../assets/icon/util-CERN.png";
  import ICON_GROWTH_CHAMBER from "../../assets/icon/util-Growth-Chamber.png";

  const utilities_data = [
    {
      title: "Lab DEX",
      desc: "Trade your favourite cryptocurrencies with the lowest transaction fees than any other DEX",
      icon: ICON_LABDEX,
    },
    {
      title: "Lab Growth Chambers",
      desc: "DeFi, Stake, grow, experiment with our NFTs and LAB token",
      icon: ICON_GROWTH_CHAMBER,
    },
    {
      title: "CERN",
      desc: "The Head of Laboratory has experiments for our community and unique token and NFT rewards.",
      icon: ICON_CERN,
    },
    {
      title: "Community",
      desc: "Since Nov 2021, Laboratory community have worked together to buy the best performing Cronos assets",
      icon: ICON_COMMUNITY,
    },
    {
      title: "Smart Contract Services",
      desc: "Want to up your NFT project utility with customized/ adventure like DeFi? We provide unique smart contracts and team building services.",
      icon: ICON_LAB_BOTTOL,
    },
    {
      title: "Lab Store",
      desc: "Coming Soon",
      icon: ICON_LABSTORE,
    },
    {
      title: "Lab Pad",
      desc: "Launch your NFT or token and be empowered by the Laboratory community",
      icon: ICON_ROCKET,
    },
  ];
</script>

<section id="utilites">
  <div class="title text-center">
    <h1>Utilities</h1>
  </div>

  <div class="utilities-wrapper">
    <div class="row">
      <div class="col-md-7 col-xxl-6 offset-xxl-1 utilities-card-wrapper">
        {#each utilities_data as data}
          <UtilitiesCard {data} />
        {/each}
      </div>
      <div class="col-md-5 d-none d-md-block">
        <div class="character-nft">
          <img src={CHARACTER_NFT} alt="" />
        </div>
      </div>
    </div>
    <div class="section-ribon">
      <img src={RIBON_IMG} alt="" />
    </div>
  </div>
</section>

<style lang="scss">
  section {
    background: url("../../assets/black-green-texture.png") no-repeat center /
      cover;
    overflow-x: hidden;
  }
  section > .title h1 {
    font-size: clamp(45px, 8vw, 154px);
    padding: clamp(10px, 4vw, 30px);
    color: white;
    font-weight: 500;
  }
  .utilities-card-wrapper {
    @include media-breakpoint-up(xxl) {
      transform: translateX(4vw);
    }
  }
  .character-nft {
    width: 40vw;
    max-width: 795px;
    margin-left: auto;
    position: relative;
    z-index: 1;
    right: -2%;
    margin-top: -14%;

    img {
      width: 100%;
    }
  }

  .section-ribon {
    img {
      width: 100%;
    }
  }
</style>
