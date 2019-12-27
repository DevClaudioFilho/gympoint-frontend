import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input } from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,InfosBoby,InputContainer } from './styles';

export default function CreateRegistration() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getStudents(){
      const response = await api.get('/students')
      setStudents(response.data)
    }
    getStudents();
  },[]);

  async function handleSubmit(data){
    console.log(data)
    await api.post('/students', data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <Title>
        <h1>Cadastro de Matricula</h1>
        <div>
          <Link to='/studentslist'><button>VOLTAR</button></Link>
          <button type="submit">SALVAR</button>
        </div>
      </Title>  
      <InputContainer>
          <Input name="" label="ALUNO" placeholder="Claudio Martins Pinho" />
          <InfosBoby>
            <Input type="text" name="" label="PLANO"/>  
            <Input type="date" name="start_date" label="DATA DE INÍCIO"/>
            <Input type="date" name="end_date" label="DATA DE TERMINO" />
            <Input type="number" name="price" label="VALOR TOTAL" />
          </InfosBoby>
      </InputContainer>
      </Form>
    </Container>
  );
}
