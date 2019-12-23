import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'



import { Container, Title , Table } from './styles';

export default function PlansList() {
  const [plans, setPlans] = useState([]);


  useEffect(()=>{
    async function getPlans(){
      const response = await api.get('/plans')
      setPlans(response.data)
    }
    getPlans();
  },[])


  function handleDelete(id){
    api.delete(`plans/${id}`)
    const response =  plans.filter(plan => plan.id  !== id);
    setPlans(response)
    }



  return (
    <Container>
      <Title>
        <h1>Gerenciando Alunos</h1>
        <div>
        <Link to='/createplans'><button>Cadastrar</button></Link>
        </div>
      </Title>
        <Table>
          <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration} mês</td>
                <td>R$ {plan.price}</td>
                <td><Link to={`plans/${plan.id}`} >editar</Link></td>
                <td><button type='button' onClick={()=>handleDelete(plan.id)}>apagar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
  );
}
