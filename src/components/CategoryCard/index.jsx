import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoryCard({ id, title, image }) {
  return (
    <Link to={`/categories/${id}`} className={s.cardLink}>
      <div className={s.card}>  
        <div className={s.imageContainer}>
          <img src={`http://localhost:3333${image}`} alt={title} />
        </div>
        <p className={s.title}>{title}</p>
      </div>
    </Link>
  );
}
