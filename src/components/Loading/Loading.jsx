import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loader}>
      {/* <div className={styles.spinner}></div> */}
      <p>Loading products...</p>
    </div>
  );
};
