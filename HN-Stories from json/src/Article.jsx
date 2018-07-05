import React, { Component } from 'react';
import './Article.css';
import ArticleSelection from './ArticleSelection';
import DATA_ARRAY from './data.js';


function Article() {
  return (
    <div>
      {
        DATA_ARRAY.hn.topStories.map((item) => { 
          let d = new Date(item.timeISO);
          let year = d.getFullYear();
          let date = d.getDate();
          let month = d.getMonth() + 1;
          let newDate = date + "-" + month + "-" + year;
          return (
            <ArticleSelection
              title={item.title}
              url={item.url}
              time={newDate}
              id={item.id}
              by={item.by.id}
              />
          )})
      }
    </div>
  );
} 
export default Article;

