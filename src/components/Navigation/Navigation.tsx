import {Link} from 'react-router-dom';
import {pagesNames} from '../pages-names';

const Navigation = () => (
  <nav>
    <ul>
      {pagesNames.map((page) => (
        <li key={page.id}>
          <Link to={`/pages/${page.id}`}>{page.title}</Link>
        </li>
      ))}
      <li>
        <Link to="/pages/admin">Admin</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
