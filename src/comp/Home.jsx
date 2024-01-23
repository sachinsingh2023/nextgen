import React from 'react'
import Navbar from './Navbar'
import cr1 from "../img/cr-1.jpg"
import cr2 from "../img/cr-2.jpg"
import cr3 from "../img/cr-3.jpg"
import cr4 from "../img/cr-4.jpg"
import cr5 from "../img/cr-5.jpg"
import Card from './Card'
import Banner from "../img/banner1.png"
import Footer from './Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeightLi from './HeightLi'
import Top from './Top'
import Review from './Review'


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
            <h1 className='text-center text-3xl pl-12'>Top Trending Deals</h1>
            <div className="topdeals">

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
                <Card
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701788614/Croma%20Assets/Communication/Mobiles/Images/303173_y0fqxb.png?tr=w-360"}
                    title={"Redmi 13C 5G (8GB RAM, 256GB, Starlight Black)"}
                    price={"14,499.00"}
                    oldprice={"17,999.00"} />

            </div>
            <div className="banner1 w- full">
                              <img src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/206309/FOE-Microsite-Banner-06-10-2023-06-10-23-06-01-59.jpg" className='w-full max-h-72' alt="" />
            </div>
            <br />
            <h1 className='text-center mb-7 text-4xl pl-12' >Heightlight</h1>
            {/* heighlight--- */}
            <HeightLi />
            <br />
            {/* best seling deals */}
            <h1 className='text-center mb-7 text-4xl pl-12' >Best seling deals</h1>
            <Top />
            <br /><br />
            <div className="banner1 w- full">
                <img src={Banner} className='w-full max-h-72' alt="" />
              
            </div>
            <h1 className='text-center text-3xl pl-12'>Top Trending Deals</h1>
            <div className="topdeals">

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
                <Card
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701788614/Croma%20Assets/Communication/Mobiles/Images/303173_y0fqxb.png?tr=w-360"}
                    title={"Redmi 13C 5G (8GB RAM, 256GB, Starlight Black)"}
                    price={"14,499.00"}
                    oldprice={"17,999.00"} />

            </div>
            <div className="topdeals">

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
                <Card
                    image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701788614/Croma%20Assets/Communication/Mobiles/Images/303173_y0fqxb.png?tr=w-360"}
                    title={"Redmi 13C 5G (8GB RAM, 256GB, Starlight Black)"}
                    price={"14,499.00"}
                    oldprice={"17,999.00"} />

            </div>
            {/* crousel----last */}
            <div className="banner1 w- full">
                <img src="https://admin.oxygendigitalshop.com/pub/media/cache/1920x0/2024/JAN/T2/Vivo_Web%20banner-10_1704280635.webp" className='w-full max-h-72' alt="" />
              
            </div>
           
            <Footer />
        </>


    )
}

export default Home