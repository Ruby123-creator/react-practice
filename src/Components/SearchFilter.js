import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [term ,setTerm] = useState("");
    const [Userdata ,setUserData] = useState([])
    useEffect(()=>{
       async function fetchdata(){
           const data = await fetch('https://jsonplaceholder.typicode.com/users')
           const res = await data.json();
           setUserData(res)
        }
        fetchdata()
    },[])
    // console.log(Userdata)
    let filterUser = Userdata.filter((user)=>user.name.toLowerCase().indexOf(term)>=0).map((element)=>{
        return(
            <div key={element.id}>
                <p>{element.name}</p>
            </div>
        )
    })
  return (
    <div>
        <p>SearchFilter</p>
        <div>
            <input type="text" onChange={(e)=>setTerm(e.target.value)} />
        </div>
        <div>{filterUser}</div>
    </div>
  )
}

export default SearchFilter