import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './index.css'

const modalElement = document.getElementById('modal-root')

export function Modal({ children, fade = false, defaultOpened = false, setIsOpen }, ref) {

/* useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])
*/
  return (
      <div className={`modal ${fade ? '' : 'modal-fade'}`}>
        <div className="modal-overlay" onClick={() => setIsOpen(false)} />
        <span role="button" className="modal-close" aria-label="close" onClick={() => setIsOpen(false)}>
          x
        </span>
        <div className="modal-body">{children}</div>
      </div>
  )
}

export default forwardRef(Modal)