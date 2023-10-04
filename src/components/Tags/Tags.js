import React from 'react';
import styles from './Tags.module.css';

const Tags = ({ id, category, setCategory }) => {
  const handleTags = () => {
    const tagsidx = category.indexOf(id);
    category.splice(tagsidx, 1);
    setCategory([...category]);
  };
  const unselect = () => {
    setCategory(category.filter((category) => category !== id));
  };
  return (
    <div className={styles.tags}>
      {category.map((category, ids) => (
        <button key={ids} className={styles.addTags} onClick={handleTags}>
          {category}
          <span className={styles.remove} onClick={() => unselect(category)}>
            X
          </span>
        </button>
      ))}
    </div>
  );
};

export default Tags;
