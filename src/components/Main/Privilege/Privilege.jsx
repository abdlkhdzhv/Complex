import styles from './Privilege.module.css'
import card1 from '/card.svg'
import card2 from '/card (1).svg'
import card3 from '/card (2).svg'
import card4 from '/card (3).svg'

function Privilege(){

    const privilege = [card1, card2, card3, card4]

    return(
        <div className={styles.wrappCards}>
            <h1>Более 100 свободных квартир редких форматов</h1>
            {privilege.map((card, index) => (
                <img key={index} src={card} alt="" className={styles.card}/>
            ))}
        </div>
    )
}

export default Privilege