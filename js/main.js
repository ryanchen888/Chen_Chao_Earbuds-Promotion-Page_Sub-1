
(() => {

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [{title: "", text:  "", image: ""}]

  function modelLoaded() {
    console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
    let selected = document.querySelector(`#hotspot-${index+1}`);
    console.log(selected);
  })
}

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
