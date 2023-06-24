import React, { useState } from 'react'

const SortList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
   const [users ,setUsers] = useState([]);
   const[sortOrder , setsortOrder] = useState(0)
    const getUsers =()=>{
        return fetch(url).then(res=>res.json()).then((data)=>setUsers(data))
    }
    const SortList=()=>{
       if(sortOrder===0||sortOrder===2){
        setUsers([...users].sort((a,b)=>a.name.length-b.name.length))
        setsortOrder(1)
       }
       else if(sortOrder===1){
        setUsers([...users].sort((a,b)=>b.name.length-a.name.length))
        setsortOrder(2)
       }
    }
  return (
    <div>
    <h1>user List</h1>
    <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={SortList}>Sort Users</button>
        </div>
        <div>
           {
            users.map((item)=>{
                return(
                    <li key={item.id}>{item.name}</li>
                )
            })
           }{" "}
        </div>
    </div>
  )
}

export default SortList