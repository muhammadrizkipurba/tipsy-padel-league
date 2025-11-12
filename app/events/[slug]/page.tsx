import React from 'react'
import Image from 'next/image'
import { getAllTeamsData, getAllTeamsLineupData } from '../eventServices';
import TabsInfo from './TabsInfo';

const SingleEventPage = async () => {

  let teamsData = [];
  const response = await getAllTeamsData({ season: 1 }); // Call the function directly
  if (response && response.status === 200) {
    teamsData = response.data;
  };

  let lineupData = [];
  const lineupRes = await getAllTeamsLineupData({ season: 1, round: "1" }); // Call the function directly
  if (lineupRes && lineupRes.status === 200) {
    lineupData = lineupRes.data;
  };

  return (
    <div className='mt-5 custom-container'>
      <Image
        src="/images/banner-season-1.png"
        alt=""
        width={720}
        height={900}
        className="h-auto w-full rounded-xl"
      />

      <div className='mt-12'>
        {/* <AccordionInfo teamsData={teamsData} /> */}
        <TabsInfo teamsData={teamsData} lineupData={lineupData} />
      </div>
    </div>
  )
}

export default SingleEventPage