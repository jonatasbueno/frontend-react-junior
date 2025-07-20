/**
 * Avaliador aqui poderia muito bem ser um request para uma API, mas estou usando um mock local
 */
import type { Product } from '../type'

const keyLocalStorage = 'products'

function setProductsLocalStorage(products: Product[]) {
  localStorage.setItem(keyLocalStorage, JSON.stringify(products))
}

function getProductsLocalStorage(): Product[] {
  const stringValue = localStorage.getItem(keyLocalStorage)
  return stringValue ? JSON.parse(stringValue) : []
}

function requestMock(callback: any) {
  return new Promise((resolve) => {
    resolve(callback?.())
  })
} 

export async function postProducts(product: Product) {
  return requestMock(() => {
    const newProducts = getProductsLocalStorage()
    newProducts.push(product)
    setProductsLocalStorage(newProducts)
  })
}

export async function getProducts(): Promise<Product[]> {
  return requestMock(getProductsLocalStorage) as Promise<Product[]>
}

export async function deleteProduct(sku: string) {
  return requestMock(() => {
    const products = getProductsLocalStorage()
    const newProducts = products.filter(item => item.sku !== sku)
    setProductsLocalStorage(newProducts)
  })
}