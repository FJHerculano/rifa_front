import './login.css'
import imgLogin from "../../assets/trevo.jpg"
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div>
        <div className="container col-11 col-md-9" id="form-container">
            <div className="row align-items-center gx-5">
                <div className="col-md-6 order-md-2">
                    <h2>Faça o login para continuar</h2>

                    <form >
                        <div className="form-floating mb-3">                        
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Digite seu email"
                            />
                            <label htmlFor='email' className="form-label">Digite seu email</label>
                        </div>
                        <div className="form-floating mb-3">                        
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Digite sua senha"
                            />
                            <label htmlFor="password" className="form-label">Digite sua senha</label>
                        </div>
                        <div className="text-center">
                            <Link to="/">
                                <button className="btn btn btn-success">entrar</button>
                            </Link> 
                            {/* <input className="me-3 btn btn-primary" type="submit" value="Entrar"/> */}
                            {/* <Link to="/register">
                                <button className="btn btn btn-success">Cadastrar-se</button>
                            </Link> */}
                        </div>
                        
                    </form>

                </div>
                <div className="col-md-6 order-md-1">
                    <div className="col-12 " id="link-container">
                        <Link to="/register">
                            <h5> Ainda não tenho </h5>
                            <h5 className="text-primary">cadastro</h5>
                        </Link>
                    </div>
                    <div className="col-12">
                        <img src={imgLogin} alt="Hello New Customer" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login