import { Rules } from '@/constants'
import React from 'react'

const RulesInfo = () => {
  return (
    <div className='border border-neutral-600 rounded-xl py-4 px-4'>
      <div className='flex flex-col gap-3'>
        {Rules.map((item, idx) => (
          <ul key={`${item.title}-${idx}`} className={`${ idx !== Rules.length-1 && 'border-b pb-4 border-b-neutral-600'}`}>
            <li className='text-sm font-bold'>
              <strong className='text-primary-pink'>{idx+1}. {item.title}</strong>
              <ul className='ml-4 mt-1'>
                {item.regulations.map((regulation, sidx) => {
                  if(regulation.charAt(0) === "-") {
                    return <p key={`rule-${idx}-point-${sidx}`} className='font-normal ml-4'> &bull; {regulation.slice(1)}</p>
                  };
                  return (
                    <p key={`rule-${idx}-point-${sidx}`} className='font-normal'> - {regulation}</p>
                  );
                })}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default RulesInfo