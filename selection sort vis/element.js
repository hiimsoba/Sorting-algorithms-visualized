class element {
  constructor(x, value) {
    this.x = x;
    this.value = value;
    this.clr = color(255);
  }
  show(optclr) {
    stroke(optclr || this.clr);
    line(this.x, height, this.x, height - this.value);
  }
}

function swap(arr, i, j) {
  // swap them in the array
  let aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
  // and now also swap their X coordinates
  aux = arr[i].x;
  arr[i].x = arr[j].x;
  arr[j].x = aux;
}
