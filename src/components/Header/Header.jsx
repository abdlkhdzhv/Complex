import Logo from '/Left.svg'
import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.header}>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.rightBlock}>
                +7 495 845 19 34
                <ul>
                    <li>
                        работаем
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header