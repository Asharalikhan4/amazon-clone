import React from 'react';
import './Home.css';
import Product from '../components/Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' alt='Banner' />
                <div className='home_row'>
                    <Product
                     title='Shelf Liner for Kitchen Cabinets, Non-Adhesive Drawer Liner,Refrigerator Liners, Reusable Cabinet Liner Drawer Mat Moisture-Proof Dust Anti-Slip Kitchen Table Pad (17.7 x47.2in, Bubble Ball)'
                     price={807.25}
                     image='https://m.media-amazon.com/images/I/61Oahg-xDqL._AC_SX679_.jpg' alt='book'
                     rating={3}
                     />
                    <Product 
                        title='Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={239.0}
                        image='https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638771870/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/246001_omiawf.png/mxw_2256,f_auto' alt='Mixer'
                        rating={4}
                    />
                </div>
                <div className='home_row'>
                    <Product 
                        title='Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black'
                        price={22464.12}
                        image='https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg'
                        rating={5}
                    />
                    <Product 
                        title='HIFIMAN Arya Stealth Magnet Version Full-Size Over-Ear Planar Magnetic Headphone for Audiophiles/Studio'
                        price={104967.21}
                        image='https://m.media-amazon.com/images/I/71lKmUUztfL._AC_SX679_.jpg'
                        rating={3}
                    />
                    <Product 
                        title='Sennheiser HD 560 S Over-The-Ear Audiophile Headphones - Neutral Frequency Response, E.A.R. Technology for Wide Sound Field, Open-Back Earcups, Detachable Cable, (Black) (HD 560S)'
                        price={13932.60}
                        image='https://m.media-amazon.com/images/I/8182xOzfS2L._AC_SX679_.jpg'
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product 
                        title='WalkingPad Under Desk Treadmill, Smart Folding Treadmill with Adaptive Speed Technology, Maintains Preferred Pace, Foldable Treadmill for Home and Office, Stores Away Easily, A1Pro Black'
                        price={44442.59}
                        image='https://m.media-amazon.com/images/I/61G+P0QOVpL._AC_SX679_.jpg'
                        rating={3}

                    />
                </div>
            </div>
        </div>
    );
}

export default Home;