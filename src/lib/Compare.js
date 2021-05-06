export function compareH(a, b) {
  const priceA = parseFloat(a.Price.replace(',', ''));
  const priceB = parseFloat(b.Price.replace(',', ''));

  let comparison = 0;
  if (priceA > priceB) comparison = 1;
  if (priceA < priceB) comparison = -1;

  return comparison * -1;
}

export function compareL(a, b) {
  const priceA = parseFloat(a.Price.replace(',', ''));
  const priceB = parseFloat(b.Price.replace(',', ''));

  let comparison = 0;
  if (priceA > priceB) comparison = 1;
  if (priceA < priceB) comparison = -1;

  return comparison;
}

export function compareD(a, b) {
  const codeA = a.ProductID;
  const codeB = b.ProductID;

  let comparison = 0;
  if (codeA > codeB) comparison = 1;
  if (codeA < codeB) comparison = -1;

  return comparison;
}
