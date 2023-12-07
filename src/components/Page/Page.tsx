import {useState, useEffect} from 'react';
import axiosApi from '../../axiosAPI';
import {useParams} from 'react-router-dom';

const Page = () => {
  const {pageName} = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axiosApi.get(`/pages/${pageName}.json`);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [pageName]);

  return (
    <div>
      <h1>{pageName}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Page;
