import axios from 'axios'

const url = "http://localhost:3000"

export type Product = {
  nome: string,
  preço: number,
  sku: string
}

export async function postProducts(product: Product) {
  const response = await axios.get(`${url}/products`, { data: product})
  return response
}

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get(`${url}/products`) as Product[]
  return response
}

export async function deleteProduct(sku: string) {
  const response = await axios.delete(`${url}/products/${sku}`)
  return response
}