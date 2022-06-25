<script lang="ts">
    /// <reference types="bootstrap" />
    import { onMount, onDestroy } from "svelte";
    import logo from "../assets/Logo_White.svg";

    let shrink = false;
    let barButton: HTMLButtonElement;

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
    });



    onDestroy(() => {
        document.removeEventListener("scroll", navbarShrink);
    });
    // Shrink the navbar when page is scrolled

    // Activate Bootstrap scrollspy on the main nav element

    //Static Data
   /*  const linkData = [
        {
            name: "Top",
            link: "#top",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "NFT Collection",
            link: "#nft-collection",
        },
        {
            name: "Play 2 Earn",
            link: "#top",
        },
        {
            name: "$LAB",
            link: "#lab",
        },
        {
            name: "Roadmap",
            link: "#roadmap",
        },
    ]; */
</script>

<nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top" class:shrink>
    <div class="container-fluid more-horizontal-padding">
        <a class="navbar-brand" href="#sec1"><img src={logo} alt="..." /></a>
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
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href={"#top"}>Top</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#about"}>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#nfts"}>NFTs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={"#p2e"}>P2E</a>
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
    nav {
        background-color: $nav-bg-color;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: $nav-bg-color;
    }
    .nav-item > .nav-link {
        color: white;
        &.active {
            color: $green;
        }
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
