import React, { useEffect ,useState } from 'react'


const FetchData = () => {
    let [data ,setData] = useState([])
    const fetchData1 = async()=>{
        const prod = await fetch("https://dummyjson.com/products");
        let res = await prod.json();
        setData(res.products);
    }

    useEffect(()=>{
        fetchData1();
    },[])
  return (
    <div>
        <p>fetchData</p>
        {
            data?.map((element)=>(
                <div key={element.id}>{element.title}</div>
            ))
        }
    </div>
  )
}

export default FetchData