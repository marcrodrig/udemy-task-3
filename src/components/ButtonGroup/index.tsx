import React from 'react'
import { ButtonProps } from '../components/Button/interface';
import { ButtonGroupProps } from './interface'

const ButtonGroup : React.FC<ButtonGroupProps> = ({selected, onClick, direction, children}) => {
  const buttonsDirection = direction || 'row'
  return (
    <div className={`btn-group ${buttonsDirection}`}>
      {React.Children.map(children as React.ReactElement<ButtonProps>[], (child, index) => {
        const selectedClassName = selected === index ? 'btn-group-btn-selected' : '';
        return React.isValidElement(child) 
              ? React.cloneElement(child, { className: `btn-group-btn ${selectedClassName} ${buttonsDirection}`, onClick: () => onClick(index) })
              : child
        })
      }
    </div>
  )
}

export default ButtonGroup