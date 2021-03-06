import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  const user = useSelector(state => state.name);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber"></img>
          <Link to="/dashboard" />
          <Link to="/studentslist">ALUNOS</Link>
          <Link to="/planslist">PLANOS</Link>
          <Link to="/registrationslist">MATRÍCULAS</Link>
          <Link to="/students/help-orders">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <strong>teste</strong>
            <Link to="/profile">{user}</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
