import styles from './Form.module.css'
import Woman from '/public/Col2.png'
function Form(){

    function handleSubmit(e) {
        e.preventDefault();
      }

    return(
        <div className={styles.wrapperForm}>
            <div className={styles.infoCard}>
                <h3 className={styles.info}>СПЕЦИАЛЬНО ДЛЯ ВАС</h3>
                <h1>Персональная<br /> презентация West Garden</h1>
                <p>Подробнее расскажем про жилой комплекс</p>
                <p>Ознакомитесь со всеми планировками и ценами</p>
                <p>Прогуляетесь по благоустроенной набережной</p>
                <hr />
                <p>Закрепить за номером</p>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder='+7 ___ ___-__-__' className={styles.formInput}/>
                    <button className={styles.btn}>Записаться на презентацию</button>
                </form>
            </div>

            <div>
                <img src={Woman} alt="" className={styles.woman}/>
            </div>
        </div>
    )
}

export default Form