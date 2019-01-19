let values = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < width; i++) {
    values.push(new element(i, random(height)));
  }
  lo = 0;
  hi = values.length - 1;
}

let toRight = true;
let i = 0;
let hi;
let lo;
let newhi;
let newlo;

function draw() {
  background(0);

  // speed it up
  for (let k = 0; k < width / 4; k++) {
    // sort it
    if (toRight) {
      if (i >= hi) {
        toRight = false;
        hi = newhi;
        i = hi;
      } else {
        if (values[i].value > values[i + 1].value) {
          swap(values, i, i + 1);
          newhi = i;
        }
        i++;
      }
    } else {
      if (i < lo) {
        toRight = true;
        lo = newlo;
        i = lo;
      } else {
        if (values[i].value > values[i + 1].value) {
          swap(values, i, i + 1);
          newlo = i;
        }
        i--;
      }
    }
  }

  // show the boundaries
  stroke(255, 0, 0);
  line(hi, 0, hi, height);
  line(lo, 0, lo, height);

  // show the lines
  for (let v of values) {
    v.show();
  }
}

// function cocktailShakerSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i].value > arr[i + 1].value) {
//         swap(arr, i, i + 1);
//         swapped = true;
//       }
//     }
//     if(!swapped) {
//       break;
//     }
//     swapped = false;
//     for (let i = arr.length - 2; i >= 0; i--) {
//       if (arr[i].value > arr[i + 1].value) {
//         swap(arr, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
