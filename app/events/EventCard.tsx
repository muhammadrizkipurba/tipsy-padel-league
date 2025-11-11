import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import { LuMapPinned } from 'react-icons/lu'

const EventCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden ring-2 ring-neutral-600 hover:ring-primary-pink transition-all ease-in-out duration-300">
      <Image
        src="/images/banner-season-1.png"
        alt=""
        width={720}
        height={900}
        className="h-auto w-full"
      />
      <div className="p-5">
        <div className="flex items-center justify-between mb-5 group">
          <h3 className="text-xl uppercase text-center group-hover:text-primary-pink transition-all ease-in-out duration-300">Tipsy Padel Civil War</h3>
          <Link href={`/events/tipsy-padel-civil-war`} className="text-sm font-semibold text-white bg-primary-pink rounded-xl hover:scale-105 transition-all ease-in-out duration-300 pt-1 pb-1.5 px-3">
            View Event
          </Link>
        </div>
        <hr className="my-2 border-neutral-600" />
        <ul className="flex flex-col gap-4 py-3">
          <li className="flex items-center gap-3">
            <IoCalendarOutline size={20} />
            <label className="text-sm font-semibold leading-4">
              Every Wednesday
              <br />
              <small className="text-neutral-400">Start from 19.00 WIB</small>
            </label>
          </li>
          <li className="flex items-center gap-3">
            <LuMapPinned size={20} />
            <label className="text-sm font-semibold leading-4">
              Fifty Nine Hub
              <br />
              <small className="text-neutral-400">Jl. Mongonsidi no. 59</small>
            </label>
          </li>
        </ul>
        <hr className="my-2 border-neutral-600" />
        <ul className="flex flex-col gap-4 py-3">
          <li className="flex items-center gap-3">
            <IoCalendarOutline size={20} />
            <label className="text-sm font-semibold leading-4">
              Every Friday
              <br />
              <small className="text-neutral-400">Start from 19.00 WIB</small>
            </label>
          </li>
          <li className="flex items-center gap-3">
            <LuMapPinned size={20} />
            <label className="text-sm font-semibold leading-4">
              Kin Urban Ground | Manhattan
              <br />
              <small className="text-neutral-400">Jl. Gatot Subroto KM 6.7 No. 100</small>
            </label>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default EventCard