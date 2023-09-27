import React from 'react'
import { FaUserFriends, FaHospitalUser } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const PageSideBar: React.FC<{}> = () => {
  const resident = useSelector((state: RootState) => state.residents.userProfile)
  const location = useLocation()
  const customTheme: CustomFlowbiteTheme = {
    sidebar: {
      root: {
        inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 dark:bg-gray-800',
      },
    },
  };

  return (
    <Sidebar aria-label="Default sidebar example" theme={customTheme.sidebar}>
      <Sidebar.Items className='p-0'>
        <Sidebar.ItemGroup className='h-[89vh] border-r-2'>
          <Sidebar.Item
            icon={FaUserFriends}
            className={location.pathname === '/' && 'bg-blue-300 hover:bg-blue-300 rounded-none'}
          >
            <Link to='/'>Resident List</Link>
          </Sidebar.Item>
          {
            (resident && location.pathname.startsWith('/user/')) ? (
              <Sidebar.Item
                icon={FaHospitalUser}
                className='border-l-4 border-green-400'
              >
                <p>{resident.title}</p>
              </Sidebar.Item>
            ) : null

          }
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}