import React from 'react'
import { FaUserGraduate, FaUsers, FaCalendarAlt, FaMoneyBillAlt, FaCalendar, FaComments, FaBell } from 'react-icons/fa';
import { RiApps2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className='bg-purple h-screen-full flex flex-col gap-[40px] w-[230px] pl-[25px] pt-[20px]'>
        <div className="logo">LearnHub</div>
        <div>
            <h3 className='text-white text-sm'>Main Menu</h3>
            <ul className='text-white flex flex-col gap-2 text-[13px]'>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg active:bg-purple'><RiApps2Fill /><Link to={'/'}>Dashboard</Link></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg'><FaUserGraduate /><Link to={'/students'}>Students</Link></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg'><FaUsers /><a href="/">Teachers</a></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg'><FaCalendar /><a href="/">Events</a></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg' ><FaMoneyBillAlt /><a href="/">Finance</a></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg'><FaCalendarAlt /><a href="/">Calendar</a></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg'><FaComments  /><a href="/">Chat</a></li>
                <li className='flex items-center gap-3 hover:text-purple hover:bg-white py-3 pr-[20px] pl-3 mr-[50px] rounded-lg'><FaBell /><a href="/">Notification</a></li>
            </ul>

            
        </div>
    </section>
  )
}

export default Sidebar