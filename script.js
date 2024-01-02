document.addEventListener("DOMContentLoaded", (event) => {
  const storyContainer = document.getElementById("br-container");
  fillInitialView();

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      addSentence();
    }
  });

  function addSentence() {
    const br = document.createElement("br");
    storyContainer.appendChild(br);
  }

  function fillInitialView() {
    // Keep adding sentences until the page is 105% full
    while (document.body.offsetHeight < window.innerHeight * 1.05) {
      addSentence();
    }
  }
});