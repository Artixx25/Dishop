import React from 'react'
import { client } from '../lib/client'
import { Product, Footer, HeroBanner, FooterBanner, Cart, Layout, Navbar } from '../components';

const Home = ({ products, bannerData }) => (
    <>
      <HeroBanner heroData={bannerData.length && bannerData[0]} />
      <div  className='products-heading'>
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map(product => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerData={bannerData && bannerData[1]}/>
    </>
  )

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery)

    return {
      props: { products, bannerData }
    }
  }

export default Home;