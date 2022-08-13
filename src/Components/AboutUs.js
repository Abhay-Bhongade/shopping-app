import React from 'react'
import Footer from './Common/Footer/Footer';

function AboutUs() {
  return (
    <>
    <div className='container'>
        <div className='row'>
        <div className="col-lg-12 col-md-12 mb-4 mb-lg-0">
               <h4 style={{display:'flex', justifyContent:'center', marginTop:'8rem'}}>ABOUT US</h4>
               <div style={{display:'flex', justifyContent:'center', textAlign:'center', margin:'4rem', fontStyle:'italic', backgroundColor:'#dfe4ea', borderRadius:'10px', lineHeight:'30px'}}> Based in Chennai, AMYRA is a brand that grew out of a fascination for Indian textiles and an eagerness to convert them into tastefully designed functional fashion accessories.

Meticulously handcrafted, our range of formal clutch purses, potlis, wallets, slings and tote bags are a testament to the virtuosity of our local artisans and their passion to bring into being our design concepts that are an amalgamation of traditional fabric and modern form. </div>
<h4 style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>HOW IT ALL STARTED</h4>
<div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
  <img src="https://cdn.shopify.com/s/files/1/2763/5358/files/20200712_141654-01_480x480.jpg?v=1594700020" />
</div>
               <div style={{display:'flex', justifyContent:'center', textAlign:'center', margin:'4rem'}}>In 2014, Priyanka our creative head started experimenting with making fabric bags at her parents' garment manufacturing factory. After receiving great feedback on the first collection, she decided to launch the label - AMYRA meaning 'of or belonging to a princess'. What followed was 4 years of researching the market, working with numerous clients, understanding their requirements & design flavor and suiting designs to their need. This culminated into a niche product line of stunning fabric bags, designed with love and passion to break the creative boundaries, so our beautiful clients can carry a product that is luxurious in every form and complements their look.

The AMYRA Store was launched back in Aug’18 to take this venture global. </div>
        </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default AboutUs