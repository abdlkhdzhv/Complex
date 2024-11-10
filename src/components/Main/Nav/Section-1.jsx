import Logo from '/logo.svg';
import styles from './Section-1.module.css'

function SectionOne(){
  return (
        <div className={styles.wrapperSection}>
            <img src={Logo} alt="" />
            <h1 className={styles.header}>Жизнь в зеленом оазисе в статусном районе Москвы</h1>
            <p className={styles.infoText}>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        </div>
  )
}

export default SectionOne