import './Events.css'
import { useState } from 'react'
import events from '../assets/events.jsx'
import EventItem from '../components/EventItem/EventItem'

function Events() {

  const [eventCalendar, setEventCalendar] = useState([...events])
  return (
    <div className="view view-events">
      <h1>Events</h1>
      { 
        events.length > 0 ? <ul>{eventCalendar.map((ev, i) => <EventItem key={i} item={ev} eventCalendar={eventCalendar} />)}</ul> 
        : <h4>No events planned</h4>
      }
    </div>
  )
}

export default Events