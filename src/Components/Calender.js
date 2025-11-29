import React, { useEffect, useState } from 'react'
import Style from './Calender.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';


const Calender = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(res => setEvents(res.data.map(task => ({
        id: task._id,
        title: task.title,
        date: task.date
      }))))
      .catch(err => console.log(err));
  }, []);

  // Add task
  const handleDateClick = (arg) => {
    const title = prompt('Enter task for ' + arg.dateStr);
    if (title) {
      axios.post('http://localhost:5000/tasks1', { title, date: arg.dateStr })
        .then(res => {
          setEvents([...events, { id: res.data._id, title: res.data.title, date: res.data.date }]);
        });
    }
  };

  // Delete task
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Delete task '${clickInfo.event.title}'?`)) {
      axios.delete(`http://localhost:5000/tasks1/${clickInfo.event.id}`)
        .then(() => {
          setEvents(events.filter(e => e.id !== clickInfo.event.id));
        });
    }
  };


  return (
    <>
      <div className={Style.div1}>
{/* 
        <div style={{ width: '80%', margin: '50px auto' }}>
      <h2>CRM Task Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div> */}
               
      </div>
    
    </>
  )
}

export default Calender