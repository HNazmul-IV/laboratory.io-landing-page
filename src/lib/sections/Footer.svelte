<script lang="ts">
    import BACKGROUND from "../../assets/footer-bg.webp";
    import BLACK_LOGO from "../../assets/Logo_Black.svg";
    import TELEGRAM_ICON from "../../assets/icon/telegram-plane.svg";
    import TWITTER_ICON from "../../assets/icon/twitter-brands.svg";
    import GITBOOK_ICON from "../../assets/icon/gitbook.svg";
    import DISCORD_ICON from "../../assets/icon/discord.svg";

    //HardCoded static Data;
    const iconsData = [
        { icon: DISCORD_ICON, href: "https://discord.com/invite/TheLaboratory" },
        { icon: TWITTER_ICON, href: "https://twitter.com/TheLaboratoryIO" },
        { icon: TELEGRAM_ICON, href: "https://t.me/thelaboratoryio" },
        { icon: GITBOOK_ICON, href: "https://app.gitbook.com/o/MiURbLpa3PCeyupCoxXs/s/0qREcbPE89fljJhGX6aY/?fbclid=IwAR3IP2sCm7msDg_h5rESNPVizBthu4pKYPxTkuoiNrs2cFOOpcNInPYt3j0" },
    ];
</script>

<footer>
    <div class="footer-wrapper">
        <div class="background">
            <img src="{BACKGROUND}" alt="" />
        </div>
        <div class="footer-content">
            <div class="logo">
                <a href="{'/#'}" class="d-inline-block">
                    <img src="{BLACK_LOGO}" alt="" />
                </a>
            </div>
            <!-- <div class="text-center">
                <button class="btn bg-black text-white p-5 py-3 rounded-pill">Whitepaper</button>
            </div> -->
            <div class="icons">
                {#each iconsData as icon}
                    <a class="icon d-block" href="{icon.href}" target="_blank">
                        <img src="{icon.icon}" alt="" />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        overflow: hidden;

        & > .footer-wrapper {
            position: relative;
            z-index: 1;
            min-height: 300px;
            background-color: #aeff04;
            .background {
                & > img {
                    width: 102%;
                    transform: translateX(-1%) translateY(-4%);
                    pointer-events: none;
                    user-select: none;
                }
            }

            .footer-content {
                position: absolute;
                height: calc(100% - 70px);
                width: 100%;
                top: 70px;
                left: 0px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                @include media-breakpoint-down(sm) {
                    top: 35px;
                }
            }
            .logo {
                width: 320px;
                @include media-breakpoint-down(md) {
                    width: 230px;
                }
                a,
                img {
                    width: 100%;
                }
            }

            .icons {
                display: flex;
                padding: 10px;
                gap: 10px;
                .icon {
                    width: 40px;
                    height: 40px;
                    padding: 7px;
                    border-radius: 100%;
                    background: black;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.3s;
                    cursor: pointer;
                    &:hover {
                        transform: scale(1.2);
                    }
                    & > img {
                        color: white;
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
