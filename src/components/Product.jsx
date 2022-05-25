import { useDispatch, useSelector } from "react-redux";
import nFormatter from "../numPrettier";
import { addToCart, removeFromCart } from "../redux/productsSlice";
import { buyProduct, sellProduct } from "../redux/walletSlice";

export default function Product({ product }) {
    const dispatch = useDispatch()
    const money = useSelector(state=>state.wallet.money)

  const addProduct = () => {
    dispatch(addToCart(product))
    dispatch(buyProduct(product))
  };

  const removeProduct = () => {
    dispatch(removeFromCart(product))
    dispatch(sellProduct(product))

  };

  return (
    <div className="product">
      <img
        src={product.image}
        alt={product.title}
      />
      <div className="content">
      <div className="divider"></div>
        <div className="prodTitle">{product.title}</div>
        <div className="prodPrice">$ {nFormatter(product.price,3)}</div>
      </div>

      <div className="shopping">
        <button disabled={money < product.price} onClick={addProduct}>Buy</button>
        <span>{product.amount}</span>
        <button disabled={product.amount === 0} onClick={removeProduct}>Sell</button>
      </div>
    </div>
  );
}
