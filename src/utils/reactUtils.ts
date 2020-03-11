import React from "react"
import clsx from "clsx"

export function addClassNameToElement(
  element: React.ReactNode,
  customClassName: string
) {
  if (React.isValidElement<HTMLElement>(element)) {
    const elementClassName = element.props.className
    const hasClassName =
      elementClassName && elementClassName.includes(customClassName)
    if (hasClassName) {
      return element
    } else {
      const className = clsx(customClassName, elementClassName)
      return React.cloneElement(element, { className })
    }
  } else {
    return null
  }
}

export function addClassNameToChildren(
  children: React.ReactNode,
  customClassName: string
) {
  const elements = React.Children.map(children, child =>
    addClassNameToElement(child, customClassName)
  )
  return elements
}

export function renderElement<P>(
  element: React.ReactElement | string,
  elementProps: P,
  elementChildren: React.ReactNode
) {
  if (typeof element === "string") {
    return React.createElement(element, elementProps, elementChildren)
  }

  if (React.isValidElement<React.ReactElement>(element)) {
    return React.cloneElement(
      element,
      {
        ...element.props,
        ...elementProps,
        ref: null
        // ref: (node: any) => {}
      },
      elementChildren
    )
  }
  return null
}
