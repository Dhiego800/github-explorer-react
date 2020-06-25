import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
};
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

return (
  <>
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/">
        <FiChevronsLeft size={16} />
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/48865946?s=460" alt="Avatar" />
        <div>
          <strong>Repositorio/Repositorio</strong>
          <p>descrição descrição jaajkajkkak</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1808</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>67</strong>
          <span>Issues Abertos</span>
        </li>            
      </ul>
    </RepositoryInfo>

    <Issues>
      <Link to={`asas`}>
          <div>
            <strong>sadddsadsa</strong>
            <p>sdadadsasaddsa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
    </Issues>
  </>
  );
};

export default Repository;