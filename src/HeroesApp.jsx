import { RouterProvider } from 'react-router-dom';
import { router } from './routes'

const HeroesApp = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default HeroesApp
