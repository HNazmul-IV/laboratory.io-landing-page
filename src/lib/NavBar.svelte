<script lang="ts">
  /// <reference types="bootstrap" />
  import { onMount, onDestroy } from "svelte";
  import logo from "../assets/Logo_White.svg";
  import IMG_NAVBAR_ITEM_BG from "../assets/navbar-content-bg.png";
  import IMG_NAVBAR_ITEM_SKULL from "../assets/navbar-content-skull.png";

  let shrink = false;
  let show_navbar_items = false;
  let barButton: HTMLButtonElement;
  let navbarUL: HTMLUListElement;

  const navbarShrink = () => (shrink = window.scrollY > 0);
  navbarShrink();

  // onMount(() => {
  //     document.addEventListener("scroll", navbarShrink);
  //     const mainNav = document.body.querySelector("#mainNav");
  //     if (mainNav) {
  //         new bootstrap.ScrollSpy(document.body, {
  //             target: "#mainNav",
  //             offset: 74,
  //         });
  //     }

  //     // Navbar Hide on Nav Element Click
  //     const navElements: NodeList = [].slice.call(navbarUL.querySelectorAll(".nav-item .nav-link"), 0);
  //     navElements.forEach((elm: HTMLAnchorElement) => {
  //         elm.addEventListener("click", function () {
  //             if (window.getComputedStyle(barButton).display !== "none") {
  //                 barButton.click();
  //             }
  //         });
  //     });
  // });

  onMount(() => window.addEventListener("scroll", navbarShrink));
  onDestroy(() => window.removeEventListener("scroll", navbarShrink));

  // onDestroy(() => {
  //     document.removeEventListener("scroll", navbarShrink);
  // });
  // Shrink the navbar when page is scrolled

  // Activate Bootstrap scrollspy on the main nav elements
</script>

<nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top" class:active={show_navbar_items} class:shrink>
  <div class="container-fluid more-horizontal-padding">
    <div class="">
      <a class="navbar-brand" href={"#"}><img src={logo} alt="..." /></a>
      <a href="https://dapps.thelaboratory.io/" rel="noreferrer" target="_blank" class="lab-dapss-button">
        <span class="text-green">Lab</span><span class="text-white">Dapps</span>
      </a>
    </div>
    <div class="bar-svg" on:click={() => (show_navbar_items = true)} on:keypress={null}>
      <svg width="89" height="32" viewBox="0 0 89 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="89" height="6" fill="currentColor" />
        <rect y="13" width="89" height="6" fill="currentColor" />
        <rect y="26" width="89" height="6" fill="currentColor" />
      </svg>
    </div>
  </div>
  <div class="navbar-contents" class:active={show_navbar_items}>
    <div class="left-content">
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="logo" />

        <div class="menu-text text-center">
          <h1 class="mb-0">MENU</h1>
          <p class="m-0">Welcome To Laboratory</p>
        </div>

        <div class="icons d-flex justify-content-center pb-5">
          <a href="/#" class="social-icons">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18.0004" cy="18.0004" r="17.9932" fill="#252021" />
              <path
                d="M22.3519 9.00001C19.1107 8.99553 16.7637 11.7092 16.7637 14.5882C16.7637 14.5882 13.8019 14.0976 11.0022 11.6175C10.5596 11.2252 10.1103 11.2353 10.0578 11.2353C9.47103 11.2353 8.93903 11.7181 8.94015 12.3529C8.94127 12.8067 8.94015 14.7458 8.94015 15.2577C8.94015 16.5363 9.35031 17.6294 10.0075 18.5291C10.0075 18.538 10.0075 18.5257 10.0075 19.4858C10.0075 21.1969 10.6636 22.5 11.8874 23.184C11.561 23.6646 10.7586 24.0938 10.0545 24.3598C9.58728 24.5375 9.16257 24.6437 8.95021 24.646C8.32098 24.6549 7.82698 25.1802 7.82363 25.767C7.82028 26.3526 8.23044 26.6409 8.49644 26.8186C8.93009 27.1092 9.50346 27.2836 10.0545 27.4434C11.3409 27.8156 12.7301 28 14.1696 28C21.2723 28 27.1299 22.6811 27.8675 15.7573C27.8675 15.7573 28.1112 15.0006 28.7002 14.3211C29.2903 13.6416 30.1755 13.1252 30.1755 13.1252L28.0352 13.0772L29.4333 11.1191C29.4333 11.1191 27.1366 11.6008 26.8225 11.2353C25.7842 9.81701 23.9602 9.00224 22.3519 9.00001ZM24.5872 12.3529C25.2042 12.3529 25.7049 12.8525 25.7049 13.4683C25.7049 14.0853 25.2042 14.5849 24.5872 14.5849C23.9703 14.5849 23.4696 14.0853 23.4696 13.4683C23.4696 12.8525 23.9703 12.3529 24.5872 12.3529Z"
                fill="#B1FF05" />
              <circle cx="24.5884" cy="13.4706" r="1.11765" fill="#B1FF05" />
            </svg>
          </a>
          <a href="/#" class="social-icons">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18.0004" cy="18.0004" r="17.9932" fill="#252021" />
              <path
                d="M9.06024 15.556C8.40984 15.829 8.00614 16.315 8.00004 17.003C7.99584 17.484 8.32044 18.1301 8.97084 18.3941C9.23874 18.5031 13.0002 19.009 13.0002 19.009C13.0002 19.009 13.9958 22.156 14.3546 23.262C14.4585 23.582 14.5177 23.739 14.7457 23.948C15.1325 24.302 15.7864 24.1911 16.0692 23.9071C16.8174 23.1571 18 22 18 22L18.4977 22.405C18.4977 22.405 20.7078 24.168 21.9159 24.998C22.6272 25.487 23.1209 25.997 23.9215 26C24.3293 26.002 24.9834 25.799 25.4158 25.304C25.7015 24.977 25.8848 24.454 25.9557 23.985C26.1169 22.92 28.008 11.404 28 11.001C27.9872 10.358 27.4463 9.99603 26.9967 10C26.7143 10.003 26.4816 10.085 25.9638 10.243C21.9584 11.466 9.32554 15.445 9.06024 15.556ZM24 13C24 13 18.722 17.594 16.6129 19.708C15.9372 20.385 15.8895 21.547 15.8895 21.547L14.7993 18.059L24 13Z"
                fill="#B1FF05" />
              <path d="M24 13C24 13 18.722 17.594 16.6129 19.708C15.9372 20.385 15.8895 21.547 15.8895 21.547L14.7993 18.059L24 13Z" fill="#B1FF05" />
            </svg></a>
          <a href="/#" class="social-icons"
            ><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18.0004" cy="18.0004" r="17.9932" fill="#252021" />
              <path
                d="M20 8H23V12H21C20.461 12.006 20.014 12.437 20 13V16H23L22 20H20V28H16V20H14V16H16V12C16.008 9.752 17.768 8.006 20 8Z"
                fill="#B1FF05" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="right-content">
      <div class="right-content-bg">
        <img src={IMG_NAVBAR_ITEM_BG} alt="" />
      </div>
      <div class="right-content-skull">
        <img src={IMG_NAVBAR_ITEM_SKULL} class="w-100 h-100" alt="" />
      </div>

      <div class="right-content-wrapper navbar-item-list-wrapper">
        <ul class="navbar-item-list">
          <li class="navbar-item">
            <a href="/" class="navbar-link">About</a>
          </li>
          <li class="navbar-item">
            <a href="/" class="navbar-link">NFT&nbsp;Collections</a>
          </li>
          <li class="navbar-item">
            <a href="/" class="navbar-link">Gamification</a>
          </li>
          <li class="navbar-item">
            <a href="/" class="navbar-link">$CERN</a>
          </li>
          <li class="navbar-item">
            <a href="/" class="navbar-link">Roadmap</a>
          </li>
        </ul>

        <div class="back-button" on:click={() => (show_navbar_items = false)} on:keydown={null}>
          <button class="btn btn-outline-success">Back</button>
        </div>
      </div>
    </div>
  </div>
</nav>

<style lang="scss">
  @use "../sass/components/navbar.scss" as *;
</style>
