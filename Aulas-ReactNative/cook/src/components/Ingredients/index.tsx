import { ScrollView } from 'react-native';
import Ingredient from '../Ingredient';
import { styles } from './styles';

const Ingredients = () => {
  return (
    <ScrollView  style = {styles.container}>
        {Array.from({length:100}).map
            ((item, index) => (
                <Ingredient key={index}/>
            ))
        }
    </ScrollView>
  )
}

export default Ingredients;