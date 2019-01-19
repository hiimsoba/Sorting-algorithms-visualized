let values = [];

let i = 1;
let j = i;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < width; i++) {
    values.push(new element(i, random(height)));
  }
}

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j].value < arr[j - 1].value) {
//       swap(arr, j, j - 1);
//       j--;
//     }
//   }
// }

function draw() {
  background(0);

  // make it happen faster... or not
  for (let k = 0; k < 1; k++) {
    // do the sorting!
    if (i >= values.length) {
      noLoop();
    } else {
      j = i;
      while (j > 0 && values[j].value < values[j - 1].value) {
        swap(values, j, j - 1);
        j--;
      }
      i++;
    }
  }

  for (let v of values) {
    v.show();
  }
}
