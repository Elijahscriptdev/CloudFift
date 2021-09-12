import React from 'react'
import Categories from '../../components/categories/Categories'
import Hero from '../../components/hero/Hero'
import HowItWorks from '../../components/how-it-works/HowItWorks'
import Jobs from '../../components/jobs/Jobs'
import Network from '../../components/network/Network'
import './Homepage.scss'

const HomePage = () => {
    return (
        <div className='Home__wrapper'>
            <Hero />
            <Jobs />
            <HowItWorks />
            <Categories />
            <Network />
        </div>
    )
}

export default HomePage
