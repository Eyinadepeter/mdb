import React from 'react';
import logo from './../assets/images/logo.png';
import {HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv, HiPlus } from 'react-icons/hi2';
import Headeritem from './headeritem';


function Header() {

  const menu =[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'Series',
      icon:HiTv
    },
  ]
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
      <img src={logo} className='w-[80px] md:w-[200px] p-3' />
      <div className='hidden md:flex gap-8 '>
      {menu.map((item)=>(
        <Headeritem name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className='md:hidden gap-8 flex '>
      {menu.map((item)=>(
        <Headeritem name={item.name} Icon={item.icon}/>
      ))}
      </div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[42px] rounded-full ' />
    </div>
  )
}

export default Header