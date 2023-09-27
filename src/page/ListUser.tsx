import React, {useEffect } from 'react'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {TfiMenuAlt} from 'react-icons/tfi'
import {CgSandClock} from 'react-icons/cg'
import noImage from '../image/No-Image-Placeholder.svg.webp'
import { useNavigate } from 'react-router-dom';
import { fetchResident } from '../redux/slices/resident.slice'
import { AppDispatch, RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

export const ListUser: React.FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch()
    const residents = useSelector((state: RootState) => state.residents.users)
    const navigate = useNavigate()
    
    const haldeToDetail = (item:any) => {
        navigate(`/user/${item}`)
    }

    useEffect(() => {
        dispatch(fetchResident())
    }, [dispatch])

    return (
        <div className='text-black mx-5 w-[86%]'>
            <div className="flex justify-end">
                <button className='border p-2 rounded-tl-md rounded-bl-md active:bg-slate-300'><BsFillGrid3X3GapFill className='h-5 w-5 text-slate-600'/></button>
                <button className='border p-2 rounded-tr-md rounded-br-md active:bg-slate-300'><TfiMenuAlt className='h-5 w-5 text-slate-600'/></button>
            </div>
            {residents?.map((item:any)=> (
            <div className="h-[25vh] border mt-3 rounded-lg border-b-[3px] hover:border-b-teal-600">
                <div className="flex py-4 h-full text-sm">
                    <img src={noImage} alt="" className='w-[10%] mx-3 p-4'/>
                    <div className="flex w-1/4 items-center">
                    <div className=" font-medium text-lg">{item.title}</div>
                    <CgSandClock className='w-6 h-6'/>
                    </div>
                    <div className="w-1/4 flex flex-col items-start justify-center text-black">
                        <div className='text-gray-500'>Gender:</div>
                        <div className="text-xl font-medium">{item.gender}</div>
                        <div className='text-gray-500'>Day of Birth:</div>
                        <div className="text-xl font-medium">{item.dayOfBirth}</div>
                        <div className='text-gray-500'>Room:</div>
                        <div className="text-xl font-medium">{item.room}</div>
                        <div className='text-gray-500'>Medicane No:</div>
                        <div className="text-xl font-medium">{item.medicaneNo}</div>
                    </div>
                    <div className="w-1/3 flex flex-col items-start justify-center">
                        <div className='text-gray-500'>Section:</div>
                        <div className="text-xl font-medium">{item.section}</div>
                        <div className='text-gray-500'>RAC ID:</div>
                        <div className="text-xl font-medium">{item.RACID}</div>
                        <div className='text-gray-500'>Facility:</div>
                        <div className="text-xl font-medium">{item.facility}</div>
                        <div className='text-gray-500'>Doctor:</div>
                        <div className="text-xl font-medium">{item.doctor}</div>
                    </div>
                    <div className="items-center flex w-1/12">
                    <button className='border px-4 py-2 rounded-lg border-b-[3px] bg-teal-600 text-white font-semibold hover:bg-teal-700' onClick={() => haldeToDetail(item.id)}>View Profile</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}