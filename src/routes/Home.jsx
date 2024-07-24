import React from 'react'
// import Hero from '../components/home/Hero'
import Hero from '../components/Hero'
import WorkSpace from '../components/home/WorkSpace'
import Leading from '../components/home/Leading'
// import Branch from '../components/home/Branch'
import Age from '../components/home/Age'
import Clients from '../components/home/Clients'
import Network from '../components/home/Network'

const Home = () => {
  return (
    <>
      <Hero type='home' />
      <WorkSpace />
      <Leading />
      {/* <Branch /> */}
      <Age />
      <Clients />
      <Network />
    </>
  )
}

export default Home
