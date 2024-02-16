import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Video from "../assets/india1.mp4";
import p1 from '../assets/1.jpg';
import p2 from '../assets/2.jpg';
import p3 from '../assets/3.jpg';
import p4 from '../assets/4.avif';
import p5 from '../assets/5.jpg';
import p6 from '../assets/6.avif';
import p7 from '../assets/7.avif';
import p8 from '../assets/8.avif';
import east from '../assets/east.jpg';
import west from '../assets/west.jpg';
import north from '../assets/north.jpg';
import central from '../assets/centra.jpg';
import south from '../assets/south.jpg';
import ne from '../assets/nortwestern.jpg'
import Last from '../components/Last';
import { Link } from 'react-router-dom';
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[80px]">
      <div className=" w-[] h-[] bg-orange-100">
        <video
          controls
          autostart
          autoPlay
          src={Video}
          type="india.mp4"
          className=" -mt-24 ml-[25px] w-[1460px] h-[600px]"
        />
      </div>

      <div className="w-[1500px] h-[500px] border-4 bg-red-200 ">
        <div>
          <p className="mt-4 ml-8 font-bold text-[32px]">
            Popular places to visit in India
          </p>
        </div>

        <div className=" mt-4">
          <Carousel responsive={responsive}>
            <Link to="./mysore">
              <div className="border-4 w-[300px] h-[350px] ml-[50px] rounded-3xl">
                <div className="relative">
                  <img
                    src={p1}
                    className="h-[300px] w-[300px] rounded-3xl"
                  ></img>
                </div>
                <div className="absolute ml-[120px] text-black mt-3">
                  <p className="text-[16px] text-lg font-bold">Mysore</p>
                </div>
              </div>
            </Link>

            <Link to="/agra">
              <div className="border-4 w-[300px] h-[350px] ml-[100px] rounded-3xl">
                <div className="relative">
                  <img
                    src={p2}
                    className="h-[300px] w-[300px] rounded-3xl"
                  ></img>
                </div>
                <div className="absolute ml-[120px] text-black mt-3">
                  <p className="text-[16px] text-lg font-bold">Agra</p>
                </div>
              </div>
            </Link>

            <Link to="./goa">
              <div className="border-4 w-[300px] h-[350px] ml-[150px] rounded-3xl">
                <div className="relative">
                  <img
                    src={p3}
                    className="h-[300px] w-[300px] rounded-3xl"
                  ></img>
                </div>
                <div className="absolute ml-[120px] text-black mt-3">
                  <p className="text-[16px] text-lg font-bold">Goa</p>
                </div>
              </div>
            </Link>

            <div className="border-4 w-[300px] h-[350px] ml-[200px] rounded-3xl">
              <div className="relative">
                <img src={p4} className="h-[300px] w-[300px] rounded-3xl"></img>
              </div>
              <div className="absolute ml-[120px] text-black mt-3">
                <p className="text-[16px] text-lg font-bold">jaipur</p>
              </div>
            </div>

            <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
              <div className="relative">
                <img src={p5} className="h-[300px] w-[300px] rounded-3xl"></img>
              </div>
              <div className="absolute ml-[120px] text-black mt-3">
                <p className="text-[16px] text-lg font-bold">Ooty</p>
              </div>
            </div>

            <Link to="./kashmir">
              <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
                <div className="relative">
                  <img
                    src={p6}
                    className="h-[300px] w-[300px] rounded-3xl"
                  ></img>
                </div>
                <div className="absolute ml-[120px] text-black mt-3">
                  <p className="text-[16px] text-lg font-bold">Kashmir</p>
                </div>
              </div>
            </Link>

            <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
              <div className="relative">
                <img src={p7} className="h-[300px] w-[300px] rounded-3xl"></img>
              </div>
              <div className="absolute ml-[120px] text-black mt-3">
                <p className="text-[16px] text-lg font-bold">Varanasi</p>
              </div>
            </div>

            <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
              <div className="relative">
                <img src={p8} className="h-[300px] w-[300px] rounded-3xl"></img>
              </div>
              <div className="absolute ml-[120px] text-black mt-3">
                <p className="text-[16px] text-lg font-bold">
                  Himachal Pradesh
                </p>
              </div>
            </div>

            <div className="border-4 w-[300px] h-[350px] ml-[190px] rounded-3xl">
              <div className="relative">
                <img src={p8} className="h-[300px] w-[300px] rounded-3xl"></img>
              </div>
              <div className="absolute ml-[120px] text-black mt-3">
                <p className="text-[16px] text-lg font-bold"></p>
              </div>
            </div>
          </Carousel>
          <Link to="./discover">
            <button className="border-4 rounded-full shadow-sm p-2 bg-blue-500 h-[40px] w-[160px] ml-[650px] mt-4 text-white text-[16px] font-bold text-center hover:bg-orange-300 hover:text-black">
              Where to set off
            </button>
          </Link>
        </div>
      </div>

      <div className="h-[400px] w-[1500px] flex flex-col">
        <div className="mt-[12px] ml-[20px] font-bold text-[32px]">
          <p>Regions in India</p>
        </div>
        <div className="flex gap-[150px]">
          <div className="ml-[190px] border-4 py-4 px-4 mt-6">
            <img src={east} className="h-[300px] w-[400px]"></img>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <div className="text-[28px] font-bold">
              <p>East</p>
            </div>
            <div className="w-[550px]">
              <p>
                Discover the enchanting Eastern India, where vibrant culture
                meets stunning landscapes. From the lush greenery of the
                Sundarbans to the spiritual aura of Puri, embark on a journey
                that's as diverse as it is captivating
              </p>
            </div>
            <div className="text-[20px] font-bold">
              <p>States</p>
            </div>
            <div className="flex gap-[10px] text-white font-bold">
              <div className="border-4 rounded-full shadow-sm p-2 bg-red-500">
                Andaman & Nicobar
              </div>
              <div className="border-4 shadow-sm rounded-full p-2  bg-orange-500">
                Bihar
              </div>
              <div className="border-4 shadow-sm rounded-full p-2  bg-blue-500 ">
                Jharkhand
              </div>
              <div className="border-4 shadow-sm rounded-full p-2  bg-yellow-500">
                Odisha
              </div>
              <div className="border-4 shadow-sm rounded-full p-2  bg-pink-500">
                West Bengal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[1500px] flex ">
        <div className="flex flex-col gap-3 mt-16 ml-32">
          <div className="text-[28px] font-bold">
            <p>West</p>
          </div>
          <div className="w-[550px]">
            <p>
              Experience the timeless charm of Western India, where ancient
              traditions blend seamlessly with modern marvels. From the bustling
              streets of Mumbai to the serene beauty of Goa's beaches, it's a
              region that celebrates both history and hedonism
            </p>
          </div>
          <div className="text-[20px] font-bold">
            <p>States</p>
          </div>
          <div className="flex gap-[10px] text-white font-bold">
            <div className="border-4 rounded-full shadow-sm p-2 bg-red-500">
              Dadra And Nagar Haveli
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-orange-500">
              Daman And Diu
            </div>
            <Link to="/goa">
              <div className="border-4 shadow-sm rounded-full p-2  bg-blue-500 ">
                Goa
              </div>
            </Link>

            <div className="border-4 shadow-sm rounded-full p-2  bg-yellow-500">
              Gujrat
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-pink-500">
              Maharashtra
            </div>
          </div>
        </div>
        <div className="ml-[190px] border-4 py-4 px-4 mt-16">
          <img src={west} className="h-[400px] w-[400px]"></img>
        </div>
      </div>

      <div className="flex gap-[190px] mt-12 -ml-12">
        <div className="ml-[190px] border-4 py-4 px-4 mt-6">
          <img src={north} className="h-[300px] w-[400px]"></img>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <div className="text-[28px] font-bold">
            <p>North</p>
          </div>
          <div className="w-[550px]">
            <p>
              Explore the majestic Northern India, where the Himalayan peaks
              touch the sky and the echoes of history resonate through the
              Golden Triangle. From the spiritual haven of Varanasi to the royal
              allure of Rajasthan, it's a land of diverse wonders waiting to be
              uncovered
            </p>
          </div>
          <div className="text-[20px] font-bold">
            <p>States</p>
          </div>
          <div className="flex gap-[10px] text-white font-bold">
            <div className="border-4 rounded-full shadow-sm p-2 bg-red-500">
              Delhi
            </div>

            <Link to="./kashmir">
              <div className="border-4 shadow-sm rounded-full p-2  bg-orange-500">
                Kashmir
              </div>
            </Link>

            <div className="border-4 shadow-sm rounded-full p-2  bg-blue-500 ">
              Punjab
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-yellow-500">
              Rajasthan
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-pink-500">
              Uttar Pradesh
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-[1500px] flex ">
        <div className="flex flex-col gap-3 mt-16 ml-40">
          <div className="text-[28px] font-bold">
            <p>Central</p>
          </div>
          <div className="w-[550px]">
            <p>
              Journey through the heart of India, where the tapestry of
              cultures, wildlife sanctuaries, and timeless heritage converge.
              From the mystical temples of Khajuraho to the wild adventures of
              Kanha National Park, Central India is where the nation's soul
              truly thrives
            </p>
          </div>
          <div className="text-[20px] font-bold">
            <p>States</p>
          </div>
          <div className="flex gap-[10px] text-white font-bold">
            <div className="border-4 rounded-full shadow-sm p-2 bg-red-500">
              Chhatisgarh
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-orange-500">
              Madhya Pradesh
            </div>
          </div>
        </div>
        <div className="ml-[190px] border-4 py-4 px-4 mt-16">
          <img src={central} className="h-[400px] w-[400px]"></img>
        </div>
      </div>

      <div className="flex gap-[190px] mt-12 -ml-12">
        <div className="ml-[190px] border-4 py-4 px-4 mt-6">
          <img src={south} className="h-[300px] w-[400px]"></img>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <div className="text-[28px] font-bold">
            <p>South</p>
          </div>
          <div className="w-[550px]">
            <p>
              Immerse yourself in the vibrant tapestry of South India, where
              ancient traditions dance with modern dynamism. From the lush
              backwaters of Kerala to the intricate temples of Tamil Nadu, it's
              a region that whispers tales of history and promises unforgettable
              experiences
            </p>
          </div>
          <div className="text-[20px] font-bold">
            <p>States</p>
          </div>
          <div className="flex gap-[10px] text-white font-bold">
            <div className="border-4 rounded-full shadow-sm p-2 bg-red-500">
              Andra Pradesh
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-orange-500">
              Karnataka
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-blue-500 ">
              Kerela
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-yellow-500">
              Tamil Nadu
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-pink-500">
              Telengana
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-[1500px] flex ">
        <div className="flex flex-col gap-3 mt-16 ml-40">
          <div className="text-[28px] font-bold">
            <p>North-Eastern</p>
          </div>
          <div className="w-[550px]">
            <p>
              Journey through the heart of India, where the tapestry of
              cultures, wildlife sanctuaries, and timeless heritage converge.
              From the mystical temples of Khajuraho to the wild adventures of
              Kanha National Park, Central India is where the nation's soul
              truly thrives
            </p>
          </div>
          <div className="text-[20px] font-bold">
            <p>States</p>
          </div>
          <div className="flex gap-[10px] text-white font-bold">
            <div className="border-4 rounded-full shadow-sm p-2 bg-red-500">
              Arunachal Pradesh
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-orange-500">
              Manipur
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-blue-500">
              Meghalaya
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-yellow-500">
              Assam
            </div>
            <div className="border-4 shadow-sm rounded-full p-2  bg-pink-500">
              Tripura
            </div>
          </div>
        </div>
        <div className="ml-[190px] border-4 py-4 px-4 mt-3">
          <img src={ne} className="h-[400px] w-[400px]"></img>
        </div>
      </div>
      <div className="mt-8">
        <Last></Last>
      </div>
    </div>
  );
}

export default Home
