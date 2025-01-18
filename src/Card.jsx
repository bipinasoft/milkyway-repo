import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const Card = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src="https://assets.coreui.io/images/react.jpg" />
      <CCardBody>
        <CCardTitle>Sample Card</CCardTitle>
        <CCardText>
           
            Vite + React <br />
            ESLint + Prettier + Stylelint
            <br />
            Sass + Emotion + Tailwind
            <br />  
            Jest + Testing Library
            
        </CCardText>
        {/* <CButton color="primary" href="#">
          Go somewhere
        </CButton> */}
      </CCardBody>
    </CCard>
  )
}
