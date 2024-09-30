import React, { useContext, useState } from 'react'
import AnimationWrapper from '../components/AnimationWrapper.jsx'
import { toast } from 'react-hot-toast'
import InputBox from '../components/InputBox.jsx'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { RequestService } from '../database/db.requests.js'
import { UserContext } from '../App.jsx'


var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

const AuthForm = ({ type }) => {

  const {user,user:{email},setUser}=useContext(UserContext);

  const navigate=useNavigate()

  const [genderPanel, setGenderPanel] = useState(false)
  const [gender, setGender] = useState("")

  const handleRequest = async (formData) => {

    if(type=='sign-in'){
      await RequestService.login({...formData,role:"Patient"})
      .then((data) => {
       if(data.success!=false){
         setUser(data.user)
         toast.success(data.message)
         navigate('/')
        }else{
          setUser({email:null})
        }
      }).catch((err) => {
        toast.error(err.message)
      })

    }else{
      await RequestService.register({...formData,gender,role:"Patient"})
      .then((data) => {
        if(data.success!=false){
          setUser(data.user)
          toast.success(data.message)
          navigate('/')
         }else{
           setUser({email:null})
         }
       }).catch((err) => {
         toast.error(err.message)
       })
    }

    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let formData = {}
    const form = new FormData(fromElement)
    for (let [key, value] of form.entries()) {
      formData[key] = value
    }


    const {phone, name, email, password } = formData;

    if (!email || !password) {
      return toast.error("please fill the complete form")
    }

    if (name) {
      if (name.length < 3) {
        return toast.error("fullname must be atleast 3 letter long", 403)
      }
    }

    if (!email.length) {
      return toast.error("please enter an email", 403)
    }
    if (!emailRegex.test(email)) {
      return toast.error("invalid email", 403)
    }
    if (!passwordRegex.test(password)) {
      return toast.error("password should be 6 to 20 character long with a numeric,1 lowercase and 1 uppercase", 403)
    }
    
    // calling server handling function
    handleRequest(formData);
  }



  return (
    <>
    
    {
      !email?<AnimationWrapper>
      <Navbar />
      <section className=" flex items-center justify-center">
        <form id="fromElement" className="w-[80%] max-w-[400px]" onSubmit={handleSubmit}>
          <h1
            className="text-3xl capitalize font-gelasio font-medium text-primary text-center my-8 md:my-16">
            {type == "sign-in" ? "welcome back" : "Join us today"}
          </h1>

          {/* for user signup show full name input field */}

          {
            type != "sign-in" &&
            <InputBox
              name="name"
              type="text"
              placeholder="full name"
              icon="fi-rr-user"
            />
          }

          <InputBox
            name="email"
            type="email"
            placeholder="email"
            icon="fi-rr-envelope"
          />
          <InputBox
            name="password"
            type="password"
            placeholder="password"
            icon="fi-rr-key"
          />

          {
            type != 'sign-in' &&

            <div className="my-4 relative input-box">

              <div onClick={() => setGenderPanel(prev => !prev)} onBlur={()=>setGenderPanel(prev=>!prev)} className='flex justify-between'>
                <p>{gender?gender:"Select Gender"}</p>
                <i className={`fi fi-rr-angle-${genderPanel ? "up" : "down"} transition duration-700`}></i>
              </div>

              {
                genderPanel ?
                  <div className='absolute z-20 bg-[#F3F3F3] top-[40px] right-0 flex flex-col w-full'>
                    <button
                      className='flex input-box py-2 mt-3 justify-between items-center '
                      onClick={(e) => {
                        e.preventDefault()
                        setGender(e.target.innerText)
                        setGenderPanel(prev => !prev)
                      }}
                      
                      >
                      <p>Male</p>
                      <i className='fi fi-rr-mars'></i>
                    </button>
                    <button
                      className='flex input-box py-2 justify-between items-center '
                      onClick={(e) => {
                        e.preventDefault()
                        setGender(e.target.innerText)
                        setGenderPanel(prev => !prev)
                      }}>
                      <p>Female</p>
                      <i className='fi fi-rr-venus'></i>
                    </button>
                  </div>
                  : ""
              }

            </div>
          }


          {
            type != 'sign-in' &&

            <InputBox
            name="phone"
            type="text"
            placeholder="phone no."
            icon="fi-rr-phone-flip"
          />
          }

          <button
            className="py-2 rounded-full w-[50%] md:px-7 bg-primary text-white font-normal text-lg hover:bg-primary/50 center mt-9"
            type="submit"
          >
            {
              type.replace("-", " ")
            }

          </button>

          {/* <div className="relative w-full flex items-center 
                gap-2 my-10 opacity-10 uppercase text-black font-bold "
          >
            <hr className="w-1/2 border-black" />
            <p className="">or</p>
            <hr className="w-1/2 border-black" />

          </div> */}

          {/* <button className="w-[90%] btn-dark flex items-center justify-center gap-4 center">
            <img src={google} alt="google" className="w-6" />
            continue with google
          </button> */}

          {
            type == "sign-in" ?
              <p className="mt-6 text-lg text-[#6B6B6B] text-center">
                Don't have an account ?
                <Link to={'/signup'} className="underline text-lg ml-2 text-primary">
                  join us today.
                </Link>
              </p> :
              <p className="mt-6 text-lg text-[#6B6B6B] text-center">
                Already have an account ?
                <Link to={'/signin'} className="underline text-lg ml-2 text-primary">
                  sign in here.
                </Link>
              </p>
          }

        </form>


      </section>
    </AnimationWrapper>:<Navigate to={'/'} />

    }
    </>
  )
}

export default AuthForm