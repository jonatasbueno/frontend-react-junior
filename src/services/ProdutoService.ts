import axios from 'axios'
import type { Product } from '../type'

type ProductWithExternalId = {
  id: string,
  data: Product
}

const url = "http://localhost:3000"

export async function postProducts(product: Product) {
  const response = await axios.post<any, ProductWithExternalId>(`${url}/products`, { data: product })
  return response
}

export async function getProducts(): Promise<ProductWithExternalId[]> {
  const response = await axios.get<any, ProductWithExternalId[]>(`${url}/products`)
  return response
}

export async function deleteProduct(id: string) {
  const response = await axios.delete(`${url}/products/${id}`)
  return response
}