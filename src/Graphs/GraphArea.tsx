import React, { useEffect } from 'react'
import { circle } from '../d3/shapes'

export default function GraphArea() {
  useEffect(() => {
    circle()
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div id="chart-area"></div>
      </div>
    </div>
  )
}
