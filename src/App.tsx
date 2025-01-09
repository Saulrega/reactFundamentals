import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch("https://api.example/data");
      if(!response.ok){
        throw new Error("Error al obtener datos")
      }
      const jsonData = await response.json();
      
      setData(jsonData)
    }catch(err){
      setError(err as string)
    }finally{
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading){
    return <div>Cargando...</div>
  }

  if (error){
    return <div>Ups!! Hay un error: {error}</div>
  }

  return(
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
