const tail = function(array) {
  let tails = [];
  for (let i = 1; i < array.length; i++) {
    tails.push(array[i]);
  }
  return tails;
};

module.exports = tail;