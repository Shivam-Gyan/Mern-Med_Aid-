import appointment_img from '../Assets/appointment_img.png'

const ShortDoctorCard=()=>{


    return (

        <>

            <div className=" border-gray-400 h-[300px] w-[200px] border rounded-md  flex flex-col">

                <div className='bg-primary/20'>
                    <img src={appointment_img} alt="" />
                </div>

                <div className="flex p-4 flex-col items-start justify-center">
                    <p className={`text-green-500 text-sm`}>available</p>
                    <p className="text-md text-gray-700 font-normal">Dr.Doctor Name</p>
                    <p className="">department</p>
                </div>

            </div>

        </>
    )
}

export default ShortDoctorCard;