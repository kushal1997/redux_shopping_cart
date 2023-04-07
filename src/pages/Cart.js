import { CartCard } from "../components"
import {useTitle} from "../hooks/useTitle"
import { useSelector } from "react-redux"

export const Cart = () => {
  useTitle("Cart");
  const cartList=useSelector(state => state.cartState.cartList);
  const total=useSelector(state => state.cartState.total);

  return (
    <main>
      <section className="mx-0 my-[30px]">
        <h1 className="text-center font-bold text-lg">Cart Items:{cartList.length} / ${total} </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}
