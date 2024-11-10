import styles from './Section-2.module.css'
import Slide from '/slide.svg'
import When from '/when.svg'


function SectionTwo(){
    return(
        <div className={styles.wrapperImg}>
            <img src={Slide} alt="" />
            <img src={When} alt="" className={styles.icon}/>
        </div>
    )
}

export default SectionTwo