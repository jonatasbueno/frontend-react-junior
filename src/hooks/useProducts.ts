import { useEffect, useState } from "react"
import { getProducts, deleteProduct, postProducts } from '../services/ProdutoService'
import type { Product } from "../type"

type ProductWithExternalId = {
  id: string,
  data: Product
}

function handleError(error: any) {
  window.alert(error)
}

export function useProducts() {
  const [products, setProducts] = useState<ProductWithExternalId[]>([])

  useEffect(() => {
    getProducts()
      .then(itens => setProducts(itens))
      .catch(handleError)
  }, [products])

  function addProduct(product: Product) {
    const isExists = products.find(item => item.data.sku === product.sku)

    !isExists ?
      postProducts(product)
        .then(response => {
          const newList = [...products]
          newList.push(response)
          setProducts(newList)
        })
        .catch(handleError) :
      window.alert('Produto já existe')
  }

  function removeProduct(id: string) {
    deleteProduct(id)
      .then(() => {
        const newList = products.filter(item => item.id !== id)
        setProducts(newList)
      })
      .catch(handleError)
  }

  return {
    products,
    addProduct,
    removeProduct,
    hasProduct: products.length > 0
  }
}