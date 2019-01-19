let values = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < width; i++) {
    values.push(new element(i, random(height)));
  }
}

let i = 0;
let j = i + 1;

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i].value > arr[j].value) {
//         swap(arr, i, j);
//       }
//     }
//   }
// }

function draw() {
  background(0);

  // do it WIDTH times each frame to speed things up
  for (let k = 0; k < width; k++) {
    // do the sorting
    if (i >= values.length - 1) {
      noLoop();
    } else {
      if (j >= values.length) {
        i++;
        j = i + 1;
      } else {
        if (values[i].value > values[j].value) {
          swap(values, i, j);
        }
        j++;
      }
    }
  }

  for (let v of values) {
    v.show();
  }
}
