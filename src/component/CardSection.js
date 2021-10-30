import React from 'react'
import styled from 'styled-components'
import card from '../img/creditcard.svg'
import {InnerLayout} from '../styles/Layouts'

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all your payments
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. consectetur adipiscing elit. Curabitur ut venenatis lorem.
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    color: var(--lavender-secondary);
    .secondary-heading {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr) 
    }
    .card-right {
        display: flex;
        justify-content: flex-end;
        img {
            width: 70%;
        }
    }  
`

export default CardSection
