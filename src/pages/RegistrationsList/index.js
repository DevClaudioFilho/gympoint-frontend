import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'



import { Container, Title , Table } from './styles';

export default function RegistrationsList() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(()=>{
    async function getRegistrations(){
      const response = await api.get('/registrations');
      setRegistrations(response.data)
    }
    getRegistrations();
  },[])


  function handleDelete(id){
    api.delete(`registrations/${id}`)
    const response =  registrations.filter(student => student.id  !== id);
    setRegistrations(response)
    }

  return (
    <Container>
      <Title>
        <h1>Gerenciando Alunos</h1>
        <div>
        <Link to='/createregistrations'><button>Cadastrar</button></Link>
          <input 
          id="search-input"
          type="text" 
          placeholder="Buscar aluno"
          onChange={e =>
           e.target.value}
          />
        </div>
      </Title>
        <Table>
          <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
          </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.start_date}</td>
                <td>{registration.end_date}</td>
                <td><Link to={`registrations/${registration.id}`} >editar</Link></td>
                <td><button type='button' onClick={()=>handleDelete(registration.id)}>apagar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
  );
}
