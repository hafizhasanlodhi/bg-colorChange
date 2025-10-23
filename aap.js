let arr = [
  "#1ABC9C",
  "#3498DB",
  "#9B59B6",
  "#E74C3C",
  "#F1C40F",
  "#2ECC71",
  "#E67E22",
  "#34495E",
  "#95A5A6",
  "#FF5733",
];

let span = document.querySelector("span");

function inc() {
  let num = Math.floor(Math.random() * arr.length);

  let abc = document.body.style.backgroundColor = arr[num];
  console.log(arr[num]);

  span.textContent = abc;
}
