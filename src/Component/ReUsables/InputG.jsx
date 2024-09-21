

import React, { useId } from 'react'
import './Reusable.css'

function InputG({
  label='',
  type ='',
  className,
  placeholder='',
  ...props
},ref) {
 const id=useId()
  return (
    <div className='input-over'>
      {label && <label htmlFor={id}>{label}</label> }
      <input id={id} type={type} placeholder={placeholder} className={`inputG ${className}`} {...props} ref={ref}/>
    </div>
  )
}

export default React.forwardRef(InputG)