<script lang="ts">
    import BACKGROUND from "../../assets/footer-bg.webp";
    import BLACK_LOGO  from "../../assets/Logo_Black.svg"
</script>

<footer>
    <div class="footer-wrapper">
        <div class="background">
            <img src={BACKGROUND} alt="" />
        </div>
        <div class="footer-content">
            <a href={"/#"} class="d-inline-block logo">
                <img src="{BLACK_LOGO}" alt="">
            </a>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        & > .footer-wrapper {
            position: relative;
            z-index: 1;
            .background {
                & > img {
                    width: 101%;
                    transform: translateX(-10px);
                    pointer-events: none;
                    user-select: none;
                    
                }
            }

            .footer-content{
                position: absolute;
                height: calc(100% - 50px);
                width:100%;
                top:50px;
                left:0px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .logo{
                width: 120px;
            }
        }
    }
</style>
