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
import {RefreshControlScreen} from "./refreshcontrol";
import {SafeAreaViewScreen} from "./safeareaview";
import {ScrollviewScreen} from "./scrollview";
import {SelectionListScreen} from './selectionlist';
import {SliderScreen} from './slider';
import {StatusBarScreen} from './statusbar';

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
    RefreshControl:RefreshControlScreen,
    SafeAreaView:SafeAreaViewScreen,
    ScrollView:ScrollviewScreen,
    SelectionList:SelectionListScreen,
    Slider:SliderScreen,
    StatusBar:StatusBarScreen,
}, {
    initialRouteName: "Home"
});
