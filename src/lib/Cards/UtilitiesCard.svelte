<script lang="ts">
    import CARD_LEFT_IMAGE from "../../assets/utilities-card-image.png";
    export let data: { title: string; desc: string; icon?: string } = { title: "", desc: "", icon: "" };
</script>

<div class="utilities-card ">
    <div class="card-wrapper d-flex align-items-center">
        <div class="image flex-shrink-0">
            <img class="" src="{data.icon || CARD_LEFT_IMAGE}" alt="" />
        </div>
        <div class="details">
            <h2 class="text-white ">{data.title}</h2>
            <p class="text-green">{@html data.desc}</p>
        </div>
    </div>
</div>

<style lang="scss">
    .utilities-card {
        width: 100%;
        max-width: 800px;
        padding: 30px 10px;

        @include media-breakpoint-up(xxl) {
            max-width: 1050px;
        }
        .image {
            width: clamp(150px, 40%, 150px);
            margin-right: 4vw;
            img {
                max-width: 200px;

                width: 90%;
            }
        }
    }
    .details {
        & > h2 {
            font-size: #{clamp(20px, 4vw, 42px)};
            letter-spacing: 0.06vw;
            @include media-breakpoint-up(xxl) {
            }
        }
        & > p {
            line-height: 1.4;
            font-size: #{clamp(12px, 0.85vw, 16px)};
            font-weight: normal;
            font-family: poppins;
        }
    }
</style>
