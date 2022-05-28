import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    position: sticky;
    width: 100vw;
    padding: 15px;
    padding-left: 20px;
    background-color: var(--gray0);
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 3.2rem;
        color: var(--gray1);
    }
    >div{
        display: flex;
    }
    button{
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        background-color: transparent;
        border: none;
        color: var(--gray1);
        cursor: pointer;
        transition: all .25s ease-in;
        :not(:last-child){
            margin-right: 10px;
        }
        :hover{
            color: black;
            .MuiBadge-badge{
                filter: brightness(70%);
            }
        }
    }
`