import React, {useState} from 'react'
import styled from 'styled-components'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'

function Question({title, description}) {

    const [toggle, setToggle]  = useState(false)

    return (
        <QuestionStyled>
            <div className="question-container">
                <div className="toggle-title">
                    <h4>{title}</h4>
                    <button onClick={() => setToggle(!toggle)}>
                        {toggle ? <img alt="" src={minus} /> : <img alt="" src={plus} className=""/>}
                    </button>
                </div>
                {toggle && <p>{description}</p>}
            </div>
        </QuestionStyled>
    )
}

const QuestionStyled = styled.div`
    width: 80%;
    background-color: #fff;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 24px;
    h4 {
        color: #16194F;
    }
    .toggle-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;
        button {
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            padding-left: 2rem;
        }
    }
    p{
        text-align: left;
        width: 100%;
        padding-right: 2rem;
        margin: 0;
    }
`

export default Question
