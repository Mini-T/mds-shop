export const useProducts = () => useState<[]>('products', () => [])

export async function fetchAndStockProducts(products: Ref) {
    try {
        products.value = await (await fetch('https://fakestoreapi.com/products')).json()
    } catch(e) {
        console.log(e)
    }
}

export const usePanier = () => useState<[]>('panier', () => [])