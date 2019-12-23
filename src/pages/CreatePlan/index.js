import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input } from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,InfosBoby,InputContainer } from './styles';

export default function CreateStudent() {
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    async function getPlans(){
      const response = await api.get('/plans')
      setPlans(response.data)
    }
    getPlans();
  },[]);

  async function handleSubmit(data){
    console.log(data)
    await api.post('/plans', data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <Title>
        <h1>Cadastro de aluno</h1>
        <div>
          <Link to='/planslist'><button>VOLTAR</button></Link>
          <button type="submit">SALVAR</button>
        </div>
      </Title>  
      <InputContainer>
          <Input name="title" label="TÍTULO DO PLANO" placeholder="Claudio Martins Pinho" />
          <InfosBoby>
            <Input name="duration" label="DURAÇÃO(em meses)" />
            <Input type="number" name="price" label="PREÇO MENSAL"/>

            <Input 
            type="number" 
            name="price" 
            value={plans.duration * plans.price} 
            label="PREÇO TOTAL" />

          </InfosBoby>
      </InputContainer>
      </Form>
    </Container>
  );
}
