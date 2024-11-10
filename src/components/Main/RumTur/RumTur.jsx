import styles from './RumTur.module.css'
import Card1 from '/1.svg'
import Card2 from '/2.svg'

function RumTur(){
    
    const cards = [Card1, Card2]

    return(
        <div className={styles.wrapperRumTur}>
            <h1>
                Современная эстетика лобби
            </h1>
            {cards.map((card, index) => (
                <img key={index} src={card} alt="" className={styles.card}/>
            ))}
        </div>
    )
}

export default RumTur