import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/raj-p1')
    //         .then((res) => res.json())
    //         .then((data => {
    //             console.log(data);
    //             setData(data)
    //         }))
    // }, [])

    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src= {data.avatar_url} alt="github profile" className='m-4 rounded-full w-32 h-32'/>
        </div>
    )
}

export default Github