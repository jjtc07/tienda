import Image from "next/image";
import { Karla } from 'next/font/google'
const karla = Karla({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-12 bg-red-200 flex justify-center align-middle text-center items-center">
        <a className="" href="/collections/sale">
          <span className="text-white text-center text-xs block">
            TAKE AN Extra 30% OFF SALE w/ code: EXTRA30
          </span>

          <span className="text-white text-center text-xs block">
            START SHOPPING
          </span>
        </a>
      </div>
      <div className="h-12 bg-white flex justify-between align-middle text-center items-center">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
              fill="#000000"
            ></path>
            <path
              d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
              fill="#000000"
            ></path>
            <path
              d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
              fill="#000000"
            ></path>
          </g>
        </svg>

        <h1 className="text-xl">DressUp</h1>

        {/*  */}
        <div className="flex" >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15 15L21 21"
              stroke="#323232"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#323232"
              strokeWidth="2"
            ></path>{" "}
          </g>
        </svg>

        <svg 
        width="25px"
        height="25px"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      </div>

      {/* <img src="https://shopdressup.com/cdn/shop/files/faith_main_hero_3024x.webp?v=1686146000" alt="web-banner" /> */}
      <img src="https://shopdressup.com/cdn/shop/files/faith_main_mobile_hero_1080x.webp?v=1686146001" alt="mobile-banner" />
      {/* <img src="https://shopdressup.com/cdn/shop/files/main_mobile_hero_6_9_23_2_1080x.webp?v=1686319606" alt="mobile-banner" /> */}
      {/* <img src="https://shopdressup.com/cdn/shop/files/rs_mobile_1080x.jpg?v=1686231790" alt="mobile-banner" /> */}

      <div className="py-3 px-5 text-center" style={{
        backgroundColor: 'rgba(216, 164, 142, 0.12)'
      }}>
        <div className="type-banner__text">
          <p className="h3">BUY ONLINE &amp; PICK UP IN STORE</p>
          <p>select “store pick up” at checkout + pick up same day!</p>
        </div>
      </div>

      <div className="text-center py-8">
        <div className={`${karla.className}`}>
          <h1>Women's Dress Boutique</h1>
        </div>
        
        <div className="mt-5">
          <div className="">
            <p className={`${karla.className} text-xs px-[17px] leading-4 text-[#212121] tracking-wider`} >
              At Dress Up, we are the best online and in-store clothing boutique for trendy, affordable fashion! With weekly new arrivals, we can ensure that you will always have the most up-to-date, cutest styles to shop! Whether online shopping for dresses or visiting us in-store, find the perfect outfit that can you take from day to night. Look and feel your best with Dress Up - your #1 online dress boutique that delivers affordable apparel and new arrivals every week!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4">
        <div className="flex justify-center items-center">
          <img src="https://shopdressup.com/cdn/shop/collections/722FC89A-6C91-4D4A-9135-4BEDE78B1E4D_540x.png?v=1685199197" alt="category" />
          <span className="absolute text-white text-xs tracking-widest">ALL NEW</span>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://shopdressup.com/cdn/shop/collections/tops_540x.jpg?v=1685198776" alt="category" />
          <span className="absolute text-white text-xs tracking-widest">SPRING TOPS</span>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://shopdressup.com/cdn/shop/collections/1.27_dresses_540x.jpg?v=1685199158" alt="category" />
          <span className="absolute text-white text-xs tracking-widest">NEW DRESSES</span>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://shopdressup.com/cdn/shop/collections/4_540x.jpg?v=1685199375" alt="category" />
          <span className="absolute text-white text-xs tracking-widest">SPRING BOTTOMS</span>
        </div>
      </div>

      <div className="text-center">
        <div className={`${karla.className} tracking-widest py-8 px-4`}>
          <h2>Get the Cutest Dresses Online at Dress Up</h2>
        </div>

        <div className="h-96 relative flex justify-start items-center">
          <img 
            src="https://shopdressup.com/cdn/shop/files/new_in_red_white_blue_1080x.webp?v=1685197216" 
            alt="banner" 
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
          />

          <div className="absolute w-[100%] h-[100%] bg-[#21212133]"></div>

          <div className="absolute left-4 text-left">
            <div className="">
              <div className={`${karla.className} tracking-widest text-white mb-2 text-xl`}>
                RED, WHITE + NEW
              </div>
            
              <a 
                className={`${karla.className} tracking-widest text-white border-2 py-1 px-2 border-white rounded`}
                href="https://shopdressup.com/collections/all-clothing?filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.color=Blue&amp;filter.v.option.color=Cream&amp;filter.v.option.color=Denim&amp;filter.v.option.color=Ivory&amp;filter.v.option.color=Light+Blue&amp;filter.v.option.color=Light+Wash&amp;filter.v.option.color=Medium+Wash&amp;filter.v.option.color=Navy&amp;filter.v.option.color=Off+White&amp;filter.v.option.color=Red&amp;filter.v.option.color=Royal+Blue&amp;filter.v.option.color=White"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8 px-4">
        <div className={`${karla.className}`}>
          <h2 className="tracking-wider">Trendy Clothing & Accessories at Dress Up - An Online Dress Boutique</h2>
        </div>
        
        <div className="mt-5">
          <p className={`${karla.className} text-xs leading-4 text-[#212121] tracking-wider`} >
            Explore our stylish clothing and boutique dresses online. We have outfits and fabrics for every season and occasion. Dress Up is a women's clothing store with new trendy and affordable arrivals dropping 2-3 times weekly. If you’re online shopping for dresses and the latest trends check out our women's fashionable 
          </p>
        </div>
      </div>

      <footer className="h-96 bg-[#212121] flex text-center justify-center">
        <a href="" className="text-center mt-5">
          <img style={{width: 164}} src="https://shopdressup.com/cdn/shop/files/DU-White-Logo_x46@2x.png?v=1631291423" alt="logo" className="text-center" />
        </a>
      </footer>
    </main>
  );
}
