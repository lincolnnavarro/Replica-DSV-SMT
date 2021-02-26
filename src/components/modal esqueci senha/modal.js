import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import '../../index.css'



export function Modal({ children, fade = false, defaultOpened = false, setIsOpen }, ref) {


  return (
      <div className={`modal ${fade ? '' : 'modal-fade'}`}>
        <div className="modal-overlay" onClick={() => setIsOpen(false)} />
        <span role="button" className={`modal-close ${fade ? '' : 'modal-fade'}`} aria-label="close" onClick={() => setIsOpen(false)}>
          X
        </span>
        <div className="modal-body">{children}</div>
      </div>
  )
}

export default forwardRef(Modal)