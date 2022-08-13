import React from 'react'
import Slide from './Slide';
import Header from './Common/Header/Header';

import Cards from './Cards';
import Footer from './Common/Footer/Footer';

function Main() {
  return (
    <div>
        <Header/>
       <Slide/>
       
        <Cards/>
        {/* <Banner/> */}
        <Footer/>
    </div>
  )
}

export default Main