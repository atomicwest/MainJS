Array.prototype.bubbleSort = function () {
  let flag = false;
  while (!flag) {
    flag = true;
    for(let i=0;i<this.length; i++) {

      if (this[i] > this[i+1]){
        flag = false;
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      }
     }
  }
  return this;
};

console.log([3,6,3,5,7,2,4,6,8,60,10].bubbleSort());


String.prototype.subStrings = function () {
  let out = [];
  for(let i=0; i<this.length; i++) {
    for(let j=i+1; j<this.length; j++) {
      let sub = this.slice(i,j);
      if (out.indexOf(sub) === -1) {
        out.push(sub);
      }

    }
  }
  return out;
};

console.log("donuts".subStrings());
