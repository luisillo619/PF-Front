export const productName = (filter, products) => {
  const regex = new RegExp(`${filter}.*`, "i");
  const productName = products.filter((e) => regex.test(e.name));
  return productName;
};

export const productCategory = (filter, products) => {
    
  const productCategory = products.filter((e) =>
    e.category.category.includes(filter)
  );
  return productCategory;
};

export const productPrice = (filter, products) => {
  let productPriceCopy = products.slice();

  if (filter === "0-100") {
    const Max100 = productPriceCopy.filter((e) => e.price <= 100);
    return Max100;
  } else if (filter === "100-500") {
    const Max500 = productPriceCopy.filter(
      (e) => e.price > 100 && e.price <= 500
    );
    return Max500;
  } else if (filter === "500-1000") {
    const Max1000 = productPriceCopy.filter(
      (e) => e.price > 500 && e.price <= 1000
    );
    return Max1000;
  } else if (filter === "+1000") {
    const MasDeMil = productPriceCopy.filter((e) => e.price > 1000);
    return MasDeMil;
  }
};
