<script lang="ts">
    import UNDER_CONTENT_BG from "../../assets/roadmap-under-background.png";
    import DISCORD_ICON from "../../assets/discord-icon.png";
    import MediumBlogSlider from "../Sliders/MediumBlogSlider.svelte";
    import ICON_NAV from "../../assets/icon/arrow-icon.png";
    import { onMount } from "svelte";

    let myNextButton: HTMLImageElement;
    let myPrevButton: HTMLImageElement;

    function clickReflect(clicker: HTMLElement, toClick: HTMLElement) {
        if (clicker) {
            clicker.addEventListener("click", () => {
                console.log(clicker);
                toClick.click();
            });
        }
    }

    function customNavigation() {
        const prevButton: HTMLDivElement = document.querySelector(".medium-blog-slider-container .swiper-button-prev");
        const nextButton: HTMLDivElement = document.querySelector(".medium-blog-slider-container .swiper-button-next");

        clickReflect(myNextButton, nextButton);
        clickReflect(myPrevButton, prevButton);
    }

    onMount(customNavigation);

    const slidersData = [
        {
            title: "New DEX, who dis?",
            link: "https://medium.com/@TheLaboratoryIO/new-dex-who-dis-630fac6f8bbe",
        },
        {
            title: "Cronos and Laboratory Community update",
            link: "https://medium.com/@TheLaboratoryIO/cronos-and-laboratory-community-update-d00e9f344423",
        },
        {
            title: "Laboratory’s Community article 03-May 22",
            link: "https://medium.com/@TheLaboratoryIO/laboratorys-community-article-03-may-22-df5a8f6b2dd6",
        },
        {
            title: "The Lab Farms",
            link: "https://medium.com/@TheLaboratoryIO/the-lab-farms-ab4dc95695",
        },
        {
            title: "The Laboratory’s Deliverables",
            link: "https://medium.com/@TheLaboratoryIO/the-laboratorys-deliverables-31b05839e911",
        },
        {
            title: "Laboratory Crowd loan information",
            link: "https://medium.com/@TheLaboratoryIO/laboratory-crowd-loan-information-bce717064e30",
        },
        {
            title: "Laboratory Official — Significant dates 04 Apr 22",
            link: "https://medium.com/@TheLaboratoryIO/laboratory-official-significant-dates-04-apr-22-41f12958facd",
        },
        {
            title: "Laboratory, Community & #CROFam",
            link: "https://medium.com/@TheLaboratoryIO/laboratory-community-crofam-74d4314def86",
        },
        {
            title: "TheLaboratory.io — Mark your calendars",
            link: "https://medium.com/@TheLaboratoryIO/thelaboratory-io-mark-your-calendars-b24a3b0da2a8",
        },
        {
            title: "Labs & CROFam",
            link: "https://medium.com/@TheLaboratoryIO/labs-crofam-2b003ae48a2",
        },
        {
            title: "Community update — 16 Mar 22",
            link: "https://medium.com/@TheLaboratoryIO/community-update-16-mar-22-794f9fa6ce0b",
        },
        {
            title: "TheLaboratory.io 14 March 22",
            link: "https://medium.com/@TheLaboratoryIO/thelaboratory-io-14-march-22-ab7a62d90b95",
        },
        {
            title: "CRONOS #CROFam — March",
            link: "https://medium.com/@TheLaboratoryIO/cronos-crofam-3e5e848e8533",
        },
        {
            title: "TheLaboratory.io March update",
            link: "https://medium.com/@TheLaboratoryIO/thelaboratory-io-march-update-bc07bb5d4d0b",
        },
        {
            title: "The Laboratory x EbisusBay",
            link: "https://medium.com/@TheLaboratoryIO/the-laboratory-x-ebisusbay-613f85fc87c9",
        },
    ];
</script>

<div class="lets-be-crazy">
    <div class="title text-white">
        <h1>Laboratory <br /> Update</h1>
    </div>
    <div class="">
        <div class="background">
            <img src="{UNDER_CONTENT_BG}" alt="" />
        </div>

        <div class="w-100 medium-blog-slider-container">
            <MediumBlogSlider  slidersData="{slidersData}" />
        </div>
        <div class="space-controller">
            <img bind:this="{myPrevButton}" src="{ICON_NAV}" alt="" class="prev-button" />
            <img bind:this="{myNextButton}" src="{ICON_NAV}" alt="" class="next-button" />
        </div>

        <div class="right side-overlay"></div>
        <div class="left side-overlay"></div>
    </div>
</div>

<style lang="scss">
    .lets-be-crazy {
        position: relative;
        z-index: 1;
        --slider-top: 60%;

        .title {
            position: relative;
            z-index: 10;
            padding: 4vw;
            padding-bottom: 0;
            h1 {
                font-size: clamp(40px, 6vw, 80px);
                line-height: 1;
                margin-left: 5vw;
            }
        }
        .background {
            position: absolute;
            bottom: 0px;
            user-select: none;
            z-index: -2;
            height: 100%;
            width: 100%;
            left: 0px;
            & > img {
                width: 100%;
                height: 100%;
                -webkit-user-drag: none;
            }
        }
        .medium-blog-slider-container {
            position: absolute;
            top: var(--slider-top);
            left: 50%;
            max-width: 1700px;
            transform: translate(-50%, -50%);
            padding: 10px;
            z-index: 1;
        }
        .space-controller {
            width: 100%;
            height: 400px;
            & > img[class*="button"] {
                position: absolute;
                top: var(--slider-top);
                transform: translateY(-50%);
                left: 2vw;
                z-index: 3;
                cursor: pointer;
                user-select: none;
                width: clamp(30px, 5vw, 75px);
                &.next-button {
                    left: auto;
                    right: 2vw;
                    transform: translateY(-50%) rotate(180deg);
                }
            }

            @include media-breakpoint-up(lg) {
                height: 85vh;
            }
        }

        .side-overlay {
            width: 40vw;
            height: 100%;
            position: absolute;
            background: linear-gradient(to left, rgba(0, 0, 0, 0.8) 20.25%, rgba(0, 0, 0, 0) 92.2%);
            top: 0px;
            z-index: 2;
            pointer-events: none;

            &.right {
                right: 0px;
            }
            &.left {
                left: 0px;
                transform: rotate(-180deg);
            }
        }
    }
</style>
