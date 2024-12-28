import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>News App</h1>
      <ArticleForm fetchArticles={fetchArticles} />
      <ArticleList articles={articles} fetchArticles={fetchArticles} />
    </div>
  );
};

export default App;