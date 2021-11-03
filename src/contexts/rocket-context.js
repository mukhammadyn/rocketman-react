import { createContext, useState } from "react";

export const RocketContext = createContext()

function RocketContextProvider ({children}) {

  const [nameClass, setNameClass] = useState(false)

  return (

    <RocketContext.Provider value={{nameClass, setNameClass}}>

      {children}

    </RocketContext.Provider>

  )

}

export default RocketContextProvider;
