import React, { createContext, useState } from 'react'

export const Auth = createContext({})

export default function AuthProvider({ children }: any) {
  const [auth, setAuth] = useState(false);
  const logInOut = (valor:boolean) => {
    setAuth(valor)
  }
  return (
    <Auth.Provider value={{ auth, logInOut }}>
      {children}
    </Auth.Provider>
  )
}
