import React from 'react'
import { TeamData } from '../eventServices'
import Image from 'next/image';

type Props = {
  teamData: TeamData;
};

const TeamCard = ({
  teamData
}: Props) => {

  const captain = teamData.members.find(member => member.is_captain);
  const silverMembers = teamData.members.filter(member => member.level.toLowerCase() === 'silver');
  const bronzeMembers = teamData.members.filter(member => member.level.toLowerCase() === 'bronze');
  const lowerBronzeMembers = teamData.members.filter(member => member.level.toLowerCase() === 'lower bronze');
  const womenMembers = teamData.members.filter(member => member.level.toLowerCase() === 'women');

  return (
    <div className='border border-neutral-600 rounded-xl p-4'>
      <h3 className='font-sans! uppercase font-bold'>{teamData.team_name}</h3>
      <hr className='border-neutral-600 mt-3 mb-4' />
      <ul className='flex gap-2 flex-col'>
        <li className={`font-bold flex items-center gap-2 col-span-3 justify-between`}>
          <small className='text-[14px]'>{captain?.name}</small>
          <div className='bg-primary-pink flex items-center justify-center gap-2 rounded-lg w-30 py-2'>
            <small className='uppercase text-[10px]'>Captain</small>
            <Image
              src="/images/captain.svg"
              alt=""
              height={14}
              width={14}
              className={`invert h-5 w-auto`}
            />
          </div>
        </li>
        {/* SILVER */}
        <li className={`flex font-bold items-center justify-between`}>
          <div>
            {silverMembers.map((member, idx) => {
              return (
                <span key={`team-${teamData._id}-${idx}`} className='flex-1 flex-wrap mr-2 text-[14px]'>
                  {member.name}
                </span>
              )
            })}
          </div>
          <div className='text-[10px] bg-silver inline-flex text-black w-30 justify-center font-bold uppercase py-2 rounded-lg'>
            Silver
          </div>
        </li>
        {/* BRONZE */}
        <li className={`flex font-bold items-center justify-between`}>
          <div>
            {bronzeMembers.map((member, idx) => {
              return (
                <span key={`team-${teamData._id}-${idx}`} className='flex-1 flex-wrap mr-2 text-[14px]'>
                  {member.name}
                </span>
              )
            })}
          </div>
          <div className='text-[10px] bg-bronze text-white inline-flex w-30 justify-center font-bold uppercase py-2 rounded-lg'>
            Bronze
          </div>
        </li>
        {/* LOWER BRONZE */}
        <li className={`flex font-bold items-center justify-between`}>
          <div>
            {lowerBronzeMembers.map((member, idx) => {
              return (
                <span key={`team-${teamData._id}-${idx}`} className='flex-1 flex-wrap mr-2 text-[14px]'>
                  {member.name}
                </span>
              )
            })}
          </div>
          <div className='text-[10px] bg-lower-bronze inline-flex text-black w-30 justify-center font-bold uppercase py-2 rounded-lg'>
            Lower Bronze
          </div>
        </li>
        {/* WOMEN */}
        <li className={`flex font-bold items-center justify-between`}>
          <div>
            {womenMembers.map((member, idx) => {
              return (
                <span key={`team-${teamData._id}-${idx}`} className='flex-1 flex-wrap mr-2 text-[14px]'>
                  {member.name}
                </span>
              )
            })}
          </div>
          <div className='text-[10px] bg-women text-white inline-flex w-30 justify-center font-bold uppercase py-2 rounded-lg'>
            Women
          </div>
        </li>
        
      </ul>
    </div>
  )
}

export default TeamCard