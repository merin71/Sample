import React from 'react'

export const AboutUs = () => {
  return (
    <div className='container about-us' id='about-us'>
        <div className='row justify-content-center align-items-center feature-title'>
            <div className='col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <h2 style={{color:'rgb(105, 105, 217)', fontSize:'20px'}}>About Us</h2>
            </div>
        </div>
        <div className='row justify-content-center align-items-center feature-title'>
            <div className='col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <h4>Welcome to our financial management app, where your financial well-being is our priority. Our platform offers an 
                  intuitive experience, empowering you to take control of your finances with ease. Seamlessly track your expenses,
                  income, and savings all in one place, allowing you to make informed decisions about money.
                  {/* <br></br>
                  <br></br> */}
                  With our budgeting feature, you can create personalized budgets tailored for your financial goals and lifestyle. 
                  Set acheivable goals and milestones, whether it's saving for a dream vacation.
              </h4>
            </div>
        </div>
    </div> 
  )
}
