import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input } from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,InfosBoby,InputContainer } from './styles';

export default function EditRegistrations() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getStudents(){
      const response = await api.get('/students')
      setStudents(response.data)
    }
    getStudents();
  },[]);

  async function handleSubmit(data){
    await api.put(`students/${students.id}`, data);
  }

  const student = students.find(e => e.id ===25)
  console.log(student)
  

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
          <Input name="name" label="Nome Completo" placeholder={`${students.name}`} />
          <Input name="email" label="E-mail" placeholder={`${students.email}`} />
          <InfosBoby>
            <Input 
            type="number" 
            name="age" 
            label="Idade"  
            placeholder={`${students.age}`} 
            defaultValue="ola"/>
            <Input 
            type="interger" 
            name="weight" 
            label="Peso (em kg)" 
            placeholder={`${students.weight}`} 
            defaultValue="ola" />
            <Input type="interger" name="height" label="Altura" placeholder={`${students.height}`} />
          </InfosBoby>
      </InputContainer>
      </Form>
    </Container>
  );
}
