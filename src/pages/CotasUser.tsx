import { Link } from "react-router-dom";

const CotasUser = () => {
  return (
    <div>
        
    <section className="container">
        <div className="row d-flex">
            <div className="col-12 m-3">
                <h3>Suas Cotas (Numero de telefone cadastrado)</h3>
            </div>
           
        </div>


        <div className="row d-flex justify-content-center">

            <div className="m-1 col-md-5 col-sm-12 border border-2 border-primary rounded bg-white shadow">
                
                <div className="d-flex justify-content-center border-bottom border-2 border-primary ">
                    <h5 className="text-center py-1">nome da rifa</h5>
                </div>

                <div>
                    {/* <!-- organizador e n° do sorteio --> */}
                    <div className="d-flex justify-content-between align-items-center px-1">
                        <div className="d-flex">
                            <span className="m-1">Organização: Gugu das rifas</span>
                        </div>
                        <div>
                            <h6>N°: sorteio</h6>
                        </div>
                    </div>

                    {/* <!-- img da rifa e lista de prêmios --> */}
                    <div className="d-flex align-items-center px-1">
                       
                        <div>
                            <img className="border border-2 rounded border-dark p-5" src="" alt=""/>
                        </div>
                        
                        <div className="ms-5">
                            <div className="d-flex align-items-center">
                                <h6 className="fw-bold">1° prêmio</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <h6 className="fw-bold">2° prêmio</h6>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Valor da rifa --> */}
                    <div className="d-flex justify-content-center align-items-center">
                        <h6 className="fw-bold">Valor da rifa: 00.50 R$</h6>
                    </div>

                    {/* <!-- Lista de cotas --> */}
                    <div className="">

                        <div className="border border-2 border-primary rounded p-2 text-center">
                            <h6 className="border-bottom border-2 border-primary ">cotas compradas</h6>
                            <div className="">
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                                <span className="fw-bold border border-2 border-primary rounded">58694</span> 
                            </div>
                        </div>

                    </div>

                    {/* <!-- Data de sorteio e link de venda --> */}
                    <div className="d-flex justify-content-between align-items-center p-1 mt-2 border-top border-2 border-primary ">
                        <div>
                            <h6>Data do sorteio: 01/02/2032</h6>
                        </div>
                        <div>
                            <Link to="/sorteio" className="btn btn-sm btn-success">
                                Comprar mais +
                            </Link>
                        </div>
                    </div>

                </div>
            </div> 
            
        </div>
        
    </section>

    </div>
  )
}

export default CotasUser