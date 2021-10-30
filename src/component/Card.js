import React from 'react'
import styled from 'styled-components'

function Card({account, amount, text, button, card, active, inactive, check,
     checkDisable, text1, text2, text3, text4, text5 ,text6 ,text7 ,text8}) {
    return (
        <CardStyled>
            <h4 className="card-title">
                {account}
            </h4>
            <h4 className="card-title">
                {amount} <span>/m</span>
            </h4>
            <p>{text}</p>
            <button>{button}</button>
            <img alt="" src={card} className="card-img"/>
            <div className="plan-container">
                <img alt="" src={active} />
                <img alt="" src={inactive} />
            </div>
            <div className="list-icon">
                <p className="text-check">
                    <img alt="" src={check} />
                    {text1}
                </p>
                <p className="text-check">
                    <img alt="" src={check} />
                    {text2}
                </p>
                <p className="text-check">
                    <img alt="" src={check} />
                    {text3}
                </p>
                <p className="text-check">
                    <img alt="" src={check} />
                    {text4}
                </p>
                <p className="text-check">
                    <img alt="" src={check} />
                    {text5}
                </p>
                <p className="text-check">
                    <img alt="" src={checkDisable} />
                    {text6}
                </p>
                <p className="text-check">
                    <img alt="" src={checkDisable} />
                    {text7}
                </p>
                <p className="text-check">
                    <img alt="" src={checkDisable} />
                    {text8}
                </p>             
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-color: white;
    padding: 3rem 2rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width:70%;
    margin: auto;
    .card-img { 
        width: 70%;
    }
    .card-title {
        font-size: 2rem;
        color: #000;
        margin-bottom: 2rem;
        span {
            color: var(--accent-pink);
            font-size: 1.4rem;
        }
    }
    button {
        padding: .8rem 1.8rem;
        border-radius: 20px;
        outline: none;
        border: 2px solid #000;
        margin: 1.5rem 0;
        background-color: white;
        &:hover {
            background-color: #333;
            color: white;
        }
    }

    .plan-container {
        margin: 1rem 0;
    }

    .list-icon {
        text-align: left;
        img {
            width: 16px;
            margin-right: .5rem;
        }
        p{ 
            margin: 0 0 1rem 0;
            text-align: left;
        }
    }
    
`

export default Card
