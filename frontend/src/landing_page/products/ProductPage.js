import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
          <Hero/>
          {/* we pass inputs like attributes and their values */}
          <LeftSection
            imageURL="media/images/kite.png"
            productName="Dashboard"
            productDescription="Our flagship trading dashboard with live holdings, positions, and order management. Every trade is backed by an account you actually control, secured with JWT authentication."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
          />
          <RightSection
            imageURL="media/images/console.png"
            productName="Insights"
            productDescription="Stop guessing why your portfolio moved. Insights uses AI to explain your P&L, top performers, and concentration risk in plain English — something no traditional broker offers."
          />
            <LeftSection
            imageURL="media/images/coin.png"
            productName="Pulse"
            productDescription="Real-time, AI-generated explanations for why any stock is moving, pulled from live news and summarized instantly. No more tab-switching to Google mid-trade."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
          />
          <RightSection
            imageURL="media/images/kiteconnect.png"
            productName="LucidTrade API"
            productDescription="A simple HTTP/JSON API to build on top of LucidTrade's data and AI insights. Currently in development — reach out if you'd like early access."
            learnMore=""
          />
            <LeftSection
            imageURL="media/images/varsity.png"
            productName="Academy"
            productDescription="Bite-sized lessons on trading fundamentals and how to read AI-generated portfolio insights effectively. Coming soon."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
          />
          <Universe/>
        </>
     );
}

export default ProductPage;