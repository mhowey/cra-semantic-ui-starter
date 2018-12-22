import React, { Component } from 'react'
import TestComponent from '../TestComp'

export function getContent() {
  return (
    <div>
      <h1>Page Three</h1>
      <p>Here is the content on page 3.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt
        est fuga ex eveniet reiciendis fugit, praesentium vel excepturi,
        voluptatem consectetur voluptatum iusto sed ducimus. Quod exercitationem
        obcaecati praesentium saepe.
      </p>
    </div>
  )
}

export default class Page3 extends Component {
  render() {
    return (
      <TestComponent
        title="Page Three"
        icon="sort amount up"
        content={getContent()}
      />
    )
  }
}
