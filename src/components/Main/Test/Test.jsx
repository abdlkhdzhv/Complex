import test from '/0.svg'
import styles from './Test.module.css'

function Test(){
    return(
        <div className={styles.test}>
            <img src={test} alt="" width='1180px'/>
        </div>
    )
}

export default Test