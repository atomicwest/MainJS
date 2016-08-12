// Array exercises

// function myUniq (array){
//   let out = [];
//   array.forEach(el => {
//     if (out.indexOf(el) === -1) {
//       console.log(el);
//       out.push(el);
//     };
//   });
//   return out
// };
//
// console.log(myUniq([1,2,3,1,19]))


//-0

// function twoSum (array) {
//   let out = [];
//
//   for(let i=0; i<array.length; i++){
//     for(let j=i+1; j<array.length; j++) {
//
//         if (array[i] + array[j] === 0) {
//           out.push([i,j]);
//         };
//       };
//     };
//
//   return out
// };
//
// console.log(twoSum([-1, 0, 2, -2, 1]))

//-----------------------------

function myTranspose (matrix) {
  let out = []
  for(let i=0; i<matrix.length; i++){
    let sub = []
    for(let j=0; j<matrix.length; j++) {
        // matrix[]
        // matrix[i][j]
        // out[j] = [ matrix[i][j]  ]
        sub.push(matrix[j][i])

      };
      out.push(sub)
    };

  return out
};

rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
console.log(myTranspose(rows))
