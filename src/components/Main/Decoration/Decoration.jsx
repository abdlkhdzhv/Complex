import styles from './Decoration.module.css'
import card from '/card — копия.svg'
import card2 from '/card (1) — копия.svg'
import card3 from '/card (2) — копия.svg'
function Decoration(){

    const cards = [card, card2, card3]
    
    return(
        <div className={styles.wrDec}>
            <h1>Отделка от застройщика</h1>
            <p className={styles.infoText}>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <img key={index} src={card} alt="" />
                ))}
            </div>
        </div>
    )
}

export default Decoration