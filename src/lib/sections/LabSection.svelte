<script lang="ts">
    import UPPER_RIBON from "../../assets/lab-ribon.png";
    import BACKGROUND from "../../assets/lab-background.png";
    import MMF_LOGO from "../../assets/mmf-logo.png";
    import COINGECKO_LOGR from "../../assets/coingecko-logo.webp";
    import { globals } from "svelte/internal";

    // variables
    let textInput: HTMLInputElement;
    let copyStatus = "Copy ";

    //copyFunction
    const handleCopyButton = () => {
        textInput.select();
        textInput.setSelectionRange(0, 99999);
        document.execCommand("copy");
        // window.navigator.clipboard.writeText(textInput.value) // this code will work on secure context
        copyStatus = "Copied";
        setTimeout(() => {
            copyStatus = "Copy";
            document.getSelection().removeAllRanges();
        }, 2000);
    };
</script>

<section id="lab">
    <div class="upper-ribon">
        <img src="{UPPER_RIBON}" alt="" />
    </div>
    <div class="background">
        <img src="{BACKGROUND}" alt="" />
    </div>

    <div class="content-wrapper">
        <div class="content col-mi-9 offset-lg-3 offset-md-2 p-3 p-md-5">
            <div class="title">
                <h1 class="headline text-black"><span class="large">$LAB</span> Token</h1>
                <h3 class="subtitle text-black">Cronos Contact address</h3>
            </div>
            <div class="copy-btn ">
                <div class="input-group rounded-pill mb-3 gap-2 p-md-3 p-1 bg-black">
                    <input
                        bind:this="{textInput}"
                        type="text"
                        class="form-control bg-transparent {copyStatus === 'Copied' ? 'vanish-select' : ''} border-0 text-white"
                        value="0x75f55e718ea51191966f256893bd96db2de9ee94"
                        readonly />
                    <button on:click="{handleCopyButton}" class="input-group-text rounded-pill {copyStatus === 'Copied' ? 'bg-success' : ''}" id="copy-btn">{copyStatus}</button>
                </div>
            </div>

            <div class="all-buttons">
                <a href="#lab" class="">LabDEX</a>
                <a href="https://mm.finance/swap?inputCurrency=0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23&outputCurrency=0x75f55e718ea51191966f256893bd96db2de9ee94" target="_blank" class=""
                    ><img src="{MMF_LOGO}" alt="" /></a>
                <a href="https://www.coingecko.com/en/coins/the-laboratory" target="_blank" class=""><img src="{COINGECKO_LOGR}" alt="" /> </a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    #lab {
        position: relative;
        z-index: 1;
        overflow: hidden;
        .upper-ribon {
            z-index: 1;
            position: relative;
            & > img {
                width: 100%;
            }
        }
        .background {
            margin-top: -7%;
            z-index: 1;
            & > img {
                width: 100%;
                @include media-breakpoint-down(sm) {
                    height: 300px;
                    object-fit: cover;
                    object-position: 20% top;
                }
            }
        }
    }

    #lab .content-wrapper {
        position: absolute;
        width: 100%;
        height: calc(100% - 7vw);
        z-index: 1;
        text-align: center;
        top: 17%;
        @include media-breakpoint-up(md) {
            text-align: left;
        }
        .title {
            & > .headline {
                font-size: 4vw;
                & > .large {
                    font-size: 7.5vw;
                }
            }
            & > .subtitle {
                font-size: 2.8vw;
            }
            @include media-breakpoint-down(md) {
                & > .headline {
                    font-size: 3.5vw;
                    & > .large {
                        font-size: 6.4vw;
                    }
                }
            }
        }
        .copy-btn {
            @include media-breakpoint-up(md) {
                transform: translateX(-5%);
            }
            .input-group {
                & > input {
                    display: inline-block;
                    @include media-breakpoint-up(md) {
                        font-size: clamp(18px, 1.4vw, 41px);
                    }
                }
            }
            #copy-btn {
                background-color: $green;
                border: none;
                cursor: pointer;
            }
        }
    }

    .all-buttons {
        display: flex;
        gap: 20px;
        padding: 20px 0;

        a,
        button {
            font-size: clamp(20px, 2vw, 22px);
            padding: 10px 20px;
            border-radius: 500px;
            background: $black;
            color: $green;
            min-width: 220px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            & > img {
                height: clamp(20px, 2.5vw, 50px);
            }
        }
        @include media-breakpoint-down(md) {
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            a,
            button {
                padding: 5px 10px;
                min-width: initial;
                font-size: 16px;
            }
        }
    }
</style>
