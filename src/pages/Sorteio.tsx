import { useState } from 'react'
import dinheiro from "../assets/dinheiro.jpg"
import ModalCriaUsuario from '../components/Modais/ModalCriaUsuario/ModalCriaUsuario';

const Sorteio = () => {
  const [openModalCriaUsuario, setOpenModalCriaUsuario] = useState(false);

  return (
    <div>
        <div className="container">
        <div className="row d-flex align-items-center mt-5">

          <div className="text-center my-3">
            <h1>GUGU DAS RIFA</h1>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="bg-white shadow-sm border rounded-3">

              <div className="text-center">
                <h3>Nome do prêmio</h3>
                <img className="rounded-3 img-dinheiro" src={dinheiro} alt="" />  
              </div>

              <div className="d-md-flex d-sm-block justify-content-center my-3 p-2">
                
                <div className="text-center mx-5">
                  <h6>Valor da cota unitaria</h6>
                  <div className="rounded-3 border border-2 p-1">
                    <h6>R$ 0.50</h6>
                  </div>
                </div>

                <div className="text-center mx-5">
                  <h6>Duvidas ?</h6>
                  <button className="btn btn-success btn-sm">WhatsApp</button>
                </div>

              </div>

            </div>

          </div>
          
          <div className="col-md-6 col-sm-12">
            <div className="my-4 shadow border rounded-3">
              
              <div className="text-center">
                <h3>Comprar cotas</h3>
                <h6>os numeros são gerados aleatoriamente</h6>
              </div>

              <div className="d-flex justify-content-center">

                <button className="cota-list shadow border-2 mx-1 rounded-3 btn btn-sm">
                  <h6>+ 01</h6>  
                </button>
                
                <button className="cota-list shadow border-2 mx-1 rounded-3 btn btn-sm">
                  <h6>+ 10</h6>  
                </button>
                
                <button className="cota-list shadow border-2 mx-1 rounded-3 btn btn-sm">
                  <h6>+ 25</h6>  
                </button>
                
                <button className="cota-list shadow border-2 mx-1 rounded-3 btn btn-sm">
                  <h6>+ 50</h6>  
                </button>
                
              </div>

              <div className="d-flex justify-content-center p-2 my-2">
                <button className="btn btn-success btn-sm"> + </button>
                <input type="number" className="form-control mx-3 custom-input" />
                <button className="btn btn-success btn-sm"> - </button>
              </div>

              <div className="text-center my-3">
                  <button 
                    className="btn btn-success btn-sm"
                    data-bs-backdrop="static"
                    onClick={() => setOpenModalCriaUsuario(true)} 
                    role="button"
                  >
                    Comprar cotas +
                  </button>
                  <ModalCriaUsuario
                    isOpen={openModalCriaUsuario} 
                    setClose={() => setOpenModalCriaUsuario(!openModalCriaUsuario)}
                  />
              </div>
            </div>
          </div>
          
        </div>

        <div className="row d-flex mt-5 shadow rounded-3 py-2 ">
          <div className="text-center">
            <h4>Informações importante</h4>
          </div>
          <div className="col-md-6 com-sm-12 p-3">
            <div className="shadow-sm border rounded-3 p-3 text-center">
              <h6>Pagamento apenas via pix</h6>
            </div>
          </div>
          <div className="col-md-6 com-sm-12 p-3">
            <div className="shadow-sm border rounded-3 p-3 text-center">
              <h6>Sorteio será realizado após a finalização da venda das cotas</h6>
            </div>
          </div>
        </div>

        <div className="row d-flex mt-5 shadow rounded-3 py-2">
          <div className="text-center">
            <h4>Descrição</h4>
          </div>
          
          <div className="text-center">
            <h6>Espaço destinado para descrever melhor o premio caso queira</h6>
          </div>

          <div className="text-center">
            <button className="btn btn-sm btn-warning fw-bold m-2">1° prêmio :  300 R$</button>
            <button className="btn btn-sm btn-warning fw-bold m-2">2° prêmio : 50 R$ para quem mais comprar cotas</button>
          </div>
        </div>
       
        <div className="row d-flex mt-5 shadow rounded-3 py-2">
          <div className="text-center">
            <h4>Regularmento</h4>
          </div>

          <div>

            <p>
              1° - Se a sua pergunta é sobre como e quando será realizado o sorteio, informamos que o sorteio acontecerá no dia 06 de maio, utilizando o número premiado pela loteria federal e nosso sistema. Entraremos em contato com o ganhador e também divulgaremos o resultado no Instagram. É importante que o nome e os dados fornecidos sejam corretos.
            </p>
            
            <p>
              2° - Se está com problemas na chave Pix, saiba que a única chave disponível está no site. Para utilizá-la, basta copiar e colar a chave na opção Pix do seu banco. Alguns bancos podem não aceitar esse formato de chave sem um motivo aparente.
            </p>
            <p>
              3° - Não há outra chave Pix disponível, apenas a que está no site.
            </p>
            <p>
              4° - Para encontrar a chave Pix, acesse o site, escolha a quantidade de números que deseja e faça o cadastro. Depois, será possível gerar a chave Pix, que pode ser copiada e colada no seu banco.
            </p>
            <p>
              5° - Seus números aparecerão como "COTAS" e poderão ser visualizados no site, na seção "MEUS PEDIDOS", utilizando o número de telefone cadastrado.
            </p>
            <p>
              6° - Os números são escolhidos aleatoriamente pelo sistema do site, portanto, não é possível escolher um número específico.
            </p>
            <p>
              7° - Não é necessário enviar comprovante de pagamento.
            </p>

          </div>
        </div>
       
        <div className="row d-flex mt-5 py-2 my-5">
          <div className="col-md-3 col-sm-12 p-2">
            <div className=" shadow rounded-3 border-3 p-2">
              <h2>Escolha o sorteio</h2>
              <p>Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos. Em caso de dúvidas entre em contato com o administrador.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 p-2">
            <div className=" shadow rounded-3 border-3 p-2">
              <h2>Escolha o sorteio</h2>
              <p>Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos. Em caso de dúvidas entre em contato com o administrador.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 p-2">
            <div className=" shadow rounded-3 border-3 p-2">
              <h2>Escolha o sorteio</h2>
              <p>Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos. Em caso de dúvidas entre em contato com o administrador.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 p-2">
            <div className=" shadow rounded-3 border-3 p-2">
              <h2>Escolha o sorteio</h2>
              <p>Escolha o prêmio que gostaria de concorrer, verifique a descrição, regulamento do sorteio e fotos. Em caso de dúvidas entre em contato com o administrador.</p>
            </div>
          </div>
         
        </div>
       
      </div>
      
    </div>

    
  )
}

export default Sorteio