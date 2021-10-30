import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'
import ChartStatas from './ChartStatas'
import chart from '../img/chart.svg'
import AnimateButton from './AnimateButton'

function ChartSection() {
    return (
        <ChartSectionStyled>
            <InnerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                                <div className="stats-money">
                                    <ChartStatas name={'Balance'} amount={'$250'} />
                                    <ChartStatas name={'Last transaction'} amount={'$1000'} />
                                </div>
                                <im alt="" src={chart} />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro in no time
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit Curabitur ut venenatis lorem.
                        </p>
                        <AnimateButton name={'Learn more'} />
                    </div>
                </div>
            </InnerLayout>
        </ChartSectionStyled>
    )
}

const ChartSectionStyled = styled.section`
    .chart-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr)
    }
    .stats-money {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:70%;
    }
    .stats {
        img {
            width: 70%;
        }
    }
    .chart-right {
        h2 {
            font-size: 3rem;
            font-weight: 700;
        }
        p {
            padding: 1.4rem 0;
        }
    }
`

export default ChartSection
