import { useState } from 'react'
import './ContentView.css'
import { urlSlug } from '../../helpers/url'
import { useRouteMatch } from 'react-router-dom'
import { ContentHeader } from '../../components/index'
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
  // console.log('url', urlSlug(url))

  return (
    <div className='body'>
      <ContentHeader view={urlSlug(url)} />
      <div className='body__content'>
        {handleView(urlSlug(url))}
      </div>
    </div>
  )
}

export default ContentView
