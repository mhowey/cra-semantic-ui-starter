import React, { Component } from 'react'

export function defaultContent() {
  return (
    <>
      <h4>
        This is the default component content. This component can be used to
        give some quick easy style to a piece of content.
      </h4>
      <p>
        Default lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        delectus a, molestias magnam, porro aliquam nihil quis et natus expedita
        officia architecto mollitia, molestiae quod autem quidem rem sit ipsam?
      </p>
    </>
  )
}

export default class TestComp extends Component {
  render() {
    return (
      <div
        className="test-component ui card fluid container"
        style={{ border: '4px solid #ccc' }}
      >
        <div className="ui two column grid stackable">
          <div className="row ">
            <div className="six wide column grey fluid">
              <h1>{this.props.title}</h1>
              <h1>
                <i className={`icon huge ${this.props.icon}`} />
              </h1>
            </div>
            <div className="ten wide column blue fluid">
              <div className="ui grid two wide column fluid">
                <div className="column three wide">
                  <i className="chevron right icon huge" />
                </div>
                <div className="column thirteen wide">{this.props.content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TestComp.defaultProps = {
  title: 'Test Component',
  icon: 'icon exclamation circle huge',
  content: defaultContent(),
}
