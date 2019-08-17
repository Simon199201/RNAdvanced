import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "./home";
import {DetailsScreen} from "./details";

/**
 * ר�������������õ���
 * @type {NavigationContainer}
 */
export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen
    }
},{
    initialRouteName: "Home"
});
