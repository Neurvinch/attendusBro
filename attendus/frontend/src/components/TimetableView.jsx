import React from 'react'

const TimetableView = ({schedule}) => {
    const days = ['monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday' ]

  return (


    <>
       <h2>Time Table</h2>
       {days.map( (day) =>(
        <div  key ={day}>
        <h4>{day}</h4>

        {schedule[day]?.map( ( subject , index) =>(
            <div key={index} >
                <h5>{subject}</h5>
            </div>
        ))}
        </div>
       ))}
    </>
  )
}

export default TimetableView