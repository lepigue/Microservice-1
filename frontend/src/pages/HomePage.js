import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function HomePage() {
    // Use the history for updating

    const history = useHistory();

    
    return (
        <>
            <div>
            <p>“Here at Plasticless we are determined to decrease carbon - monoxide footprint by endorsing and advertising products that contain no plastic. We want to promote use of those products to minimize the amount of plastic in circulation which is taking its toll on our environment.”</p>
            </div>
            <img className="home-page-image" src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2021/06/04-90640931-see-the-horrifying-place-where-your-old-clothes.jpg" alt="store-image"/>
        </>
    );
}

export default HomePage;