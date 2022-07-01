<script>
    export let image = "";

    function loadBackupImage() {
        console.error(image);
    }

    function loadingImage() {
        console.log(this);
    }
</script>

<div class="nft-card">
    <div class="card-wrapper">
        <img src={image} on:click={loadingImage} on:error={loadBackupImage} class="_card-image" alt="" />
    </div>
</div>

<style lang="scss">
    .nft-card {
        width: calc(var(--card-width-width-gap) - var(--gap));
        flex-shrink: 0;
        aspect-ratio: 1/1;
        overflow: hidden;

        @include media-breakpoint-down(sm) {
            width: calc(var(--card-width-width-gap));
        }

        .card-wrapper {
            width: 100%;
            & > img {
                border-radius: 5px;
                width: 100%;
            }
        }
    }
</style>
