import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import messaging from '../img/conversation.svg'
import btnCircle from '../img/circleBg.svg'

function MessagingSection() {
    return (
        <MessageStyled>
            <InnerLayout>
                <div className="message-container">
                    <div className="left-item">
                        <h2 className="secondary-heading">
                            We support you in 5 different languages
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="img-container">
                            <img alt=""src={avatar1} className="img-1"/>
                            <img alt=""src={avatar2} className="img-2"/>
                            <img alt=""src={avatar3} className="img-3"/>
                            <img alt=""src={avatar4} className="img-4"/>
                            <img alt=""src={avatar5} className="img-5"/>
                            <p>+25</p>
                        </div>
                        <img alt=""src={btnCircle} className="right-circles"/>
                    </div>
                    <div className="right-item">
                        <img alt=""src={messaging} className="img-mess"/>
                        <img alt=""src={btnCircle} className="img-circles"/>
                    </div>
                </div>
            </InnerLayout>
        </MessageStyled>
    )
}

const MessageStyled = styled.section`
    .message-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr)
    }
    .left-item {
        margin-left: 10%;
        position: relative;
        h2 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 2rem;
        }
    }
    .right-circles {
        position: absolute;
        top: -10%;
        left: -10%;
    }
    .img-container {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        p {
            margin-left: 0.8rem;
        }
    }
    .img-2, .img-3, .img-4, .img-5 {
        margin-left: -1rem;
    }
    .right-item {
        position: relative;
        .img-mess {
            height: 90%;
        }
        .img-circles {
            position: absolute;
            bottom: 0;
            right: 20%;
            z-index: -1;
        }
    }
`

export default MessagingSection
