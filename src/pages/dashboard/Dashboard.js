import { useState } from 'react'
import ProjectFilter from './ProjectFilter'
import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Dashboard.css'

const Dashboard = () => {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  const filteredProjects = documents ? documents.filter((document) => {
    switch(currentFilter) {
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'sales':
      case 'design':
      case 'marketing':
      case 'development':
        console.log(document.category, currentFilter)
        return document.category === currentFilter
      default:
        return true
    }
  }) : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter 
          currentFilter={currentFilter} 
          changeFilter={changeFilter}
        />
      )}
      {filteredProjects && <ProjectList projects={filteredProjects} />}
    </div>
  )
}

export default Dashboard