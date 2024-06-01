const WIDTH = 687;
const HEIGHT = 378;

// (x , -y) where the origin is top left
const coordinate = [348, 314];

function getPercentageCoordinate(coord) {
  let x;
  let y;
  [x, y] = [...coord];
  let left = x / WIDTH;
  let top = y / HEIGHT;
  return [left, top];
}

function renderCoordinate(coord) {
  const wrapper = document.querySelector(".wrapper");
  let left;
  let top;
  [left, top] = getPercentageCoordinate(coord);
  let leftText = `${left * 100}%`;
  let topText = `${top * 100}%`;
  console.log(leftText, topText);
  const newDot = document.createElement("div");
  newDot.classList.add("dot");
  newDot.style.left = leftText;
  newDot.style.top = topText;
  wrapper.appendChild(newDot);
}

renderCoordinate(coordinate);
renderCoordinate([10, 10]);
