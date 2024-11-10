import styles from './Section-5.module.css'
import img1 from '/img.svg'
import img2 from '/img (1).svg'
import img3 from '/img (2).svg'
import { useState } from 'react'

function SectionFive(){

    const [index, setIndex] = useState(0)

    function countIndex(){
        if(index >= 2){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }

    setTimeout(countIndex, 1500)

    const image = [{
        src: img1
    },
    {
        src: img2
    },
    {
        src: img3
    }
]

    return(
        <div className={styles.wrapperSection}>
            <h1 className={styles.header}>
                Наслаждайтесь видами из окон своей квартиры
            </h1>
            <img src={image[index].src} alt="" />
        </div>
    )
}

export default SectionFive