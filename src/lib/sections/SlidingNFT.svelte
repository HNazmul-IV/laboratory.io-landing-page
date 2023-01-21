<script lang="ts">
  import IMAGE from './images/98.webp'
  import { onDestroy, onMount } from 'svelte'

export let intervalDelay = 1000

const DURATION = 10000

let container:HTMLDivElement

let interval:number

onMount(start)

onDestroy(destroy)

function start() {
  interval = window.setInterval(addImage, intervalDelay)
}

function destroy() {
  window.clearInterval(interval)
}

function addImage() {
  const img = new Image
  img.src = IMAGE
  img.className = 'slide-left'
  container.append(img)
  img.classList.add('moving')
  setTimeout(remove, DURATION)
  function remove() {
    img.remove()
  }
}

</script>

<div bind:this={container}>
  
</div>

<style lang="scss">
  .slide-left {
    position: absolute;
    right: -100%;
    transition: transform 10000s
  }

  .moving {
    transform: translateX(-1000%)
  }
</style>