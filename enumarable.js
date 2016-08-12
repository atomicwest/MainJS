// function myEach(array, callback) {
//   for (let i=0; i < array.length; i++){
//     callback(array[i]);
//   }
// }

Array.prototype.myEach = function (callback) {
  for (let i=0; i < this.length; i++){
    callback(this[i]);
  }
};

function myMap(array, callback) {
  let mappedArray = [];
  for (let i=0; i < array.length; i++){
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}


Array.prototype.myInject = function(callback, acc) {
  // if (acc === undefined){
  //   acc = array.shift();
  // }
  this.myEach((el) => {acc = callback(acc, el);});
  return acc;
};

console.log([1, 2, 3, 4].myInject( (a, b) => a + b   , 0))

//----------------------------------
