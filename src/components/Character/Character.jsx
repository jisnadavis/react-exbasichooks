import './Character.css'
import React, { useState } from 'react'

export const Character = ({ character }) => {
  const [turned, setturned] = useState(false)

  return (
    <div>
      <img
        src={character.image}
        alt={character.name}
        className={turned ? 'turned' : 'image'}
        onClick={() => {
          setturned(!turned)
        }}
      />
    </div>
  )
}
