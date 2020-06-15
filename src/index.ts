// let window: any
declare const window: any & {document: any}

interface ChangeCheckboxEvent extends TouchEvent {
  preventDefault: () => void
}

const setRem = (base: number) => {
  const docEl = window.document.documentElement
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize'

  const recalc = () => {
    docEl.style.fontSize = 100 * (docEl.clientWidth / base) + 'px'
  }

  window.addEventListener(resizeEvt, recalc, false)
  window.document.addEventListener('DOMContentLoaded', recalc, false)
  window.document.addEventListener(
    'gesturestart',
    (event: ChangeCheckboxEvent) => event.preventDefault()
  )
}

export default setRem
