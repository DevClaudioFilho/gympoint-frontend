import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'



import { Container, Title , Table } from './styles';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getStudents(){
      const response = await api.get('/students');
      setStudents(response.data)
    }
    getStudents();
  },[])


  function handleDelete(id){
    api.delete(`students/${id}`)
    const response =  students.filter(student => student.id  !== id);
    setStudents(response)
    }

  return (
    <Container>
      <Title>
        <h1>Gerenciando Alunos</h1>
        <div>
        <Link to='/students'><button>Cadastrar</button></Link>
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
            <th>NOME</th>
            <th>EMAIL</th>
            <th>IDADE</th>
          </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td><Link to={`students/${student.id}`} >editar</Link></td>
                <td><button type='button' onClick={()=>handleDelete(student.id)}>apagar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
  );
}
