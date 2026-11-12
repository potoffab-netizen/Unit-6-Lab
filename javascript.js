/* Leveraged AI to help fix errors. From there changed identifiers and added dark mode to website. added button to switch between light and dark mode*/

const darkmode = document.querySelector("#dark-mode");

darkmode.addEventListener("click", () => {
    const Dark = document.body.dataset.theme !== "dark";

    document.body.dataset.theme = Dark ? "dark" : "light";
    darkmode.setAttribute("aria-pressed", String(Dark));
    darkmode.textContent = Dark ? "Switch to light mode" : "Switch to dark mode";
});
/* Scroll Reveal*/
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && typeof ScrollReveal === "function") {
    const reveal = ScrollReveal({
        distance: "30px",
        duration: 1000,
        easing: "ease-out",
        origin: "bottom",
        reset: true,
        opacity: 0,
    });

    reveal.reveal("main section > h2, main section > p, #projects article", {
        interval: 150
    });
} else if (!prefersReducedMotion) {
    console.error("ScrollReveal Error.");
}
