import React  from 'react'
import { FaUsers, FaTasks, FaCalendarAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLeaderboard, MdOutlineDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { tasks } from './db'; 
import logo from './assets/HRlogo.png'; 
import searchicon from "./assets/searchicon.svg";
import notifyicon from "./assets/notification-icon.png";
import messageicon from "./assets/message-text.png";
import eclipseimg from "./assets/Ellipsedash.svg";
import arrowdown from "./assets/arrowdown.svg";
import frameone from "./assets/Frame1.png"


const Dashboard = () => {

  
  
const statusStyles = {
    Planned: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-blue-100 text-blue-700",
  };

    return (
    <>
      <nav className="bg-white flex justify-between p-5 items-center overflow-x-hidden mx-auto container">
        <div>
        <img  className='mr-20' src={logo}
         alt="logo-icon" />
         </div>
         
         <div className='relative container '>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-md w-64"
          />
          <img className="absolute left-55 bottom-2" src={searchicon}
           alt="search-icon" />
         </div>
      
      <div className="flex items-center   ">
          
          <div className="flex items-center gap-4 cursor-pointer">
            <img src={notifyicon} alt="" />
            <img src={messageicon} alt="" />
            <img src={eclipseimg} alt="" />
            <h4>Akinwunmi</h4>
            <img src={arrowdown} alt="dropdown" />
            
          </div>
        </div>
      </nav>

      <div className='flex mx-auto container gap-40 mt-6 overflow-x-hidden'>
        <h4 className='ml-5 font-bold text-[10px]'>MAIN MENU</h4>
        <h3 className='font-bold text-blue-900 text-[20px]'>Dashboard</h3>
      </div>
      
      

      
      <div className="flex min-h-screen bg-gray-100 container mx-auto overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 ">
        
        <div className="space-y-4 text-gray-600">
          
           <a className='flex items-center gap-2 text-blue-600 font-semibold' href="#Dashboard"><MdOutlineDashboard /> Dashboard</a>
    
            <a className='flex items-center gap-2' href="#"><BsFillPeopleFill /> Employees</a>
          <a className='flex items-center gap-2' href="#Taskboard"> <FaTasks /> Taskboard</a>
          <a className='flex items-center gap-2' href="#"> <MdOutlineLeaderboard /> Leaderboard</a>
          <a className='flex items-center gap-2' href="#"> <FaCalendarAlt /> Leaveboard</a>
          <a className='flex items-center gap-2' href=""><FiSettings /> Settings</a>
          
        </div>
      </aside>

      {/* Main Content */}
      <main className=" mx-auto container p-10 overflow-x-hidden ">
          

        {/* Summary Cards */}
        <div className="grid grid-cols-3 ">
          <div className="bg-white flex ">
            <div>
             <p className="text-sm text-gray-600">Total Employees</p>
            <p className="text-xl font-bold text-[30px]">24</p>
            </div>
            <FaUsers className="text-5xl mx-auto text-blue-500" />
          </div>
          <div className="bg-white flex">
            
            <div>
              <p className="text-sm text-gray-600">Total Tasks</p>
            <p className="text-xl font-bold text-[30px]">107</p>
            </div>
            <FaTasks className="text-5xl mx-auto text-green-800  " />
          </div>
          <div className="bg-white  flex">
           
            <div>
              <p className="text-sm text-gray-600">Current Leaves</p>
            <p className="text-[30px] font-bold">15</p>
            </div>
             <FaCalendarAlt className="text-5xl mx-auto mb-2 text-blue-600" />
          </div>
        </div>

       
        <div className="bg-white p-6 mx-auto container mt-10 overflow-hidden">
          <h3 className=" font-semibold mb-4 text-[20px]">Taskboard</h3>
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="text-left text-gray-600 cursor-pointer">
                <th className="py-2">#</th>
                <th className="py-2">Task</th>
                <th className="py-2">Team</th>
                <th className="py-2">Duration</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id} className="">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{task.task}</td>
                  <td className="py-2">
                    <div className="flex mx-auto container">
                      {[...Array(task.team)].map((_, idx) => (
                        <div
                          key={idx}
                          className="w-25 h-10  rounded-full  border-white"
                        ><img src={task.team} alt="" /> </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-2">
                    <div>
                      <p>Start: {task.start}</p>
                      <p>End: {task.end}</p>
                    </div>
                  </td>
                  <td className="py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[task.status]}`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
    
    
    </>
  )
}

export default Dashboard