import { useEffect, useState } from "react"

const Counter=()=>{
    const [count,setCount] = useState(0)
    const [stal,setStal] = useState('')
    const [aff,setAff] = useState('')
    const increment=()=> setCount(count+1)
    //Mount
    // useEffect(()=>{
    //     console.log("Mount")
    // },[])

    //Update

    // useEffect(()=>{
    //     console.log('Update')
    // })

    // useEffect(()=>{
    //     console.log('Update')
    // },[count])

    //Unmount
    // useEffect(()=>{
    //     return ()=> console.log('Unmount')
    // },[])
    return(
        <div>
           
            <h2>Counter Component</h2>
            <button onClick={()=>count > 0 && setCount(count-1)}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <br/>
            <br/>
            <h3>{aff}</h3>
            <input type="text" onChange={(e)=> setStal(e.target.value)}/>
            <button onClick={()=> setAff(stal)}>Afficher</button>
        </div>
    )
}

export default Counter