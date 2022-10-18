import React from 'react'

type HeaderProps = {
  title: string
  buttonText?: string
  setIsVisibleDrawer?: (value: boolean) => void
  isVisibleDrawer?: boolean
}

const Header = ({
  title,
  buttonText,
  setIsVisibleDrawer,
  isVisibleDrawer,
}: HeaderProps) => {
  const shouldShowButton = !isVisibleDrawer && setIsVisibleDrawer
  return (
    <header>
      <h1>{title}</h1>
      {shouldShowButton && (
        <button onClick={() => setIsVisibleDrawer(true)}>{buttonText}</button>
      )}
    </header>
  )
}

export default Header
