import React, { useState } from 'react'
const months = ['January' ,'February' ,'March' ,'April' ,'May' ,'June' ,'July' ,'August' ,'September' ,'October' ,'November' ,'December']
const days =['Sun' ,'Mon' ,'Tue' ,'Wed' ,'Thur' ,'Fri' ,'Sat']
const Calendar = () => {
    const [year ,setYear] = useState(new Date().getFullYear())
    const [month ,setMonth] = useState(new Date().getMonth())
  const [showYearInput ,setShowYearInput] = useState(false)
  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
  //to iterate the number of days
  const createTableCell = (selectedMonth, selectedYear) => {
    let cells = [];
    // first find number of days (30/31/28) of particular month
    const numberOfDays = daysInMonth(selectedMonth + 1, selectedYear);
    // console.log(numberOfDays)
    const startingDay = new Date(selectedYear, selectedMonth).getDay();
    //this gives index of  the starting days of the month
    // console.log(startingDay)
    let date = 1;
    for (let i = 0; i < 6; i++) {
      //first loop for 4 0r 5 weeks
      let row = [];
      for (let j = 0; j < 7; j++) {
        //second loop for 7 days of week
        let cellId = `cell${i + j + 1}`;

        if (i === 0 && j < startingDay) {
          //this case handle the starting days of month for row 0                _ _ _
          row.push(<td key={j} id={cellId}></td>);
        } else if (date > numberOfDays) {
          // this handles the last days of month for last row if date is increase then number of days
          row.push(<td key={j} id={cellId}></td>);
        } else {
          // for other cases 
          let currentDate = new Date();
          if (
            selectedYear === currentDate.getFullYear() &&
            selectedMonth === currentDate.getMonth() &&
            date === currentDate.getDate()
          ) {
            // if date is today's date then give them an id of today
            cellId = "today";
          }
          // this is for other days
          row.push(
            <td key={j} id={cellId}>
              {date}
            </td>
          );
          // increase the date
          date++;
        }
      }
      // the push all the columns of particular row
      cells.push(<tr key={i}>{row}</tr>);
    }

    // then return all the cells
    return cells;
  };

  const handleYearInput = (event) => {
    setYear(event.target.value);

    document.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        setShowYearInput(false);
      }
    });
  };

  //fumction to chANGE the month and yaer
    function handleChange(str){
      switch(str){
        case '<<':
            setYear(year-1)
            break;
            case '<':
                if(month===11){
                    setMonth(0)
                    setYear(  Number(year)+1)
                }
                else{
                    setMonth(Number(month)-1)
                }
                break;
                case '>':
                    if(month===11){
                        setMonth(0)
                        setYear(Number(year)+1)
                    }
                    else{
                        setMonth(Number(month)+1)
                    }
                    break;
            case '>>':
                setYear(Number(year)+1)
                break;
      }
    }

  return (
    <div style={{  display:'flex' ,flexDirection:'column' ,justifyContent:'center' ,alignItems:'center'}}>
        <h1 id='heading'>Calenadr</h1>
        <div>
        <span>
            <select value={months[month]} id='month' onChange={(e)=>setMonth(e.target.value)} >
                {
                    months.map((element ,i)=>{
                        return(
                            <option  key={i}>{element}</option>
                        )
                    })
                }
            </select>
        </span>
        {showYearInput ? (
        <input
          id="year-text-box"
          type="text"
          value={year}
          onChange={handleYearInput}
        />
      ) : (
        <span id="year" onDoubleClick={()=>setShowYearInput(!showYearInput)}>
          {year}
        </span>
      )}        </div>
        <hr />
            <table style={{textAlign:'center'}}>
                <thead>
                    <tr>
                   {
                    days.map((item ,i)=>(
                        <td key={i} id={item}>{item}</td>
                    ))
                   }
                    </tr>
                </thead>
                <tbody>
                    {
                           createTableCell(month ,year)
                    }
                </tbody>
            </table>
        <hr />
        <div>
            <button id='previous-year' onClick={ ()=>handleChange('<<')}>&lt; &lt;</button>
            <button id='previous-month' onClick={()=>handleChange('<')}>&lt;</button>
            <button id='next-month' onClick={()=>handleChange('>')}>&gt;</button>
            <button id='next-year' onClick={()=>handleChange('>>')}>&gt; &gt;</button>

        </div>
    </div>
  )
}

export default Calendar