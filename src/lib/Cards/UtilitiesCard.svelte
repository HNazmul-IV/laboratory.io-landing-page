<script lang="ts">
    import CARD_LEFT_IMAGE from "../../assets/utilities-card-image.webp";
</script>

<div class="utilities-card ">
    <div class="card-wrapper d-flex align-items-center">
        <div class="image flex-shrink-0 me-5">
            <img class="" src={CARD_LEFT_IMAGE} alt="" />
        </div>
        <div class="details">
            <h2 class="text-white">Utilies</h2>
            <p class="text-green">NFT collection packed with utilities NFT collection packed with utilities</p>
        </div>
    </div>
</div>

<style lang="scss">
    .utilities-card {
        width: 100%;
        max-width: 800px;
        padding:10px 10px;
        .image {
            max-width: 185px;
            width: 28%;
            img {
                width: 100%;
            }
        }
    }
    .details {
        & > h2 {
            font-size: #{clamp(30px, 4vw, 48px)};
            font-weight: 900;
            @include media-breakpoint-up(xxl) {
            }
        }
        & > p {
            line-height: #{clamp(14px,2vw,50px)};
            font-size: #{clamp(12px, 1.4vw, 24px)};
            font-weight: normal;

        }
    }
</style>
