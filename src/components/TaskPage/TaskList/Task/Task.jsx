import React from 'react'
import style from './style.module.css'
import { Link, useParams } from 'react-router-dom'


function Task({ id, title, category, description, deadlinecreatedAt }) {


  return (
    <div className={style.taskContainer}>
      <div className={style.taskHeader}>{title}</div>
      <div className={style.taskAbout}>
      </div>
      <Link to={`/tasks/${id}`}>
        <div className={style.taskDescription}>
          {description}
        </div>

      </Link>
      <div className={style.taskSeparator}></div>
      <div className={style.taskTagContainer}>
        <div className={style.taskCategory}>{category}</div>
        <div className={style.taskTag}>
          <div className={style.tasksvg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tags" viewBox="0 0 16 16">
            <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
          </svg>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Task