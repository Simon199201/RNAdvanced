import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "./home";
import {DetailsScreen} from "./details";
import {ActivityIndicatorScreen} from "./ActivityIndicator";
import {WidgetScreen} from "./widget";
import {ButtonScreen} from "./button";
import {DrawerLayout} from "./drawerlayout";
import {FlatListScreen} from "./flatlist";
import {ImageScreen} from "./image";
import {KeyBoardScreen} from "./KeyboardAvoidingViewScreen";
import {ModalScreen} from "./modal";
import {PickerScreen} from "./picker";
import {ProgressScreen} from "./progress";

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
    },
    Widget: WidgetScreen,
    ActivityIndicator: ActivityIndicatorScreen,
    Button:ButtonScreen,
    DrawerLayout:DrawerLayout,
    FlatList:FlatListScreen,
    Image1:ImageScreen,
    Keyboard:KeyBoardScreen,
    Modal:ModalScreen,
    Picker:PickerScreen,
    Progress:ProgressScreen,
}, {
    initialRouteName: "Home"
});
