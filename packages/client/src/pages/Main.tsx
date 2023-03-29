import { Link } from 'react-router-dom'
import { RoutesEnum } from '../utils/const-variables/routes'

export function Main() {
  return (
    <>
      <ul>
        {Object.values(RoutesEnum).map(route => (
          <li key={route}>
            <Link to={route}>{route}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}