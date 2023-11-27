import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useFetch from '../../hooks/UseFetch'

const Detail = () => {
    let { id } = useParams()
    const baseUrl = `https://fakestoreapi.com/products/${id}`
    const { data, loading } = useFetch(baseUrl)
    const [detail, setDetail] = useState([])
    
    useEffect(() => {
      setDetail(data)
    }, [data])
    
  return (
    <>
    {detail &&
    <div>
    <ul>
        <li> <img src={detail.image} alt="" /></li>
        <li> {detail.title}</li>
        <li> {detail.category}</li>
        <li> {detail.price}</li>
        
    </ul>
</div>}
    <button onClick={()=>console.log(detail)}>log data</button>
    <button onClick={()=>console.log(id[1])}>log id</button>
    </>
  )
}

export default Detail