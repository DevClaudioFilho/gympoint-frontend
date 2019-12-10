import React from 'react';
import { Form } from '@rocketseat/unform';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <div className="title">
        <h1>Cadastro de aluno</h1>
        <div id="teste">
          <button>VOLTAR</button>
          <button>SALVAR</button>
        </div>
      </div>
      <Form>
        <p>NOME COMPLETO</p>
        <input type="text" placeholder="John Doe" />
        <p>ENDEREÇO DE E-MAIL</p>
        <input type="text" placeholder="exemplo@email.com" />
        <p>IDADE</p>
        <input type="text" />
        <p>PESO (em Kg)</p>
        <input type="text" />
        <p>ALTURA</p>
        <input type="text" />
      </Form>
    </>
  );
}
