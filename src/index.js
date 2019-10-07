module.exports = function multiply(first, second) {
  let a = BigInt(first);
  let b = BigInt(second);
  return String(a * b);
}

/*const product = Array(first.length+second.length).fill(0);
  for (let i = first.length; i--;) {
      let carry = 0;
      for (let j = second.length; j--;) {
          product[1+i+j] += carry + first[i]*second[j];
          carry = Math.floor(product[1+i+j] / 10);
          product[1+i+j] = product[1+i+j] % 10;
      }
      product[i] += carry;
  }
  return product.join("").replace(/^0*(\d)/, "$1");*/