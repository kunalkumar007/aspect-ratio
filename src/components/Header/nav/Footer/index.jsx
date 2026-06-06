import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a href="mailto:sales@aspectratio.tech">Email</a>
        <a href="tel:+918383022835">Call</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>
  )
}
