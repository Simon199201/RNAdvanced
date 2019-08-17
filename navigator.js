import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "./home";
import {DetailsScreen} from "./details";
import {ActivityIndicatorScreen} from "./ActivityIndicator";
import {WidgetScreen} from "./widget";

/**
 * 专门用来做导航用的类
 * @type {NavigationContainer}
 */
export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen
    },
    Widget: WidgetScreen,
    ActivityIndicator: ActivityIndicatorScreen
}, {
    initialRouteName: "Home"
});
