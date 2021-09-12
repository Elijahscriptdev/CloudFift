import React from 'react'
import Hero from '../../components/hero/Hero'
import HowItWorks from '../../components/how-it-works/HowItWorks'
import Jobs from '../../components/jobs/Jobs'
import './Homepage.scss'

const HomePage = () => {
    return (
        <div className='Home__wrapper'>
            <Hero />
            <Jobs />
            <HowItWorks />
        </div>
    )
}

export default HomePage
