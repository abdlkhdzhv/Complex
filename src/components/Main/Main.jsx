import styles from './Main.module.css'
import SectionOne from './Nav/Section-1.jsx'
import SectionTwo from './Complex/Section-2.jsx'
import SectionThree from './InfoComplex/Section-3.jsx'
import SectionFour from './Location/Section-4.jsx'
import SectionFive from './Slider/Section-5.jsx'
import Form from './Form/Form.jsx'
import RumTur from './RumTur/RumTur.jsx'
import Privilege from './Privilege/Privilege.jsx'
import Test from './Test/Test.jsx'
import Decoration from './Decoration/Decoration.jsx'
import Regalia from './Regalia/Regalia.jsx'
import Conditions from './Сonditions/Сonditions.jsx'

function Main(){
  return (
    <div className={styles.wrapperMain}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Form />
      <RumTur />
      <Privilege />
      <Test />
      <Decoration />
      <Regalia />
      <Conditions />
    </div>
  )
}

export default Main