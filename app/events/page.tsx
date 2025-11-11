import React from 'react'
import EventCard from './EventCard'

const EventsPage = () => {
  return (
    <div className="mt-5 custom-container">
      <h2 className="text-2xl uppercase text-primary-pink">Upcoming Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
        <EventCard />
      </div>
    </div>
  )
}

export default EventsPage