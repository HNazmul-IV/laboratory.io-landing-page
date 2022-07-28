<script lang="ts">
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Navigation, Pagination } from "swiper";
    import ICON_MEDIUM from "../../assets/icon/medium-icon.png";
    import LOGO_THELAB from "../../assets/Logo_White.svg";
    import BLOG_CARD_SCIENTIST from "../../assets/blog-card-scientist.png";
    import "swiper/css";

    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";

    export let slidersData = [{ title: "", link: "" }];

    let breakpoints = {
        0: {
            slidesPerView: 1.3,
            spaceBetween: -30,
        },
        567: {
            slidesPerView: 1.5,
            spaceBetween: -35,
        },
        1400: {
            slidesPerView: 2.2,
            spaceBetween: -40,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: -40,
        },
    };
</script>

<Swiper on:slideChange modules="{[Navigation, Pagination]}" navigation="{true}" breakpoints="{breakpoints}" slidesPerView="{1}" centeredSlides="{true}" loop="{true}" class="medium-blog-slider">
    {#each slidersData as data}
        <SwiperSlide>
            <a href="{data?.link}" target="_blank" class="w-100 medium-blog-card d-block text-decoration-none">
                <div class="card-wrapper">
                    <div class="medium-icon">
                        <img src="{ICON_MEDIUM}" alt="" />
                    </div>
                    <div class="content">
                        <h1>{data?.title.substring(0, 30)}...</h1>
                    </div>
                    <div class="lab-icon">
                        <img src="{LOGO_THELAB}" alt="" />
                    </div>
                </div>
                <div class="blog-card-scientist">
                    <img src="{BLOG_CARD_SCIENTIST}" alt="" />
                </div>
            </a>
        </SwiperSlide>
    {/each}
</Swiper>

<style lang="scss">
    .medium-blog-card {
        color: white;
        cursor: pointer;
        user-select: none;
        padding: 20px;
        border-radius: 20px;
        border: 4px solid $white;
        position: relative;
        overflow: hidden;
        z-index: 1;

        .card-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
            padding: 20px;
        }
        .content {
            display: flex;
            align-items: center;
            min-height: 5rem;
            width: 60%;

            @include media-breakpoint-up(md) {
                min-height: 18rem;

                max-width: 20rem;
            }

            h1 {
                font-size: clamp(18px, 3vw, 35px);
            }
        }
        .medium-icon {
            & > img {
                height: 20px;
            }
        }
        .lab-icon {
            & > img {
                height: 30px;
            }
        }

        .blog-card-scientist {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 42.5%;
            height: 100%;
            z-index: -1;
            & > img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
