import './login.css'
import imgLogin from "../../assets/alugadonoLogo.svg"
import { Link } from 'react-router-dom'


const Register
 = () => {
  return (
    <div>
        <div className="container col-11 col-md-9" id="form-container">
            <div className="row gx-5">
                <div className="col-md-6">
                    <h3> Cadastro Pessoal 1/2</h3>
                    <form>

                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite o seu nome"/>
                            <label htmlFor="name" className="form-label">Digite o seu nome e sobrenome</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="date" 
                                className="form-control" 
                                placeholder="Digite o seu sobrenome"/>
                            <label htmlFor="lastname" className="form-label">Data de nascimento</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Digite o seu sobrenome"/>
                            <label htmlFor="lastname" className="form-label">Telefone</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Digite o seu e-mail"
                            />
                            <label htmlFor="email" className="form-label">Digite o seu e-mail</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password"
                                name="password"
                                placeholder="Digite a sua senha"/>
                                <label htmlFor="email" className="form-label">Digite a sua senha</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder="Confirme sua senha"/>
                                <label htmlFor="confirmpassword" className="form-label"> Confirme sua senha </label>
                        </div>

                        <div className="mb-3">
                            <div className="form-check mb-2">
                                <input 
                                    type="checkbox"
                                    className="form-check-input"
                                    value=""
                                    id="agree-form"
                                    name="agree-form"/>
                                <label htmlFor="agree-form" className="form-check-label">
                                    Você aceita os <a href="#">termos de serviço</a>
                                </label>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <Link className="me-3" to="/login">
                                <button className="btn btn btn-info text-white">Login</button>
                            </Link>
                            {/* <Link to="/register-adress">
                                <button className="btn btn btn-success">Cadastrar-se</button>
                            </Link> */}
                        </div>
                        

                    </form>
                </div>

                <div className="col-md-6">
                    <div className="row align-items-center">
                        <div className="col-12" id="link-container">
                            <Link to="/login">
                                <h5>Eu já tenho uma </h5>
                                <h5 className="text-primary">conta</h5>
                            </Link>
                        </div>
                        <div className="col-12">
                            <img src={imgLogin} alt="Hello New Customer" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
