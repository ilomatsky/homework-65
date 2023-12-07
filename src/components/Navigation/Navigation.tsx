import {NavLink} from 'react-router-dom';
import {pagesNames} from '../pages-names';

const Navigation = () => (
  <nav>
    <ul>
      {pagesNames.map((page) => (
        <li key={page.id}>
          <NavLink className="nav-link" to={`/pages/${page.id}`}>{page.title}</NavLink>
        </li>
      ))}
      <li>
        <NavLink className="nav-link" to="/pages/admin">Admin</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
