import styled from "styled-components";

export const FinalBoxStyled = styled.div`
    background-color: white;
    box-shadow: 1px 1px 10px #00000050;
    padding: 10px;
    height: max-content;
    display: flex;
    flex-direction: column;
    width: 25%;
    border-radius: 4px;
    h2{
        font-size: 3rem;
        margin-bottom: 15px;
    }
    div{
        display: flex;
        justify-content: space-between;
        p{
            font-size: 2.5rem;
        }
    }
    button{
        background-color: var(--blue);
        padding: 10px 20px;
        font-size: 2rem;
        color: white;
        border: none;
        border-radius: 4px;
        margin: 25px auto;
    }
`