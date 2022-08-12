import React from 'react'

const Loading = () => {
  return (
    <div className='container'>
          <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
          </div>
    </div>
  )
}

export default Loading
