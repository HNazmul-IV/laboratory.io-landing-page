<script lang="ts">
    /// <reference types="bootstrap" />
    import { onMount, onDestroy } from "svelte";
    import logo from "../assets/Logo_White.svg";

    let shrink = false;
    let barButton: HTMLButtonElement;
    let navbarUL: HTMLUListElement;

    const navbarShrink = () => (shrink = window.scrollY > 0);
    navbarShrink();

    onMount(() => {
        document.addEventListener("scroll", navbarShrink);
        const mainNav = document.body.querySelector("#mainNav");
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: "#mainNav",
                offset: 74,
            });
        }

        // Navbar Hide on Nav Element Click
        const navElements: NodeList = [].slice.call(navbarUL.querySelectorAll(".nav-item .nav-link"), 0);
        navElements.forEach((elm: HTMLAnchorElement) => {
            elm.addEventListener("click", function () {
                if (window.getComputedStyle(barButton).display !== "none") {
                    barButton.click();
                }
            });
        });
    });

    onDestroy(() => {
        document.removeEventListener("scroll", navbarShrink);
    });
    // Shrink the navbar when page is scrolled

    // Activate Bootstrap scrollspy on the main nav elements
</script>

<nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top" class:shrink>
    <div class="container-fluid more-horizontal-padding">
        <a class="navbar-brand" href={"#"}><img src={logo} alt="..." /></a>
        <button class="labdapps"><span class="text-green">Lab</span><span class="text-white">Dapps</span></button>
        <button
            bind:this={barButton}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul bind:this={navbarUL} class="navbar-nav ms-auto my-2 my-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href={"#"}>Top</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#about"}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#nfts"}>NFT&nbsp;Collections</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#p2e"}>Pay2Earn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#lab"}>$LAB</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#roadmap"}>Roadmap</a>
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

    .labdapps {
        background: transparent;
        position: relative;
        padding: 7px 15px;
        z-index: 1;
        font-size: 18px;
        margin: 0px;
        border:none;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: -1;
            border: 3px solid $green;
            border-radius: 50px;
            filter: drop-shadow(0px 0px 2px #aeff04);
        }
    }

    nav {
        background-color: $nav-bg-color;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: $nav-bg-color;
    }
    .nav-item {
        & > .nav-link {
            color: white;
            padding: 8px 15px;
            &.active,
            &:active,
            &:focus {
                color: $green;
            }
        }
    }

    @media (min-width: 992px) {
        .shrink {
            padding-top: 1rem;
            padding-bottom: 1rem;
            background-color: $nav-bg-color;
        }
        nav {
            padding-top: 2rem;
            padding-bottom: 2rem;
            border: none;
            background-color: transparent;
            transition: padding-top 0.5s ease-in-out, padding-bottom 0.5s ease-in-out, background 0.5s ease-in-out;
        }
    }
</style>
