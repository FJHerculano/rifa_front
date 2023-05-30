import { useState } from 'react'
import { Link } from "react-router-dom";

import ModalCriaSorteio from '../components/Modais/ModalCriaSorteio/ModalCriaSorteio';
import ModalCriaPremio from '../components/Modais/ModalCriaPremio/ModalCriaPremio';
import ModalCriaPromocao from '../components/Modais/ModalCriaPromocao/ModalCriaPromocao';
import ModalEditaSorteio from '../components/Modais/ModalEditaSorteio/ModalEditaRifa';

const GereSorteio = () => {
    const [openModalCriaSorteio, setOpenModalCriaSorteio] = useState(false);
    const [openModalCriaPremio, setOpenModalCriaPremio] = useState(false);
    const [openModalCriaPromocao, setOpenModalCriaPromocao] = useState(false);
    const [openModalEditaSorteio, setOpenModalEditaSorteio] = useState(false);

    return (
        <div>
            
        <section className="container">
            <div className="row d-flex">
                <div className="col-12 my-3">
                    <h3>Dashboard das rifas</h3>
                </div>
        
                <div className="col-12 d-flex justify-content-center p-2">
                    <button 
                        data-bs-backdrop="static"
                        className='btn btn-sm btn-success m-1'
                        onClick={() => setOpenModalCriaSorteio(true)} 
                        // href="#criar_rifa"
                        role="button"
                    >
                        Adicionar uma nova rifa +
                    </button>
                   
                    <ModalCriaSorteio
                        isOpen={openModalCriaSorteio} 
                        setClose={() => setOpenModalCriaSorteio(!openModalCriaSorteio)}
                    />


                </div>
            </div>
        
            <div className="row d-flex justify-content-center rounded-3 shadow p-2">
        
                <div className="col-12 d-flex justify-content-center">
                    <h5 className="text-center py-1">nome</h5>
                    <button 
                        data-bs-backdrop="static"
                        className="btn btn-sm btn-warning m-1 fw-bold"
                        onClick={() => setOpenModalEditaSorteio(true)} 
                        // href="#editar_rifa"
                        role="button"
                    >
                        editar rifa
                    </button>

                    <ModalEditaSorteio
                        isOpen={openModalEditaSorteio} 
                        setClose={() => setOpenModalEditaSorteio(!openModalEditaSorteio)}
                    />

                </div>
        
                <div className="m-1 col-lg-5 col-md-12 col-sm-12 border border-2 border-primary rounded bg-white shadow">
                    <div>
                        {/* <!-- organizador e n° do sorteio --> */}
                        <div className="d-flex justify-content-between align-items-center px-1">
                            <div className="d-flex">
                                <span className="m-1">Organização: gugu@rifa</span>
                            </div>
                            <div>
                                <h6>N°: 1</h6>
                            </div>
                        </div>
        
                        {/* <!-- img da rifa e lista de prêmios --> */}
                        <div className="d-flex justify-content-between align-items-center px-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img className="border border-2 rounded border-dark p-5" src="" alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="text-center">
                                    <button 
                                        data-bs-backdrop="static"
                                        className="btn btn-sm btn-success m-1"
                                        onClick={() => setOpenModalCriaPremio(true)} 
                                        //href="#criar_premios"
                                        role="button"
                                    >
                                        Adicionar prêmio +
                                    </button>
                                    
                                    <ModalCriaPremio
                                        isOpen={openModalCriaPremio} 
                                        setClose={() => setOpenModalCriaPremio(!openModalCriaPremio)}
                                    />
                                
                                </div>
                            </div>
                        </div>
        
                        {/* <!-- Valor da rifa --> */}
                        <div className="d-flex justify-content-center align-items-center">
                            <h6 className="fw-bold">Valor da rifa: 2,00 R$</h6>
                        </div>
        
                        {/* <!-- Adicionar promoções --> */}
                        <div className="d-flex justify-content-center align-items-center mt-2">
                            <button 
                                className="btn btn-sm btn-success m-1"
                                data-bs-backdrop="static"
                                onClick={() => setOpenModalCriaPromocao(true)} 
                                //href="#criar_promocao"
                                role="button"
                            >
                                Adicionar promoções +
                            </button>
                            
                            <ModalCriaPromocao
                                isOpen={openModalCriaPromocao} 
                                setClose={() => setOpenModalCriaPromocao(!openModalCriaPromocao)}
                            /> 

                        </div>
        
                        {/* <!-- Lista de promoções --> */}
                        <div className="">
        
                            <div className="border border-2 border-primary rounded p-1 text-center">
                                <div className="border-bottom border-2 border-primary">
                                    <span className="fw-bold">10 cotas = 04.00 R$</span> 
                                </div>
                                <div className="border-bottom border-2 border-primary">
                                    <span className="fw-bold">10 cotas = 04.00 R$</span> 
                                </div> 
                                <div className="border-bottom border-2 border-primary">
                                    <span className="fw-bold">10 cotas = 04.00 R$</span> 
                                </div>
                                <div className="border-bottom border-2 border-primary">
                                    <span className="fw-bold">10 cotas = 04.00 R$</span> 
                                </div>
                            </div>
        
                        </div>
        
                        {/* <!-- Data de sorteio e link de venda --> */}
                        <div className="d-flex justify-content-between align-items-center p-1 mt-2 border-top border-2 border-primary ">
                            <div>
                                <span>Data do sorteio: 04/05/2023</span>
                            </div>
                            <div>
                                <Link to="/sorteio" className="btn btn-sm btn-primary">
                                    Link de venda
                                </Link>
                            </div>
                        </div>
        
                    </div>
                    
                </div> 
            
                {/* <!-- Descrição --> */}
                <div className="col-lg-5 col-md-12 col-sm-12 mt-5 shadow rounded-3 py-2">
                    
                    <div className="text-center">
                        <h6>Prêmios deste sorteio</h6>
                        <div className="d-flex">
                            <p className="btn btn-sm btn-warning fw-bold m-2">1° prêmio : 50 R$ para quem mais comprar cotas</p>
                            <button className="btn btn-sm bg-danger m-1 ">e</button>
                        </div>
                        <div className="d-flex">
                            <p className="btn btn-sm btn-warning fw-bold m-2">1° prêmio : 50 R$ para quem mais comprar cotas</p>
                            <button className="btn btn-sm bg-danger m-1 ">e</button>
                        </div>
                    </div>
        
                    <div>
                        <div className="text-center">
                            <h4>Descrição</h4>
                        </div>
                    </div>    
                    <div>    
                        <div className="text-center">
                            <textarea className="form-control my-2" defaultValue="Descrição"/>
                        </div>
                    </div>
        
                </div>
                
                <div className="row text-center mt-3">
                    <div>
                        <Link to="/sortear" className="btn btn btn-success">Sortear</Link>
                    </div>
                </div>
            </div>
        
        
        
        </section>

        </div>
    )
}

export default GereSorteio