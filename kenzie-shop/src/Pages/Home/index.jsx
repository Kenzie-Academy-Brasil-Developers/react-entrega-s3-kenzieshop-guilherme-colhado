import Header from "../../components/Header";
import { Master } from "./style";
import products from '../../data/products.json'
import Product from "../../components/Produtos";

export default function Home (){
    return <Master>
        <Header/>
        <main>
            <div>
               {products.map((product, index)=><Product key={index} product={product}/>)}
            </div>
        </main>

    </Master>
}