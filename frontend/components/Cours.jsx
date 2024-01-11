// YourComponent.js
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/dataSlice'

function YourComponent() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div>
 {data.map((cours, index) => (
        <h2 key={index}>{cours.title}</h2>
      ))}    </div>
  )
}

export default YourComponent