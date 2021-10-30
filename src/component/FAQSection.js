import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'
import lines from '../img/lines.svg'
import question from '../question'
import Question from './Question'

function FAQSection() {
    return (
        <FAQSectionStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="small-subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem ipsum dolor sit amet, consectetur adipiscing ut venenatis lorem ut venenatis lorem ipsum
                </p>
                <div className="line">
                    <img src={lines} />
                </div>
                <div className="question-container">
                    {
                        question.map((q) => (
                            <Question key={q.id} {...q} />
                        ))
                    }
                </div>
            </InnerLayout>
        </FAQSectionStyled>
    )
}

const FAQSectionStyled = styled.section`
    .small-subheading{
        text-align: center;
        width: 60%;
        margin: 0 auto 2rem;
    }
    .line {
        position: absolute;
        top: 288%;
        left: 0;
        width: 100%;
        z-index: -1;
        img {
            width: 100%;
        }
    }
`

export default FAQSection
