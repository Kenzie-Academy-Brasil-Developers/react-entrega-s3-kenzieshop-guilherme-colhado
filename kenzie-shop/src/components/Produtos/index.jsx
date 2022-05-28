import { useDispatch } from 'react-redux'
import addToCartThunk from '../../Store/modules/cart/thunk'
import { SectionProduct } from './style'

export default function Product({product, direction}){
    const dispatch = useDispatch()
    return <SectionProduct direction={direction}>
        <figure>
            <img src={product.img} alt={product.nome}/>
        </figure>
        {!direction && <hr />}
        <h2>{product.nome}</h2>
        <h4>{product.preco}</h4>
        {!direction && <button onClick={()=>dispatch(addToCartThunk(product))}>Comprar</button>}
    </SectionProduct>
}