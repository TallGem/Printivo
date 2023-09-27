import React, { useState } from 'react'
import axios from "axios"


const Api = () => {
  const endpoint = "https://api.github.com/users"
  const [detail, setdetail] = useState([])

  const fetchdata = () => {
    axios.get(endpoint).then((response) => {
      console.log(response.data);
      setdetail(response.data)
    })
  }


  return (
    <>
      <div className='text-center mt-2'>
        <button className='btn btn-primary text-center' onClick={fetchdata}>FETCH DATA</button>
      </div>

      <div className=''>
      {detail.map((items) => (
        <div className="card  margin-auto mb-3" style={{width:"18rem"}}>
          <img src={items.avatar_url} className="card-img-top rounded-circle w-50 mx-auto" alt="..." />
          <div className="card-body">
          <h5 className="card-title fw-bolder">Name: {items.login}</h5>
            <h5 className="card-title">ID: {items.id}</h5>
            <h5 className="card-title">Type {items.type}</h5>

          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Api