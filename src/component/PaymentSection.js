import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'
import Card from './Card'
import card from '../img/creditcard.svg'
import active from '../img/active.svg'
import inactive from '../img/inactive.svg'
import check from '../img/check.svg'
import checkDisable from '../img/check-disabled.svg'

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">An exceptional service, at the right price <span>at the right price</span></h3>
                <p>Start with our free plan and switch to premium as you grow</p>
                <div className="card-container">
                    <Card 
                        account={'Free'}
                        amount={'$0'}
                        text={'Manage your  business with a simple and effecient account.'}
                        button={'Get started'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDisable={checkDisable}
                        text1={'10 free local transfers'}
                        text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                        text3={'Free payments to other Draft accounts'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                    <Card 
                        account={'Premium'}
                        amount={'$10'}
                        text={'Manage your  business with a simple and effecient account.'}
                        button={'Get started'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDisable={checkDisable}
                        text1={'10 free local transfers'}
                        text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                        text3={'Free payments to other Draft accounts'}
                        text4={'Prepaid debit cards'}
                        text5={'Virtual cards'}
                        text6={'Priority 24/7 support'}
                        text7={'Exchange 24 currencies'}
                        text8={'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    p {
        color: #aaa;
        margin-bottom: 4rem;
        text-align: center;
    }
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export default PaymentSection
