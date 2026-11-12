/* Leveraged AI to help fix errors. From there changed identifiers and added dark mode to website. added button to switch between light and dark mode*/

const darkmode = document.querySelector("#dark-mode");

darkmode.addEventListener("click", () => {
    const Dark = document.body.dataset.theme !== "dark";

    document.body.dataset.theme = Dark ? "dark" : "light";
    darkmode.setAttribute("aria-pressed", String(Dark));
    darkmode.textContent = Dark ? "Switch to light mode" : "Switch to dark mode";
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && typeof ScrollReveal === "function") {
    const reveal = ScrollReveal({
        distance: "20px",
        duration: 600,
        easing: "ease-out",
        origin: "bottom",
        reset: false
    });

    reveal.reveal("main section > h2, main section > p, #projects article", {
        interval: 100
    });
} else if (!prefersReducedMotion) {
    console.error("ScrollReveal did not load. Check the internet connection and CDN script URL.");
}
