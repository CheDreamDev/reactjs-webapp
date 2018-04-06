import React from 'react'

import Header from '../common/Header/Header'
import Info from './Info/Info'
import Assistants from './Assistants/Assistants'
import NewDreams from './NewDreams/NewDreams'
import AlmostDoneDreams from './AlmostDoneDreams/AlmostDoneDreams'
import Categories from './Categories/Categories'
import City from './City/City'
import FaqDreams from './FaqDreams/FaqDreams'
import Testimonials from './Testimonials/Testimonials'
import Subscribe from './Subscribe/Subscribe'
import AddDream from './AddDream/AddDream'
import Footer from '../common/Footer/Footer'

const Home = () => (
  <div>
    <Header />
    <Info />
    <Assistants />
    <NewDreams />
    <Categories />
    <AlmostDoneDreams />
    <City />
    <FaqDreams />
    <Testimonials />
    <Subscribe />
    <AddDream />
    <Footer />
  </div>
)

export default Home
