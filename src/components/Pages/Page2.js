import React from 'react'
import TestComponent from '../TestComp'

export function getContent() {
  return (
    <div>
      <h1>Page Two</h1>
      <p>Here is the content on page 2.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt
        est fuga ex eveniet reiciendis fugit, praesentium vel excepturi,
        voluptatem consectetur voluptatum iusto sed ducimus. Quod exercitationem
        obcaecati praesentium saepe.
      </p>
    </div>
  )
}

export const Page2 = () => {
  return (
    <TestComponent
      title="Page Two"
      icon="cart arrow down"
      content={getContent()}
    />
  )
}
