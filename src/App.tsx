import React, { useState } from 'react'
import './App.css'
import ButtonGroup from './ButtonGroup'
import { ButtonGroupSelected } from './ButtonGroup/interface'
import Button from './components/Button'

function App() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<ButtonGroupSelected>(null)

  const handleClickPrimaryExample = () => console.log('click primary')
  const handleClickDefaultExample = () => console.log('click default')
  const handleButtonGroupClick = (selected: number) => {
    console.log('click group')
    setSelectedButtonIndex(selected)
  }

  return (
    <div className="App">
      <h1>Reusable Buttons</h1>
      <h2>Primary</h2>
      <Button type="primary" onClick={handleClickPrimaryExample}>Yes</Button>
      <h2>Default</h2>
      <Button type="default" onClick={handleClickDefaultExample}>Yes</Button>
      <h2>Button Group</h2>
      <ButtonGroup direction="row" onClick={handleButtonGroupClick} selected={selectedButtonIndex}>
        <Button>Yes</Button>
        <Button>No</Button>
      </ButtonGroup>
    </div>
  )
}

export default App
