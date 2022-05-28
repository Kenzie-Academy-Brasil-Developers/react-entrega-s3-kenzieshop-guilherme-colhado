import { HeaderStyled } from "./style"
import { MdOutlineLogin } from  'react-icons/md'
import { RiArrowGoBackLine } from 'react-icons/ri'
import BtnCart from "../BotaoCarrinho"
import { useNavigate } from "react-router-dom"

export default function Header({back}){
    const nav = useNavigate()
    return <>
        <HeaderStyled>
            <h1>Kenzie Shop</h1>
            <div>
                {!back ? <BtnCart/> : <button onClick={()=>nav('/')}><RiArrowGoBackLine/>Voltar</button>}
                <button><MdOutlineLogin style={{marginRight: '10px'}}/>Entrar</button>
            </div>
        </HeaderStyled>
        <hr/>
    </>
}