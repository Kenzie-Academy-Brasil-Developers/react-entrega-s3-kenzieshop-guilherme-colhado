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
        justify-content: space-around;
        div:nth-child(1){
            border-radius: 10px;
            background-color: white;
            margin-bottom: 10px;
            div:nth-child(1){
                display: flex;
                padding: 10px;
                font-size: 2rem;
                justify-content: space-between;
            }
        }
    }
`