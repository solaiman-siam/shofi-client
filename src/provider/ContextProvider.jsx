import { createContext } from "react"
import PropTypes from "prop-types"
export const MainContext = createContext()
function ContextProvider({children}) {

   const  contextInfo = {

    }

  return (
    <MainContext.Provider value={contextInfo}>{children}</MainContext.Provider>
  )
}

ContextProvider.propTypes = {
    children: PropTypes.node
}
export default ContextProvider