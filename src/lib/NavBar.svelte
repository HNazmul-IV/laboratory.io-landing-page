<script lang="ts">
  /// <reference types="bootstrap" />
  import { onMount, onDestroy } from 'svelte'
  import logo from '../assets/Logo_White.svg'
  
  let shrink = false 
  
  const navbarShrink = () => shrink = window.scrollY > 0
  navbarShrink();

  onMount(()=>{
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }
  })

  onDestroy(()=>{
    document.removeEventListener('scroll', navbarShrink);
  })
    // Shrink the navbar when page is scrolled
    

    // Activate Bootstrap scrollspy on the main nav element
    
</script>
<nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top" class:shrink>
  <div class="container-fluid more-horizontal-padding">
    <a class="navbar-brand" href="#sec1"><img src={logo} alt="..."></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto my-2 my-lg-0">
        <li class="nav-item">
          <a class="nav-link" href={'#sec1'}>sec1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={'#sec2'}>sec2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={'#sec3'}>sec3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={'#sec4'}>sec4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={'#sec5'}>sec5</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="scss">
  .more-horizontal-padding {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .navbar-brand img {
    height: 2rem;
    transition: height 0.3s ease-in-out;
  }
  /*nav {
    background-color: #212529;
  }*/
  $nav-bg-color: black;
  nav {
    background-color: $nav-bg-color;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: $nav-bg-color;
  }
  
  @media (min-width: 992px) {
    .shrink {
      padding-top: 1rem;
      padding-bottom: 1rem;
      background-color: $nav-bg-color;
    }
    nav {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      border: none;
      background-color: transparent;
      transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
    }
  }
</style>