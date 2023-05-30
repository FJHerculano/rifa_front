import "./modalCriaSorteio.css"

interface ModalCriaSorteioProps {
  isOpen: boolean;
  setClose: () => void;
}

const ModalCriaSorteio: React.FC<ModalCriaSorteioProps> = ({ isOpen, setClose }) => {
  return (
    <>
      {isOpen && (
        
        <div 
          className="modal fade show modal-backdropm" 
          tabIndex={-1} 
          role="dialog" 
          style={{display: 'block'}}

        >
          <div className="modal-dialog modal-dialog-centered " 
                role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Criando sorteio</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={setClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body justify-content-center">

            
                <div className="container">
                    <form method="POST">
                
                        <div className="row d-flex">
                            <div className="col-12">
                                <label htmlFor="nome" className="fw-bold">Nome da rifa</label>
                                <input className="form-control" type="text" name="nome" id="nome"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="qtd_bilhetes" className="fw-bold">Quantidade de bilhetes</label>
                                <input className="form-control" type="text" name="qtd_bilhetes" id="qtd_bilhetes"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="valor_unitario" className="fw-bold">Valor unitário</label>
                                <input className="form-control" type="text" name="preco" id="preco"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="data_sorteio" className="fw-bold">Data do sorteio</label>
                                <input className="form-control" type="date" name="data_sorteio" id="data_sorteio"/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="descricao" className="fw-bold">Descrição da rifa</label>
                                <textarea className="form-control" name="descricao" id="descricao"></textarea>
                            </div>
                            <div className="col-12">
                                <label htmlFor="foto" className="fw-bold">Adicionar foto</label>
                                <input className="form-control" type="file" id="foto"  name="image_sorteio"/>
                            </div>
                            <div className="text-center mt-3">
                                <input className="form-check-input" type="checkbox" id="status"/>
                                <label className="form-check-label" htmlFor="sorteio_ativo">
                                    Sorteio ativo
                                </label>
                            </div>
                        </div>
                
                        <div className="text-center mt-3">
                          <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
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

export default ModalCriaSorteio;
