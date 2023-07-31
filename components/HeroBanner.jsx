import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroData }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroData.smallText}</p>
        <h3>{heroData.midText}</h3>
        <h1>{heroData.largeText1}</h1>
        <img src={urlFor(heroData.image)} alt="" className='hero-banner-image' />

        <div>
          <Link href={`/product/${heroData.product}`}>
            <button type='button'>{heroData.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner