import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

const News = () => {
  const [getNews, setGetNews] = useState('');
  const [date, setDate] = useState('');
  const [random] = useState(Math.ceil(Math.random() * 12));
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  // console.log(options);
  // console.log(getNews);

  useEffect(() => {
    const getNewsfetch = async () => {
      await fetch(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=970bd3fe7ddd4bc09bacad18661eba0e&q=India'
      )
        .then(async (data) => await data.json())
        .then((res) => setGetNews(res.articles[random]));
    };
    getNewsfetch();
  }, [random]);
  useEffect(() => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const format = dd + '-' + mm + '-' + yyyy;
    setDate(format);
  }, []);
  return (
    <div className={styles.NewsContainer}>
      <div
        className={styles.NewsImg}
        alt="NewsImg"
        style={{ backgroundImage: `url(${getNews.urlToImage})` }}
      >
        <div className={styles.NewsTitle}>
          {getNews.title}
          <div className={styles.NewsTime}>
            <span>{date} |</span>
            {new Date(getNews.publishedAt).toLocaleTimeString('en-us', options)}
          </div>
        </div>
      </div>
      <div className={styles.NewsDescription}>{getNews.description}</div>
    </div>
  );
};

export default News;
