import React, { useState } from 'react'

const Calculator = () => {
    let [firstnum ,setFirstnum] = useState(0)
    let [secondnum ,setSecondnum] = useState(0)
   let [result ,setResult] = useState(0)
    function handleOpe(opr){
        if(opr==='+'){
          setResult( parseInt(firstnum) + Number(secondnum))
        }
        else if(opr==='-'){
            setResult(firstnum-secondnum)

        }
        else if(opr==='*'){
            setResult(firstnum*secondnum)

        }
        else if(opr==='/'){
            setResult(firstnum/secondnum)

        }
        else{
            setResult(firstnum%secondnum)

        }
    }

  return (
    <div>
        <div>Calculator</div>
        <div>
            <input type="number" placeholder='enter the first number' onChange={(e)=>{setFirstnum(e.target.value)}} />
            <br />
            <input type="number" placeholder='enter the second number' onChange={(e)=>{setSecondnum(e.target.value)}}  />
            <br />
            <div>
                <button onClick={()=>handleOpe('+')}>+</button>
                <button onClick={()=>handleOpe('-')}>-</button>
                <button onClick={()=>handleOpe('*')}>*</button>
                <button onClick={()=>handleOpe('/')}>/</button>
                <button onClick={()=>handleOpe('%')}>%</button>

            </div>
        </div>

        <div>
            Result is {result}
        </div>
    </div>
  )
}

export default Calculator