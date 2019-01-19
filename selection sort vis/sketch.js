let values = [];

let i = 0;
let j = i + 1;

let minimum;
let minimumIndex = 0;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < width; i++) {
    values.push(new element(i, random(height)));
  }
  minimum = values[0].value;
}

// function selectionSort(arr) {
//   // pick the minimum element arr.length - 1 times
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minimum = arr[i].value;
//     let minimumIndex = i;
//     // start looking for it at i + 1, i guess
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j].value < minimum) {
//         minimum = arr[j].value;
//         minimumIndex = j;
//       }
//     }
//     swap(arr, i, minimumIndex);
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
        swap(values, i, minimumIndex);
        i++;
        minimum = values[i].value;
        minimumIndex = i;
        j = i + 1;
      } else {
        if (values[j].value < minimum) {
          minimum = values[j].value;
          minimumIndex = j;
        }
        j++;
      }
    }
  }

  for (let v of values) {
    v.show();
  }
}
