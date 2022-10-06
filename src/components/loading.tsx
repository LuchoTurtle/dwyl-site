import React, { Component } from 'react'

class Loading extends Component {
  state = {
    progress: 0
  }

  intervalId: any

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        progress: this.state.progress + (1 - this.state.progress) * 0.1
      })
    }, 500 + 200 * Math.random())
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <>
        <div
          style={{ opacity: 1 - this.state.progress }}
          className="absolute h-screen w-screen bg-neutral-800 transition-[opacity] duration-700 ease-out"
        />
        <div className="absolute flex h-screen w-screen flex-col items-center justify-center  font-montserrat ">
          <h1
            style={{ opacity: this.state.progress }}
            className="absolute text-7xl font-extralight text-black"
          >
            {Math.floor(this.state.progress * 100) + '%'}
          </h1>
          <h1
            style={{ opacity: 1 - this.state.progress }}
            className="absolute text-7xl font-extralight text-white"
          >
            {Math.floor(this.state.progress * 100) + '%'}
          </h1>
        </div>
      </>
    )
  }
}

export default Loading
