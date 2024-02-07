import React from 'react'
import InputField from '../components/common/InputField'
import Navbar from '../components/layout/Navbar'
import Button from '../components/common/Button'

const SigninPage = () => {
  const handleClick = () => {
    console.log("hello world");
  }
  return (
    <div className='w-full'>
      <Navbar/>
      <div className="my-14 text-center w-[90%] border-[2px] border-gray-700 m-auto py-10 rounded-xl sm:py-20 md:w-[50%] md:my-32">
            <h1 className="text-3xl font-semibold ">Welcome to Admin panel</h1>
            <p className="text-lg font-light my-5">Signin</p>
            <div className="flex flex-col w-3/4 m-auto text-[10px] my-5">
              <InputField
               type="email"
               name="email"
                placeHolder="Email"
                onChange=""
                value=""
                icon="email"
                />
                {/* {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-left text-red-700"> {formik.errors.email} </p>
                )} */}
              <InputField
               type="password"
                placeHolder="Password"
                name="password"
                onChange=""
                value=""
                icon="password"
              />
              {/* {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-left text-red-700"> {formik.errors.password} </p>
              )} */}
              <p className="text-left text-xs mt-3 ml-2">Forget Password</p>
            </div>
            <Button text="Sign-in" isPrimary={true} onClick={handleClick} />
          </div>
    </div>
  )
}

export default SigninPage