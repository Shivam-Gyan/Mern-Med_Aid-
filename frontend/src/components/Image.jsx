import React from 'react'

const Image = ({src,classname=false}) => {
    return (
        <div className='p-2 rounded-md overflow-hidden'>
            <img src={src?src:"https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="}
                alt='doctor Pic'
                className={classname?classname:'h-[150px] object-center w-full  rounded-lg'}
            />
        </div>
    )
}

export default Image