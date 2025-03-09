let salesdata = [
  {product:"laptop", price:500},
  {product:"apple", price:400},
  {product:"watch", price:1000},
  {product:"blak", price:700},
  {product:"tshirt", price:800},
]

let expensive = salesdata.reduce((maxproduct,curr) => 
  maxproduct.price > curr.price ? maxproduct: curr  // default maxproduct - first {product:"laptop", price:500}
);

console.log(expensive);
