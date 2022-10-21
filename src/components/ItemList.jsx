import React from 'react'
import {useState,useEffect} from 'react'
import getFetch from '../helper/helper.js'
import Item from './Item.jsx'
import './ItemListt.css'

const onAdd = (count) => {
    alert("Agregaste " + count + " Remeras");
  }

const ItemList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])
  return (
    <>
    {
        loading ? <h1>Cargando...</h1> 
        
        :
        
        <div  className="grid-product" >
            {data.map(data => (
                    <Item inicial={1} max={10} onAdd={onAdd} key={data.name} data={data}/>
            ))}
        </div>

    }
    </>
  )
}

export default ItemList