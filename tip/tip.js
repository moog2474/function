let pay = [3000, 27500, 100000]
let sum = []
let nem = []
let average = ""
function sums(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 5000 && a[i] <= 30000) {
            sum[i] = a[i] * 1.15;
        } else {
            sum[i] = a[i] * 1.2;
        }
    }

    console.log(sum);

    let sumA = 0;
    for (let o = 0; o <= sum.length - 1; o++) {
        sumA += sum[o]
    }
    return sumA;
}
console.log(sums(pay));



// let b = 0;
// for (let j = 0; j < sums(pay); j++) {
//     b += sums(a)[i];
// }
// console.log(b);