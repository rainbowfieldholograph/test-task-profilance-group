import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

export const Modal = ({ className, children, open, onClose }) => {
  if (!open) return <></>

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay} />
      <div className={[styles.modal, className].join(' ')}>{children}</div>
    </>,
    document.getElementById('modal')
  )
}
