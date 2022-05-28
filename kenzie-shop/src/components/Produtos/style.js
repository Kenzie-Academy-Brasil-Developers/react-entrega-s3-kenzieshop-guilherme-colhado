import styled from "styled-components";


export const SectionProduct = styled.section`
    display: flex;
    flex-direction: ${({direction}) => direction ? 'row' : 'column'};
    width: ${({direction}) => direction ? '100%' : '95%'};
    margin: 0 auto 10px;
    color: var(--gray1);
    align-items: ${({direction}) => direction ? 'center' : ''};
    padding: 10px 10px;
    background-color: white;
    border-radius: 4px;
    ${({direction}) => direction ? 'center' : ''};
    box-shadow: ${({direction}) => direction ? '' : '3px 3px 10px #00000050'};
    figure{
        display: flex;
        justify-content: center;
        height: 300px;
    }
    img{
        width: 100%;
        margin: 0 auto;
        height: 100%;
    }
    hr{
        margin: 5px 0;
    }
    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 10px;
        font-size: 2rem;
        transition: .10s ease-in;
        border-radius: 10px;
        border: 2px solid var(--blue);
        overflow: hidden;
        position: relative;
        z-index: 2;
        box-shadow: 1px 1px 10px #00000050;
        ::before{
            background-color: var(--blue);
            content: '';
            top: 50%;
            left: 50%;
            z-index: -1;
            transform: translate(-50%, -50%) rotate(-45deg);;
            transition: all .5s ease;
            position: absolute;
            height: 0%;
            width: 100%;
        }
        :hover::before{
            height: 700%;
        }
        :active{
            transition: .20s ease-in;
            filter: brightness(150%);
            transform: scale(0.95);
        }
    }

    h2{
        font-size: 3rem;
        margin: ${({direction}) => direction ? '0 50px' : '5px 0 10px'};
        margin-bottom: 10px;
    }

    h4{
        font-size: 3rem;
        margin-bottom: 10px;
    }
`