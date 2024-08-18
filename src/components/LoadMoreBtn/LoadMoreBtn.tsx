import React from 'react';
import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
    onClick: () => void;
  }
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
      <div className={css.container}>
        <button type="button" onClick={onClick} className={css.btn}>
          Load More
        </button>
      </div>
    );
  };
  
  export default LoadMoreBtn;