import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input } from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,InfosBoby,InputContainer } from './styles';

export default function CreateStudent() {
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
        <h1>Cadastro de aluno</h1>
        <div>
          <Link to='/studentslist'><button>VOLTAR</button></Link>
          <button type="submit">SALVAR</button>
        </div>
      </Title>  
      <InputContainer>
          <Input name="name" label="Nome Completo" placeholder="Claudio Martins Pinho" />
          <Input name="email" label="E-mail" />
          <InfosBoby>
            <Input type="number" name="age" label="Idade"/>
            <Input type="number" name="weight" label="Peso (em kg)" />
            <Input type="number" name="height" label="Altura" />
          </InfosBoby>
      </InputContainer>
      </Form>
    </Container>
  );
}
