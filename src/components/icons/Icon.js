import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, size }) => {
  const viewBox = "0 0 248 312";
  return <FontAwesomeIcon icon={icon} viewBox={viewBox} />
}

export default Icon
