import styles from './Section-4.module.css'
import layout from '/Layout.svg'

function SectionFour(){
    return(
        <div className={styles.wrapperSection}>
            <div className={styles.title}>
	            <span>ПРЕСТИЖНОЕ РАСПОЛОЖЕНИЕ</span>
            </div>
            <h1 className={styles.headerSection}>
                Один из самых зеленых районов столицы - Раменки
            </h1>
            <img src={layout} alt="" />
        </div>
    )
}

export default SectionFour