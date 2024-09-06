cl = console.log;

const selectColor = document.getElementById("selectcolor");

const allDivs = [...document.querySelectorAll(".all")];

const OnColorChnage = (eve) => {
  let SelectedColor = eve.target.value;

  cl(SelectedColor);

  allDivs.forEach((div) => div.classList.add("d-none"));

  let selectedDiv = [...document.querySelectorAll("." + SelectedColor)];

  cl(selectedDiv);

  selectedDiv.forEach((div) => div.classList.remove("d-none"));
};

selectColor.addEventListener("change", OnColorChnage);
