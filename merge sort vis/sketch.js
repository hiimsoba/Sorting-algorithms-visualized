let a = [];
let b = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < width; i++) {
    a.push(random(height));
  }
  temp = a;
}

let k = 1;
let right, wid, rend;
let i, j, m, t;
let left = 0;


function draw() {
  background(0);

  // do the sorting pl0x
  if (k >= a.length) {
    noLoop();
  } else {
    if (left + k >= a.length) {
      k *= 2;
      left = 0;
      if (k == 8) {
        frameRate(6);
      }
    } else {
      right = left + k;
      rend = right + k;
      if (rend > a.length) {
        rend = a.length;
      }
      m = left;
      i = left;
      j = right;
      while (i < right && j < rend) {
        if (a[i] <= a[j]) {
          b[m++] = a[i++];
        } else {
          b[m++] = a[j++];
        }
      }
      while (i < right) {
        b[m++] = a[i++];
      }
      while (j < rend) {
        b[m++] = a[j++];
      }
      for (m = left; m < rend; m++) {
        a[m] = b[m];
      }
      left += k * 2;
    }
  }

  stroke(255);
  for (let i = 0; i < width; i++) {
    line(i, height, i, height - a[i]);
  }
}

// function mergesort(a) {
//   let right, wid, rend;
//   let i, j, m, t;
//   let b = new Array(a.length);
//
//   for (let k = 1; k < a.length; k *= 2) {
//     for (let left = 0; left + k < a.length; left += k * 2) {
//       right = left + k;
//       rend = right + k;
//       if (rend > a.length) {
//         rend = a.length;
//       }
//       m = left;
//       i = left;
//       j = right;
//       while (i < right && j < rend) {
//         if (a[i] <= a[j]) {
//           b[m++] = a[i++];
//         } else {
//           b[m++] = a[j++];
//         }
//       }
//       while (i < right) {
//         b[m++] = a[i++];
//       }
//       while (j < rend) {
//         b[m++] = a[j++];
//       }
//       for (m = left; m < rend; m++) {
//         a[m] = b[m];
//       }
//     }
//   }
// }
