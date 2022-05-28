import { useSelector } from "react-redux";
import { FinalBoxStyled } from "./style";

export default function FinalBox(){
    const cart = useSelector(state => state.cart)
    const total = cart.map(produtc=>Number(produtc.preco.replace('R$ ', '').replace(',','.').replace('.',''))).reduce((acc, cv)=>acc+cv)
    return <FinalBoxStyled>
        <h2>Resumo do Pedido</h2>
        <div>
            <p>{cart.length} Produtos</p>
            <p>R${total.toFixed(2)}</p>
        </div>
        <button>Finalizar pedido</button>
    </FinalBoxStyled>
}