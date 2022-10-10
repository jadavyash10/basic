import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         haserror: false
      }
    }

    static getDerivedStateFromError(error) {
        return{hasherror:true}
    }

    componentDidCatch(error,info) {
      console.log(error)
      console.log(info)
    }
  render() {
    if(this.state.hasherror) {
    return <h1>something went wrong...</h1>
  }
  return this.props.children
}
}

export default ErrorBoundary