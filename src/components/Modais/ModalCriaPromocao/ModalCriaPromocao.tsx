import "./modalCriaPromocao.css"

interface ModalCriaPromocaoProps {
  isOpen: boolean;
  setClose: () => void;
}

const ModalCriaPromocao: React.FC<ModalCriaPromocaoProps> = ({ isOpen, setClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal fade show modal-backdropm" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" 
                role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Criando promoção</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={setClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
    
                    <div className="row d-flex">
    
                        <div className="col-12">
                            <label htmlFor="" className="fw-bold">Quantidade de cotas</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="" className="fw-bold">preço da promoção</label>
                            <input className="form-control" type="number"/>
                        </div>
    
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

export default ModalCriaPromocao;
