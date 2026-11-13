import { createElement, useCallback, useEffect, useState } from 'react'

function Reveal({ as = 'div', className = '', delay = 0, children, ...props }) {
  const [element, setElement] = useState(null)
  const elementRef = useCallback((node) => setElement(node), [])

  useEffect(() => {
    if (!element) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { rootMargin: '0px 0px -36px 0px', threshold: 0.12 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [element])

  return createElement(
    as,
    {
      ...props,
      ref: elementRef,
      className: `reveal ${className}`.trim(),
      style: { ...props.style, '--reveal-delay': `${delay}ms` },
    },
    children,
  )
}

export default Reveal
