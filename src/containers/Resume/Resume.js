import React, { Component } from 'react'
import PDF from 'react-pdf-js'

class Resume extends Component {
  render() {

    return (
      <div className="resume-body">
        <div className="resume-display">
          <PDF
            file="/HerManyHorses-Resume.pdf"
            fillWidth
          />
        </div>
        <span className="align-right"><a href="/HerManyHorses-Resume.pdf"><strong>Download Resume (PDF)</strong></a></span>
      </div>
    )
  }
}

export default Resume
