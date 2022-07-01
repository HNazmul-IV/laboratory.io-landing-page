<script context="module" lang="ts">
    export enum diretionsEnum {
        ltr = "ltr",
        rtr = "rtr",
    }
</script>

<script lang="ts">
    export let direction: diretionsEnum;
</script>

<div class="animation-contianer {direction}">
    <slot />
</div>
