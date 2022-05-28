import Header from "../../components/Header";
import { Master } from "./style";
import Product from "../../components/Produtos";
import { useSelector } from "react-redux";
import FinalBox from "../../components/BoxFinalPedido";
export default function Cart (){
    const cart = useSelector(state=>state.cart)
    return <Master>
        <Header back={true}/>
        <main>
            <div>
                <div>
                    <p>Produto</p>
                    <p>Preço</p>
                </div>
                <hr />
                <div>
                    {cart.map((product, index)=><>
                        <Product key={index} direction={true} product={product}/>
                        {index+1 < cart.length && <hr />}
                    </>)}
                </div>
            </div>
            <FinalBox/>
        </main>

    </Master>
}