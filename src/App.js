import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
// import 'react-calendar/dist/Calendar.css';
import '../src/styles/calendar.css';

function App() {
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState([
    new Date(2022, 4, 21),
    new Date(2022, 4, 21),
  ]);

  return (
    <div className='app'>
      <h1 className='text-center'>CALENDAR</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          defaultValue={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;