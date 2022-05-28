import styled from "styled-components";

export const Master = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >hr{
        margin: 20px 0;
        width: 100vw;
    }
    main{
        width: 100vw;
        display: flex;
        justify-content: center;
        div{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            @media screen and (max-width: 1000px) {
               grid-template-columns: repeat(3, 1fr);
            }
            @media screen and (max-width: 720px) {
               grid-template-columns: repeat(2, 1fr);
            }
            @media screen and (max-width: 450px) {
               grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`