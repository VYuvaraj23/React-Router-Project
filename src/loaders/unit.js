export default async function ProductLoader() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const product = await response.json();
    return product
  } catch (error) {
    console.log(error)

  }
}
