import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const HeroesApp = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default HeroesApp
