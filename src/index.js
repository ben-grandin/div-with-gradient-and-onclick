import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './base.css'
import './variables.css'
import './App.css'
import './gradientOverlay.css'
import './gradientBefore.css'

const GradientOverlay = () => {
  const [isFirstGradient, setIsFirstGradient] = useState(true)

  const toggleGradient = () => {
    setIsFirstGradient(prevState => !prevState)
  }

  return (
    <div className={`container ${isFirstGradient ? '' : 'second-gradient'}`}>
      <div className="content" onClick={toggleGradient}>
        <h1>Clickable Content</h1>
        <p>This is some content inside the div. You can still click here.</p>
      </div>
      <div className="gradient-overlay" />
    </div>
  )
}

const GradientBefore = () => {
  const [isFirstGradient, setIsFirstGradient] = useState(true)

  const toggleGradient = (e) => {
    console.log(e.target)
    setIsFirstGradient(prevState => !prevState)
  }

  return (
    <div
      className={`container before-container ${
        isFirstGradient ? '' : 'second-gradient'
      }`}
    >
      <div className="content" onClick={toggleGradient}>
        <h1>Clickable Content (Before)</h1>
        <p>
          This is another example with ::before gradient. Click here to toggle.
        </p>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <main className="app">
      <GradientOverlay />
      <GradientBefore />
    </main>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
