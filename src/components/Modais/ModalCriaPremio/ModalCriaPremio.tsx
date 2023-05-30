import "./modalCriaPremio.css"

interface ModalCriaPremioProps {
  isOpen: boolean;
  setClose: () => void;
}

const ModalCriaPremio: React.FC<ModalCriaPremioProps> = ({ isOpen, setClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal fade show modal-backdropm" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" 
                role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Criando um novo prêmio</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={setClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body justify-content-center">

              <div className="modal-body">
                <div className="container">
                    <form method="POST">
                      <div className="row d-flex">

                        <div className="col-12">
                            <label htmlFor="" className="fw-bold">Nome do prêmio</label>
                            <input className="form-control" type="text" name="descricao_premio" id="descricao_premio"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="" className="fw-bold">numero do prêmio</label>
                            <input className="form-control" type="number" name="numero_premio" id="numero_premio/"/>
                        </div>
                         {/* <input type="hidden" name="sorteio_id" value="{{ sorteio.id }}"/> */}

                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </div>

                      </div>                        
                    </form>
                </div>
            </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">

                <div className="row">
                  <div className='d-flex'>
                    <button className='btn btn-danger mx-1 btn-sm' data-dismiss="modal" onClick={setClose}>Sair</button>
                    <button className='btn btn-success btn-sm'>Salvar</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCriaPremio;
