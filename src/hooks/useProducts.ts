import { useEffect, useState } from 'react'
import { deleteProduct, postProducts, getProducts } from '../services/ProdutoService'
import type { Product } from "../type"

function handleError(error: any) {
  window.alert(error)
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts()
      .then(list => setProducts(list))
  }, [getProducts])

  async function handleSuccess(products: Product[]) {
    return setProducts(products)
  }

  function addProduct(product: Product) {
    const isExists = products.find((item: Product) => item.sku === product.sku)

    !isExists ?
      postProducts(product)
        .then(() => getProducts())
        .then(handleSuccess)
        .catch(handleError) :
      window.alert('Produto já existe')
  }

  function removeProduct(sku: string) {
    deleteProduct(sku)
      .then(() => getProducts())
      .then(handleSuccess)
      .catch(handleError)
  }

  return {
    products,
    addProduct,
    removeProduct,
    hasProduct: !!products.length
  }
}