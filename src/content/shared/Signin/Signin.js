import { useState, useEffect, useContext } from 'react'
import './Signin.css'
import { Redirect, useLocation, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

import MesoboardBackgroundImg from '../../../assets/mesoboard_background.jpg'
import { MesonLogo } from '../../../components/index'
import { AuthContext } from '../../../store/index'

const Signin = () => {
  const [isTokenValid, setIsValidToken] = useState(false)
  const { state } = useLocation()
  const { token, signin } = useContext(AuthContext)

  useEffect(() => {
    if (token)
      setIsValidToken(true)
  }, [token])

  if (isTokenValid) {
    return <Redirect to={state?.from || '/app/home'} />
  }

  const handleSignin = (e) => {
    signin()
    e.preventDefault()
  }

  return (
    <div className='signin'>
      <div className='signin__left'>
        <div className='signin__formContainer'>
          <Form onSubmit={handleSignin}>
            <h2 style={{ color: '#287F4E' }}>Inicial Sesión</h2>
            <br />
            <Form.Control size="lg" type="text" placeholder="Correo electrónico" />
            <br />
            <Form.Control size="lg" type="text" placeholder="Contraseña" />
            <br />
            <Button type="submit" variant="primary" className="w-100 mt-3">
              Iniciar
            </Button>
          </Form>
        </div>
      </div>
      <div className='signin__right'>
        <img className='signin__backImg' src={MesoboardBackgroundImg} />
        <Link to='/'>
          <MesonLogo className='signin__logo' height={200} />
        </Link>
      </div>
    </div>
  )
}

export default Signin