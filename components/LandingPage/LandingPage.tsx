import React from 'react'
import Hero from './Hero'
import CountDown from './CountDown'
import Activity from './Activity'
import Partner from './Partner'
import SubHero from './SubHero'

const LandingPage = () => {
    return (
        <main>
            <Hero />
            <SubHero />
            <CountDown />
            <Activity />
            <Partner />
        </main>
    )
}

export default LandingPage
