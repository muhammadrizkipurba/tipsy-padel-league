"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Loading from '../../components/Loading';
// import { getAllMatches, MatchData } from '../eventServices';
import { IoCalendarOutline } from 'react-icons/io5';
import { LuMapPinned } from 'react-icons/lu';

const MatchesInfo = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [activeRound, setActiveItem] = useState("1");

  const handleValueChange = (value: string) => {
    setActiveItem(value)
  };

  return (
    <div>
      {isLoading ?
        <div className='border border-neutral-600 rounded-xl flex items-center h-20 justify-center'>
          <Loading show={isLoading} spinnerClassName='text-primary-pink' labelClassName='text-sm' />
        </div>
    : <Tabs defaultValue="1" className="" onValueChange={handleValueChange}>
          <TabsList className='bg-transparent gap-2 py-0 px-0 flex-wrap mb-0'>
            <TabsTrigger
              value="1"
              className={`${activeRound === "1" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1 rounded-full`}
            >
              R1
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className={`${activeRound === "2" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1 rounded-full`}
            >
              R2
            </TabsTrigger>
            <TabsTrigger
              value="3"
              className={`${activeRound === "3" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1 rounded-full`}
            >
              R3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="1">
            <div className='mt-4 flex gap-4 justify-between'>
              <div className='flex items-center gap-2'>
                <IoCalendarOutline size={16} />
                <p className='font-bold'>12 Nov 2025</p>
              </div>
              <div className='flex items-center gap-2'>
                <LuMapPinned size={16} />
                <p className='font-bold'>Fifty Nine Hub</p>
              </div>
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {/* {lineupData.map((item, idx) => {
                const { team_name } = item.team_id;

                const cardHeaderBgColor = team_name.toLocaleLowerCase() === "team kyky" ? "bg-red-900" : team_name.toLocaleLowerCase() === "team angga" ? "bg-blue-950" : team_name.toLocaleLowerCase() === "team andre" ? "bg-green-900" : "bg-purple-950";

                return (
                  <div key={`line-up-team-${idx}`} className='border border-gray-50 rounded-xl overflow-hidden'>
                    <div className={`px-4 py-2 ${cardHeaderBgColor}`}>
                      <h3 className='font-bold font-sans! uppercase'>{item.team_id.team_name}</h3>
                    </div>
                    <div className='px-4 py-3'>
                      {item.line_ups.map((lineup, sidx) => {
                        return (
                          <div key={`lineup-${idx}-${sidx}`} className='flex gap-2'>
                            <p>Match {lineup.match} :</p>
                            {lineup.player_1_name} & {lineup.player_2_name}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })} */}
            </div>
          </TabsContent>
          <TabsContent value="2">
            <div className='mt-4 flex gap-4 justify-between'>
              <div className='flex items-center gap-2'>
                <IoCalendarOutline size={16} />
                <p className='font-bold'>14 Nov 2025</p>
              </div>
              <div className='flex items-center gap-2'>
                <LuMapPinned size={16} />
                <p className='font-bold'>KIN Urban Ground - Manhattan</p>
              </div>
            </div>
            <div className='mt-5'>
              <p className='border border-neutral-600 rounded-xl flex items-center h-20 justify-center'>To be Confirmed</p>
            </div>
          </TabsContent>
          <TabsContent value="3">
            <div className='mt-4 flex gap-4 justify-between'>
              <div className='flex items-center gap-2'>
                <IoCalendarOutline size={16} />
                <p className='font-bold'>19 Nov 2025</p>
              </div>
              <div className='flex items-center gap-2'>
                <LuMapPinned size={16} />
                <p className='font-bold'>Fifty Nine Hub</p>
              </div>
            </div>
            <div className='mt-5'>
              <p className='border border-neutral-600 rounded-xl flex items-center h-20 justify-center'>To be Confirmed</p>
            </div>
          </TabsContent>
        </Tabs>
      }
    </div>
  )
}

export default MatchesInfo