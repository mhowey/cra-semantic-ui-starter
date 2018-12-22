import React from 'react'
import TestComponent from '../TestComp'

export function getContent() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus a,
        molestias magnam, porro aliquam nihil quis et natus expedita officia
        architecto mollitia, molestiae quod autem quidem rem sit ipsam?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        deserunt ducimus, vel accusamus sequi doloribus sunt reiciendis numquam,
        quisquam, voluptatem dolore nobis neque eos dignissimos molestias non.
        Ipsum, voluptatum molestias.
      </p>
    </>
  )
}

const PageHome = () => {
  return (
    <div>
      <TestComponent
        title="The Home Page"
        icon="assistive listening systems icon huge"
        content={getContent()}
      />
    </div>
  )
}

export default PageHome
