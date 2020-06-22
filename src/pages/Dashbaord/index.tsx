import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return(
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite nome do repositórios aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
          alt="Avatar Dev"/>

          <div>
            <strong>repo/test1</strong>
            <p>SAASASS saskamspoakm,sopas ksamspoaksoaskl poskaósklspáklspá posakás</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
          alt="Avatar Dev"/>

          <div>
            <strong>repo/test1</strong>
            <p>SAASASS saskamspoakm,sopas ksamspoaksoaskl poskaósklspáklspá posakás</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
          alt="Avatar Dev"/>

          <div>
            <strong>repo/test1</strong>
            <p>SAASASS saskamspoakm,sopas ksamspoaksoaskl poskaósklspáklspá posakás</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;