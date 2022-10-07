import React, { Component } from 'react'
import gsap from 'gsap'

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

  componentDidUpdate(prevProps: any) {
    //console.log(this.state.progress)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <div className='h-full w-full z-50 fixed'>
        <div className='absolute h-full w-full bg-white'></div>
        <div
          style={{ opacity: 1 - this.state.progress }}
          className="absolute  h-full  w-full bg-neutral-800 transition-[opacity] duration-700 ease-out"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center  font-montserrat ">
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
      </div>
    )
  }
}

export default Loading
