import React from 'react'
import { HeroSection, SearchDoctor, Image, AppointmentInfo } from '../components'
import { Link } from 'react-router-dom'
import AnimationWrapper from '../components/AnimationWrapper'

const Home = () => {


  return (
    <AnimationWrapper>
      <section>
        {/* hero section  */}
        <HeroSection />

        {/* doctor search or get by tags */}
        <SearchDoctor />

        {/* popular doctors  */}
{/* 
        <div>
          popular doctors doctors
        </div> */}


        {/* recents doctors */}

        {/* <div>
          recently appointed doctors
        </div> */}

        <AppointmentInfo/>


        {/* doctor view section */}
        {/* <div className=' min-h-[calc(100vh-80px)] flex flex-col justify-center md:justify-start px-3 sm:px-8 md:px-16 lg:px-32 mt-12 md:mt-20'>
        <h1 className='text-xl  text-slate-700 md:text-3xl tracking-wide font-bold my-8 mx-4'>Most Searched <span className='text-blue-700'>Doctors</span></h1>

        <section className='flex border-[1px] border-slate-200 bg-slate-100 rounded-lg flex-wrap justify-center mb-10 py-2 h-[400px] w-full overflow-auto md:justify-start items-center' style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (

            // doctor card
            <div key={idx} className='border-[1px] w-52 m-2 lg:m-4 rounded-lg p-3
        cursor-pointer hover:border-primary bg-white bg-opacity-50
        shadow-lg transition-all ease-in-out'
            >
              <Image />
              <div className='mt-3 items-baseline flex flex-col gap-1'>
                <div className='flex gap-3 items-center justify-center'>
                  <h2 className='text-[10px] bg-blue-100 p-1 font-medium rounded-full
                px-2 text-primary'>Neurologist</h2>
                  <h2 className='text-[10px] bg-blue-100 font-medium p-1 rounded-full
                px-2 text-primary'>20 years</h2>
                </div>
                <h2 className='font-bold'>Dr. Rohan Mishra</h2>
                <h2 className='text-gray-500 w-40 text-wrap text-xs'>316B pocket C delhi,pincode-110091</h2>
                <Link href={'/'} className='w-full'>
                  <h2 className='p-2 px-3 border-[1px] border-primary
                text-primary rounded-full w-full text-center
                text-[11px] mt-2
                cursor-pointer 
                text-white 
                bg-blue-700 hover:bg-blue-500'>Book Now</h2>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div> */}

      </section>

    </AnimationWrapper>
  )
}

export default Home


// {/* review card */}

// <div className=" flex justify-center items-center p-10">
//         <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5  text-slate-700">
//           <h1 className="py-5 text-lg">Reviews</h1>
//           <div className="flex flex-col gap-4 bg-slate-300 p-4">
//             {/* Profile and Rating */}
//             <div className="flex justify-between">
//               <div className="flex gap-2">
//                 <div className="w-7 h-7 text-center rounded-full bg-yellow-500">A</div>
//                 <span>Alice Banks</span>
//               </div>
//               <div className="flex p-1 gap-1 text-orange-300">
//                 {/* <IonIcon icon={star} />
//                     <IonIcon icon={star} />
//                     <IonIcon icon={star} />
//                     <IonIcon icon={star} />
//                     <IonIcon icon={star} /> */}
//               </div>
//             </div>

//             <div>
//               The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
//             </div>

//             <div className="flex justify-between">
//               <span>Feb 13, 2021</span>
//               <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
//                 {/* <IonIcon icon={shareOutline} />  */}
//                 Share
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>