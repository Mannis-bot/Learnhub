import React from 'react'
import Chartcomponent from './Chartcomponent'
import Finance from './Finance'
import { FaCircleNotch, FaRegCheckCircle, FaEllipsisV } from "react-icons/fa";
import { MdOutlineCallMade, MdOutlineCallReceived } from "react-icons/md";

const Dashboard = () => {
  return (
    <section className='mt-[30px] mx-[30px] flex flex-col gap-[30px]' >
        <div className='FirstRow'>
            <div className="dtitle flex justify-between mb-[15px]">
                <h2 className='text-lg font-medium'>Dashboard <br/> <span className='text-sm font-normal'>Hi Lee! Welcome to Learn-Hub Dashboard</span></h2>
                <div className='flex gap-3'>
                    <select name="" id="">
                        <option value="">19/Mar</option>
                    </select>
                    <button>New Admission</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
            <div className="cards grid grid-cols-2 gap-6 ">
                <div className='bg-pure flex items-center py-6 px-4 gap-4 rounded-md '>
                  <div>
                    <h2 className='text-lg font-medium mb-[10px]'>6, 825</h2>
                    <h3 className='text-[13px] font-medium'>Total Students <br/> <span className='text-xs font-normal'>0.5% than last month</span></h3>
                  </div>
                  <img src="/Images/bill.png" alt="" className='w-[50px] bg-bgImage rounded-custom p-2'/>
                </div>
                {/* Card Two */}
                <div className='bg-pure flex items-center py-6 px-4 gap-5 rounded-md'>
                  <div>
                    <h2 className='text-lg font-medium mb-[10px]'>6, 825</h2>
                    <h3 className='text-[13px] font-medium'>Total Students <br/> <span className='text-xs font-normal'>0.5% than last month</span></h3>
                  </div>
                  <img src="/Images/bill.png" alt="" className='w-[50px] bg-bgImage rounded-custom p-2'/>
                </div>
                 {/* Card Three */}
                 <div className='bg-pure flex items-center gap-5 rounded-md py-6 px-4'>
                  <div>
                    <h2 className='text-lg font-medium mb-[10px]'>6, 825</h2>
                    <h3 className='text-[13px] font-medium'>Total Students <br/> <span className='text-xs font-normal'>0.5% than last month</span></h3>
                  </div>
                  <img src="/Images/bill.png" alt="" className='w-[50px] bg-bgImage rounded-custom p-2'/>
                </div>
                 {/* Card Four */}
                 <div className='bg-pure py-6 px-4  flex items-center gap-5 rounded-md'>
                  <div>
                    <h2 className='text-lg font-medium mb-[10px]'>1,397</h2>
                    <h3 className='text-[13px] font-medium'>Invoice Status <br/> <span className='text-xs font-normal'>0.5% than last month</span></h3>
                  </div>
                  <img src="/Images/bill.png" alt="" className='w-[50px] bg-bgImage rounded-custom p-2'/>
                </div>
            </div>
            <div className="cardTwo bg-pure p-6 rounded-md flex ">
                <div>
                    <h2 className='text-lg font-medium mb-[10px]'>Increase your Knowledge <br/>By Learning!</h2>
                    <p className='text-xs font-normal mb-[60px]'>We have a new method to new<br/> learning process. More faster,<br/> secure and easy to use! </p>
                    <buton className='bg-blue text-white py-3 px-3 rounded-lg cursor-pointer'>OK! Take me there</buton>
                </div>
                <img src="./Images/school.png" alt="" className='w-[190px]'/>
            </div>
            </div>
        </div>
        <div className='flex gap-4'>
        <div className='bg-pure p-6 rounded-md'>
            <div className='flex justify-between mb-4'>
                <h4 className='text-sm font-medium'>School Perfomance</h4>
                <div className='flex gap-4 items-center' >
                    <h5 className='text-xs'>Students</h5>
                    <h5 className='text-xs'>Teachers</h5>
                    <select name="" id="" className='text-xs p-1 rounded-2xl border border-blue'>
                        <option value="">This June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                    </select>
                </div>
            </div>
            <div>
            <Chartcomponent />
            </div>
        </div>
        <div className='flex flex-col gap-6 bg-pure py-10 px-6 rounded-md'>
            <h5>Upcoming Events</h5>
            {/* Event One */}
            <div className='flex gap-4'>
                <div >
                    <h4 className='text-center bg-eventOne rounded-3xl py-3 px-4'>28<br/> <span>Wed</span></h4>
                </div>
                <div>
                    <p className='text-[12px] font-medium'>School live concert Choir<br/> Charity Event 2024</p>
                </div>
            </div>
            {/* Event Two */}
            <div className='flex gap-4'>
                <div>
                    <h4 className='text-center bg-eventTwo rounded-3xl py-3 px-4'>3<br/> <span>Wed</span></h4>
                </div>
                <div>
                    <p className='text-[12px] font-medium'>School live concert Choir<br/> Charity Event 2024</p>
                </div>
            </div>
            <button className='bg-blue text-white py-3 px-3 rounded-lg cursor-pointer w-[150px] ml-[50px]'>+New Events</button>
        </div> 
        </div>
        <div className='flex gap-4'>
            {/* 
            <div className='w-[400px]'>Calendar</div>
  */}
            <div className='bg-pure p-6 flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
                    <h5>School Finance</h5>
                    <div className='flex items-center gap-10'>
                        <p className='flex items-center text-xs gap-1'><span className='text-sm'><FaCircleNotch /></span>Monthly</p>
                        <p className='flex items-center text-xs gap-1'><span className='text-sm text-red'><FaRegCheckCircle /></span>Weekly</p>
                        <span className='text-xs'><FaEllipsisV /></span>
                    </div>
                </div>
                <div className='flex gap-24'>
                    <div className='flex items-center gap-3'>
                    <span className='bg-lightGreen rounded-full text-pure p-2 text-[20px]'><MdOutlineCallMade /></span>
                    <div>
                        <p className='text-xs'>Income</p>
                        <h5 className='text-base font-bold'>Ksh 469,200</h5>
                    </div>
                    </div>

                    <div className='flex items-center gap-3'>
                    <span className='bg-orange rounded-full text-pure p-2 text-[20px]'><MdOutlineCallReceived /></span>
                    <div>
                        <p className='text-xs'>Expense</p>
                        <h5 className='text-base font-bold'>Ksh 58,000</h5>
                    </div>
                    </div>

                </div>
                <div>
                    <Finance />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard