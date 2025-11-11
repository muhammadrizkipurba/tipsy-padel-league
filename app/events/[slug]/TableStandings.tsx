"use client"
import React from 'react'
import { TeamData } from '../eventServices';

type Props = {
  teamsData: TeamData[];
};

const TableStandings = ({
  teamsData
}: Props) => {
  return (
    <div>
      <p className='border border-neutral-600 rounded-xl flex items-center h-20 justify-center'>To be Confirmed</p>
    </div>
  )
}

export default TableStandings