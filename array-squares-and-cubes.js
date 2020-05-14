function arrayMadness(a, b) {

let sumsquares = 0;
let sumcubes = 0;

for (let i = 0; i < a.length; i++) {
  sumsquares += Math.pow(a[i], 2);
}

for (let i = 0; i < b.length; i++) {
  sumcubes += Math.pow(b[i], 3);
}

if (sumsquares > sumcubes) {
  return true
}

else { return false }

}

arrayMadness([4,5,6], [1,2,3]);