for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let a = 1;
while (a <= 5) {
  console.log(a);
  a++;
}

let b = 1;
do {
  console.log(b);
  b++;
} while (b <= 5);

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let c = 1;
while (c <= 10) {
  if (c % 2 !== 0) {
    console.log(c);
  }
  c++;
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

let n = 5;
let fact = 1;
let i = 1;
while (i <= n) {
  fact *= i;
  i++;
}
console.log(fact);

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

let count = 1;
do {
  console.log("Hello");
  count++;
} while (count <= 3);

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}