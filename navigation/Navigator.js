import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import WelcomeScreen from '../screens/WelcomeScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import DetailsScreen from '../screens/DetailsScreen'
import CharactersScreen from '../screens/CharactersScreen'
import EpisodesScreen from '../screens/EpisodesScreen'
import LocationsScreen from '../screens/LocationsScreen'

const Navigator = createStackNavigator({
    Welcome: WelcomeScreen,
    Categories: CategoriesScreen,
    Details: DetailsScreen,
    Characters: CharactersScreen,
    Locations: LocationsScreen,
    Episodes: EpisodesScreen,

})

export default createAppContainer(Navigator)