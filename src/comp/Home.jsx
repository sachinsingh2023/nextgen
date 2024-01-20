import React from 'react'
import Navbar from './Navbar'
import cr1 from "../img/cr-1.jpg"
import cr2 from "../img/cr-2.jpg"
import cr3 from "../img/cr-3.jpg"
import cr4 from "../img/cr-4.jpg"
import cr5 from "../img/cr-5.jpg"
import Card from './Card'
import Footer from './Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    };
    return (
        <>
            <Navbar />
            {/* //  craousel--------- */}

            <div className="carousel w-full ">

                <Slider {...settings}>
                    <div>
                        <img src={cr1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={cr2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={cr3} alt="Slide 3" />
                    </div>
                    <div>
                        <img src={cr4} alt="Slide 3" />
                    </div>  <div>
                        <img src={cr5} alt="Slide 3" />
                    </div>
                    {/* Add more slides as needed */}
                </Slider>

            </div>

            {/* ----------------------- */}
            <div className="countainer w-full justify-center flex p-2 max-[768px]:flex-col ">
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703921108/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/Jan/BAU/SAT%20-%20ICICI%20HSBC/HP_2Split_HSBC-ICICI_29Dec2023_lwgadv.png?tr=w-720" className='p-2 w-5/12 max-[768px]:w-full' alt="" />

                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703156673/Croma%20Assets/CMS/LP%20Page%20Banners/2023/More%20For%20Your%20Money/December/UPI%2C%20GST%2C%20Paytm%2C%20ZipCare%20Bank%20strip/ZipCare%20-%2028%20Nov%202023/ZipCare%201%20-%20EW/D_Zipcare_EW_21Dec23_cwfvid.png?tr=w-720" className=' p-2 w-5/12 max-[768px]:w-full' alt="" />
            </div>
            {/*Today top deals  */}
            <h1 className='text-center text-3xl pl-12' style={{ fontFamily: "serif" }}>Top Trending Deals</h1>
            <div className="topdeals flex justify-center flex-wrap">

                <Card
                    title="Apple iPad 9th Generation Wi-Fi (10.2 Inch, 64GB, Space Grey, 2021 model)"
                    price={"12399.00"}
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700218265/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264336_z6cs8b.png?tr=w-360"}
                    oldprice={"150000.00"} />
                <Card
                    title={"HP 15s-fq2672TU Intel Core i3 11th Gen (15.6 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021, Intel UHD, FHD Display, Natural Silver, 6N045PA#ACJ)"}
                    price={"34,390.00"}
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664418078/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257161_0_hvgepf.png?tr=w-360"}
                    oldprice={"52,788,00"} />

                <Card
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702980626/Croma%20Assets/Wearable/Wearable%20Devices/Images/302950_dwkkfx.png?tr=w-360"}
                    title={"noise ColorFit Caliber 3 Plus Smartwatch with Bluetooth Calling (49.7mm AMOLED Display, IP67 Water Resistant, Elite Black Strap)"}
                    oldprice={"7,999.00"}
                    price={"2,499.00"} />
                <Card
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698303183/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/302468_eb1k9v.png?tr=w-360"}
                    title={"Nothing Ear 2 TWS Earbuds with Active Noise Cancellation (IP54 Water Resistant, Fast Charging, White)"}
                    price={"7,999.00"}
                    oldprice={"12,999.00"} />

</div>
<div className=" image-container ">
<div class="flex w-full">

<img  className='w-6/12'src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1668170086/Croma%20Assets/CMS/HP_Highlights_E-Waste_11Nov2022_2_z19bgl.png?tr=w-480" alt="Image 1"/>
<img className='w-6/12' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691126309/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Deals%20Corner/HP_Highlight_DOTW_2Aug2023_2_mdna8l.jpg?tr=w-480" alt="Image 2"/>
<img  className='w-6/12'src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683800225/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/HP%20Bugs/HP_Highlights_EMIStore_22Feb2023_qvegoj.jpg?tr=w-720" alt="Image 3"/>
<img className='w-6/12' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701181979/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gifting%20Catalogue/29-11-2023/HP%20Highlights/HP_Highlights_WeddingAppliances_27Nov23_wc2qhh.jpg?tr=w-720" alt="Image 4"/>
<img className='w-6/12' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701503911/Croma%20Assets/CMS/Homepage%20Banners/Highlights/2023/02-12-2023/Croma_banner1_sleex7.png?tr=w-720" alt="Image 5"/>

</div>
</div>
           
            <Footer />
        </>


    )
}

export default Home