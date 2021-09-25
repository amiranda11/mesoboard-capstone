import { useState, useEffect } from 'react'
import './ContentHeader.css'
import { ContentHeaderInfo } from '../index'

const ContentHeader = ({ view }) => {
  const [header, setHeader] = useState('')
  useEffect(() => {
    switch (view) {
      case 'home':
        setHeader('inicio'); break;
      case 'schedule':
        setHeader('horarios'); break;
      case 'request':
        setHeader('solicitudes'); break;
    }
  }, [view])

  return (
    <div className='contentHeader'>
      <div className='contentHeader__container'>
        <h2>{header}</h2>
        <ContentHeaderInfo view={view} />
      </div>
      <hr />
    </div>
  )
}

export default ContentHeader
