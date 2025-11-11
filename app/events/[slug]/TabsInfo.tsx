"use client"
import React, { useState } from 'react'
import TeamCard from './TeamCard';
import { TeamData } from '../eventServices';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TableStandings from './TableStandings';
import MatchesInfo from './MatchesInfo';
import ConfirmedPairsInfo from './ConfirmedPairsInfo';
import RulesInfo from './RulesInfo';

type Props = {
  teamsData: TeamData[];
};

const TabsInfo = ({
  teamsData
}: Props) => {

  const [activeItem, setActiveItem] = useState("rules");

  const handleValueChange = (value: string) => {
    setActiveItem(value)
  };

  return (
    <Tabs defaultValue="rules" className="" onValueChange={handleValueChange}>
      <TabsList className='bg-transparent gap-2 py-0 px-0 flex-wrap mb-10'>
        <TabsTrigger
          value="rules"
          className={`${activeItem === "rules" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1`}
        >
          Rules
        </TabsTrigger>
        <TabsTrigger
          value="team-info"
          className={`${activeItem === "team-info" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1`}
        >
          Team Info
        </TabsTrigger>
        <TabsTrigger
          value="confirmed-pairs" 
          className={`${activeItem === "confirmed-pairs" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1`}
        >
          Confirmed Pairs
        </TabsTrigger>
        <TabsTrigger
          value="matches" 
          className={`${activeItem === "matches" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1`}
        >
          Matches
        </TabsTrigger>
        <TabsTrigger
          value="standing" 
          className={`${activeItem === "standing" ? "bg-primary-pink! font-bold" : "bg-neutral-700 hover:bg-primary-pink/30"} transition-all ease-in-out duration-300 px-4 uppercase text-white cursor-pointer pb-1`}
        >
          Table Standing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="rules">
        <div className='mt-5'>
          <RulesInfo />
        </div>
      </TabsContent>
      <TabsContent value="team-info">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5'>
          {teamsData.map((data: TeamData, idx: number) => {
            return (
              <TeamCard key={`team-${idx}`} teamData={data} />
            )
          })}
        </div>
      </TabsContent>
      <TabsContent value="confirmed-pairs">
        <div className='mt-5'>
          <ConfirmedPairsInfo />
        </div>
      </TabsContent>
      <TabsContent value="matches">
        <div className='mt-5'>
          <MatchesInfo />
        </div>
      </TabsContent>
      <TabsContent value="standing">
        <div className='mt-5'>
          <TableStandings teamsData={teamsData} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default TabsInfo