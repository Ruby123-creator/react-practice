import React, { useState } from 'react'

const BMIcalculator = () => {
    const [age ,setAge] = useState(0)
    const [gender ,setGender] = useState("Gender")
    const [weight ,setWeight] = useState(0)
    const [height ,setHeight] = useState(0)

    const HandleClick =(e)=>{
        e.preventDefault()
        console.log(height ,weight)
        const BMI = (parseFloat(weight)/(parseFloat(height)*parseFloat(height)*0.0001)).toFixed(2)
        console.log(BMI)
        if(age==="MALE"){
            if(BMI<=18.5){
               alert("underweight")
            }
            else if(BMI>18.5 && BMI<=24.9){
                    alert("normal")
            }
            else if(BMI>=25&&BMI<=29.9){
                    alert("overweight")
            }
            else{
                     alert("obesity")
            }
        }
        else{
            if(BMI<=20.5){
                alert("underweight")
             }
             else if(BMI>20.5 && BMI<=26.9){
                     alert("normal")
             }
             else if(BMI>=27&&BMI<=31.9){
                     alert("overweight")
             }
             else{
                      alert("obesity")
             }
        }
        
    }
    

  return (
    <div>
        <h1>BMI Calculator</h1>
        <form action="" onSubmit={HandleClick}>
        <select name="" id="" value={age} onChange={(e)=>setAge(e.target.value)}>{
            Array(100).fill().map((_,i)=>{
                return(
                    <option value={i+2} key={i}>{i+2}</option>
                )
            })

        }
        </select>
        <input type="number" value={age} required placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <br />
        <select name="" id="" value={gender}  required onChange={(e)=>setGender(e.target.value)}>
            <option value="female">FEMALE</option>
            <option value="male">MALE</option>
        </select>
           
        <br />
        <br />
        <input type="text"  required  onChange={(e)=>setHeight(e.target.value)} placeholder="Enter Height in cm" id="" />
        <br />
        <br />
        <input type="text"  required  onChange={(e)=>setWeight(e.target.value)} placeholder='Enter Weight in kg' />
        <br />
        <br />

        <button>Calculate BMI</button>
        </form>
    </div>
  )
}

export default BMIcalculator