import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/lakshayjuneja003')
    //     .then((response)=>{
    //         return response.json()
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4">Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Logo" width="200px" />
         </div>
        
    )
}
export default Github;
export const GithubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/lakshayjuneja003')
    return response.json()
}