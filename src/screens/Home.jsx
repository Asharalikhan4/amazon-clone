import React from 'react';
import './Home.css';
import Product from '../components/Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt='Banner' />
                <div className='home_row'>
                    <Product
                     title='The lean startup'
                     price={29.99}
                     image='https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY436_FMwebp_QL65_.jpg' alt='book'
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
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='home_row'>
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;