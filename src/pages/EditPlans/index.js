import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input } from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,InfosBoby,InputContainer } from './styles';

export default function EditPlans(){
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    async function getPlans(){
      const response = await api.get('/plans')
      setPlans(response.data)
    }
    getPlans();
  },[]);

  async function handleSubmit(data){
    await api.put(`plans/${plans.id}`, data);
  }
  
  const plan = plans.find(e => e.id ===1)
  console.log(plan)

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <Title>
        <h1>Edição de aluno</h1>
        <div>
          <Link to='/studentslist'><button>VOLTAR</button></Link>
          <button type="submit">SALVAR</button>
        </div>
      </Title>  
      <InputContainer>
          <Input name="name" label="Nome Completo" placeholder={`${plans.name}`} />
          <Input name="email" label="E-mail" placeholder={`${plans.email}`} />
          <InfosBoby>
            <Input type="number" name="age" label="Idade"  placeholder={`${plans.age}`}/>
            <Input type="number" name="weight" label="Peso (em kg)" placeholder={`${plans.weight}`} />
            <Input type="number" name="height" label="Altura" placeholder={`${plans.height}`} />
          </InfosBoby>
      </InputContainer>
      </Form>
    </Container>
  );
}
