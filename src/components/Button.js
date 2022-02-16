import styles from '../styles/btn.module.scss';

function Button({ align, text, handleClick }) {
  return (
    <div className={`${styles.btn_wrap} ${align === 'center' ? 'center' : 'right'}`}>
      <button type="button" className={styles.btn} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
export default Button;
