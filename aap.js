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

function inc() {
  let num = Math.floor(Math.random() * 6);

  let abc = (document.body.style.backgroundColor = arr[num]);
  console.log(abc);

  document.textContent = "Hasan";
}
