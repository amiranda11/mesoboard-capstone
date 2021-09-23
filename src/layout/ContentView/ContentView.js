import React from 'react'
import { urlSlug } from '../../helpers/url'
import { useRouteMatch } from 'react-router-dom'
import {
  HomeManager,
  ScheduleManager
} from '../../content/index'

/** returns the component to be viewed */
const handleView = view => {
  switch (view) {
    case 'home':
      return <HomeManager />
    case 'schedule':
      return <ScheduleManager />
  }
}

const ContentView = () => {

  let { url } = useRouteMatch();
  console.log(url, urlSlug(url))

  return (
    <div className='body'>
      {handleView(urlSlug(url))}
    </div>
  )
}

export default ContentView
