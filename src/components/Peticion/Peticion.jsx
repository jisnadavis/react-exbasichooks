import React, { useEffect, useState } from 'react'
import { Character } from '../Character/Character'

export const Peticion = () => {
  console.log('hello from peticion')
  const [character, setcharacter] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const response = await res.json()
        console.log('response is', response)
        setcharacter(response.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {character.map((ch) => (
        <Character character={ch} />
      ))}
    </div>
  )
}
