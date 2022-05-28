import { MdOutlineShoppingCart } from  'react-icons/md'
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import { BadgeStyled } from './style';
import { useNavigate } from 'react-router-dom';

export default function BtnCart() {

    const cart = useSelector(state => state.cart)
    const nav = useNavigate()
    console.log(cart)
    return (
    <button onClick={()=>nav('/cart')}>
      {cart.length <= 0 ? (
        <>
          <MdOutlineShoppingCart fontSize={"2rem"}/> Carrinho
        </>
      ) : (
        <>
          <BadgeStyled badgeContent={cart.length}>
            <MdOutlineShoppingCart />
          </BadgeStyled>
          Carrinho
        </>
      )}
    </button>
  );
}
