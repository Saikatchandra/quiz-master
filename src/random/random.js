let arr = []

for (let step = 0; step < 10; step++) {
  // Runs 5 times, with values of step 0 through 4.
  // console.log(Math.floor((Math.random() * 10)))
  // while (true) {
  //   let val = Math.floor((Math.random() * 10));
  //   if (val in arr){
  //     continue;
  //   } else {
  //     arr.push(val)
  //     break;
  //   }
  // }
}

while (true) {
  let val = Math.floor((Math.random() * 10));
  if (val in arr){
    continue;
  } else {
    console.log(val)
    break;
  }
}

// console.log(arr)