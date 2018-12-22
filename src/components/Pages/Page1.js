import React from 'react'
import TestComponent from '../TestComp'

export function getContent() {
  return (
    <div>
      <h1>Page One</h1>
      <p>
        This is the text that will appear on page one of the sample website.
      </p>
      <p>Lorem ipsum and stuff...</p>
    </div>
  )
}

export const Page1 = () => {
  return (
    <TestComponent
      title="Page One"
      icon="sort amount down"
      content={getContent()}
    />
  )
}
