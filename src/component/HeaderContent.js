import React from 'react'
import styled from 'styled-components'
import SecondaryButtonStyled from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'


function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Smart banking for freelancers</h1>
                    <p className="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem.
                    </p>
                    <SecondaryButtonStyled name={'Register Now'}/>
                </div>
            </div>
            <div className="right-content">
                <img src={phone} className="phone"/>
                <img className="ring1" src={ring1} />
                <img className="message1" src={message1} />
                <img className="message2" src={message2} />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .left-content {
        display: flex;
        align-items: center;
        h1 {
            font-size: 2.4rem;
            font-weight: 600;
        }
        .white {
            padding: 1.4rem 0;
        }
    }

    .right-content {
        position: relative;
        img {
            height: 90%;
        }
        .ring1 {
            position: absolute;
            bottom: -10%;
            right: 0;
            left: auto;
            width: 100px;
            animation: move 3s infinite;
            transition: all .4s ease-in-out;
        }
        .message1 {
            position: absolute;
            top: -32%;
            right: 0;
            left: auto;
            width: 150px;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2 {
            position: absolute;
            bottom: -10%;
            right: auto;
            left: -10%;
            width: 120px;
            animation: move 8s infinite;
            transition: all .4s ease-in-out;
        }
    }

    .message1 {
        @keyframes move {
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50% {
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100% {
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }
    }

`

export default HeaderContent
