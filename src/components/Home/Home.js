import React from 'react'

import Header from '../common/Header/Header'
import Info from './Info/Info'
import Assistants from './Assistants/Assistants'
import NewDreams from './NewDreams/NewDreams'
import StepToDream from './StepToDream/StepToDream'
import Categories from './Categories/Categories'
import DreamsСity from './DreamsСity/DreamsСity'
import City from './City/City'
import BestDreams from './BestDreams/BestDreams'
import Testimonials from './Testimonials/Testimonials'
import AddDream from './AddDream/AddDream'
import Footer from '../common/Footer/Footer'

const Home = () => (
  <div>
    <Header />
    <Info />
    <Assistants />
    <NewDreams />
    <StepToDream />
    <Categories />
    <DreamsСity />
    <City />
    <BestDreams />
    <Testimonials />
    <AddDream />
    <Footer />
  </div>
)

export default Home
