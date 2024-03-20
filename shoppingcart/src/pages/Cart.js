import { CartCard } from "../components/CartCard"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useCart } from "../context/CardContext"

export const Cart = () => {

  useDocumentTitle("Cart")

  const { total, cartList } = useCart();
  console.warn(cartList)
  return (
    <main>
      <section>
        <div className="flex justify-center ">
          <h2 className="font-bold text-2xl">Cart Items: {cartList.length}/${total}</h2>
        </div>
      </section>

      <section>
        {
          cartList.map((product) => {
            return <CartCard key={product.id} product={product} />
          })
        }
      </section>
    </main>
  )
}