<script>
    export let image = "";
</script>

<div class="nft-card">
    <div class="card-wrapper">
        <img src={image} class="_card-image" alt="" />
    </div>
</div>

<style lang="scss">
    .nft-card {
        width: calc(var(--card-width-width-gap));
        flex-shrink: 0;
        aspect-ratio: 1/1;
        overflow: hidden;
        background: rgb(29, 27, 36);
        position: relative;
        z-index: 1;

        &::after {
            content: "";
            position: absolute;
            width: 35px;
            height: 35px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: solid $green;
            border-width: 4px;
            border-right-color: transparent;
            animation: spin 0.3s cubic-bezier(0.67, 0.85, 0.98, 0.98) infinite;
            z-index: -1;
        }

        .card-wrapper {
            width: 100%;
            & > img {
                border-radius: 5px;
                width: 100%;
            }
        }
    }

    @keyframes spin {
        from {
            transform:translate(-50%, -50%) rotate(0);
        }
        to {
            transform:translate(-50%, -50%) rotate(360deg);
        }
    }
</style>
