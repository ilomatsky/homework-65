import {useState, useEffect} from 'react';
import axiosApi from '../../axiosAPI';
import {pagesNames} from '../pages-names';
import {useNavigate} from 'react-router-dom';

const AdminPage = () => {
  const [selectedPage, setSelectedPage] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axiosApi.get(`/pages/${selectedPage}.json`);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error fetching content for editing:', error);
      }
    };

    fetchContent();
  }, [selectedPage]);

  const handleSave = async () => {
    try {
      await axiosApi.put(`/pages/${selectedPage}.json`, {content});
      navigate(`/pages/${selectedPage}`);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <select onChange={(e) => setSelectedPage(e.target.value)}>
        <option value="">Select a page to edit</option>
        {pagesNames.map((page) => (
          <option key={page.id} value={page.id}>
            {page.title}
          </option>
        ))}
      </select>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminPage;
