import { CartCard } from "../components/CartCard"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useCart } from "../context/CardContext"

export const Cart = () => {

  useDocumentTitle("Cart")

  const { total } = useCart();

  const products = [
    { id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "imageSource": "/assets/1001.jpeg" },
    { id: 2, "name": "boAt RockerZ 450", "price": 49, "imageSource": "/assets/1002.jpeg" },
  ]

  return (
    <main>
      <section>
        <div className="flex justify-center ">
          <h2 className="font-bold text-2xl">Cart Items: {products.length}/${total}</h2>
        </div>
      </section>

      <section>
        {
          products.map((product) => {
            return <CartCard key={product.id} product={product} />
          })
        }
      </section>
    </main>
  )
}