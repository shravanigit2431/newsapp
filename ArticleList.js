import React from 'react';
import axios from 'axios';

const ArticleList = ({ articles, fetchArticles }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/api/articles/${id}');
      fetchArticles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <p><b>Author:</b> {article.author}</p>
          <button onClick={() => handleDelete(article._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;