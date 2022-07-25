<script lang="ts">
    export let data = { avatar: "", name: "", title: "", desc: "", subtittle: "" };
</script>

<div class="scientist-card d-flex flex-column">
    <div class="card-image">
        <img src="{data?.avatar}" alt="" />
    </div>
    <div class="card-details">
        <div class="title">
            <div class="row m-0 w-100 py-4 pb-2 justify-content-center align-items-center">
                <div class="col-7 text-end name">
                    <h1>{@html data?.name}</h1>
                    <p class="mb-0">{@html data?.subtittle}</p>
                </div>
                <div class="col-5 p-0">
                    <p class="text-green mb-0 poppins subtitle">{@html data?.title}</p>
                </div>
            </div>
        </div>
        <div class="desc p-4 pt-2 ">
            <p class="poppins text-white">
                {@html data?.desc}
            </p>
        </div>
    </div>
</div>

<style lang="scss">
    .scientist-card {
        --radius: 7vw;
        --transition-duration: 0.5s ease-in-out;
        --area-radius: clamp(50px, calc(var(--radius) + 0.5vw), 150px);
        max-width: 450px;
        color: $white;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: var(--transition-duration);
        @include max(1500px) {
            max-width: 400px;
        }
        @include media-breakpoint-down(xxl) {
            max-width: 320px;
        }
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 60%;
            bottom: 0px;
            left: 0px;
            border: 4px solid $green;
            border-radius: 0 0 var(--area-radius) var(--area-radius);
            transition: 0.6s ease-in;
        }
        &:hover {
            transform: translateY(-30px);
            .card-image {
                filter: drop-shadow(0px 0px 5px white);
                & > img {
                    transform: scale(1.2);
                }
            }
            &::after {
                filter: drop-shadow(0px 0px 5px);
                height: 70%;
                transform: translateY(30px);
            }
            .card-details {
                transform: translateY(30px);
            }
        }
        .card-image {
            width: 100%;
            max-height: 450px;
            z-index: 2;
            position: relative;
            border-radius: var(--area-radius);
            overflow: hidden;
            border: 10px solid white;
            & > img {
                width: 100%;
                height: 100%;
                // border-radius: calc(var(--radius) + 0.5vw);
                transition: 0.5s ease-in-out transform;
            }
        }
        .card-details {
            z-index: 1;
            position: relative;
            transition: 0.6s ease-in;
            padding: 5px;
            // @include media-breakpoint-down(xxl){
            //     .name{
            //         h1{
            //             font-size:
            //         }
            //     }
            // }

            .name {
                h1 {
                    font-size: clamp(24px, 4vw, 35px);
                }
                h1,
                p {
                    line-height: 0.7;
                }
                p {
                    font-size: 14px;
                }
            }
            .desc {
                p {
                    text-align: center;
                    @include media-breakpoint-down(xxl) {
                        font-size: 13px;
                    }
                }
            }
            .subtitle {
                line-height: 1;
                font-size: 19px;
                @include max-1500() {
                    font-size: 16px;
                }
            }
        }
    }
</style>
