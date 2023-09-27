import React from 'react'
import logo from '../../image/logo.webp'
import {BiSolidUserCircle} from 'react-icons/bi'
const PageHeader: React.FC<{}> = () => {
    return (
        <div className="h-24 flex mx-4">
            <div className='h-full w-1/2 items-center flex'>
                <img src={logo} alt="" className='h-full w-1/6 mx-5'/>
                <div className="font-medium text-base text-slate-500">Resident List</div>
            </div>
            <div className='h-full w-1/2 flex justify-end items-center'>
                <div className="text-teal-600 text-base font-semibold mr-4">staging pharmacy.admin</div>
                <BiSolidUserCircle className='rounded-full text-teal-600 h-10 w-10'/>
            </div>
        </div>
    )
}
export default PageHeader;