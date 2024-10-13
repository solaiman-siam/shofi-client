
import PropTypes from "prop-types"
function Container({children}) {
  return (
    <div className="max-w-[1320px] mx-auto">
        {children}
    </div>
  )
}

Container.propTypes =  {
    children: PropTypes.node
}
export default Container