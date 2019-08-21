import {createStackNavigator} from "react-navigation";
import {HomeScreen} from "./home";
import {DetailsScreen} from "./details";
import {ActivityIndicatorScreen} from "./ui/components/ActivityIndicator";
import {WidgetScreen} from "./ui/components/widget";
import {ButtonScreen} from "./ui/components/button";
import {DrawerLayout} from "./ui/components/drawerlayout";
import {FlatListScreen} from "./ui/components/flatlist";
import {ImageScreen} from "./ui/components/image";
import {KeyBoardScreen} from "./ui/components/KeyboardAvoidingViewScreen";
import {ModalScreen} from "./ui/components/modal";
import {PickerScreen} from "./ui/components/picker";
import {ProgressScreen} from "./ui/components/progress";
import {RefreshControlScreen} from "./ui/components/refreshcontrol";
import {SafeAreaViewScreen} from "./ui/components/safeareaview";
import {ScrollviewScreen} from "./ui/components/scrollview";
import {SelectionListScreen} from './ui/components/selectionlist';
import {SliderScreen} from './ui/components/slider';
import {StatusBarScreen} from './ui/components/statusbar';
import {SwitchScreen} from './ui/components/switch';
import {TextScreen} from "./ui/components/text";
import {TextInputScreen} from "./ui/components/textinput";
import {ToolBarScreen} from './ui/components/toolbarandroid';
import {TouchableHighlightScreen} from './ui/components/touchablehighlight';
import {TouchableNativeFeedbackScreen} from './ui/components/touchablenativefeedback';
import {TouchableOpacityScreen} from './ui/components/touchableOpacity';
import {ViewPagerAndroidScreen} from './ui/components/viewpagerandroid';
import {WebViewScreen} from './ui/components/webview';
import {APIScreen} from './ui/apis/apis';
import {AlertScreen} from './ui/apis/alert';
import {AnimatedScreen} from './ui/apis/animated';
import {AppStateScreen} from './ui/apis/appstate';
import {AsyncStorageScreen} from "./ui/apis/asyncstorage";
import {BackHandlerScreen} from "./ui/apis/backhandler";
import {CameraRollScreen} from "./ui/apis/cameraroll";
import {ClipboardScreen} from "./ui/apis/clipboard";
import {DatePickerAndroidScreen} from './ui/apis/datapickerandroid';
import {DimensionsScreen} from './ui/apis/dimensions';
import {InteractionManagerScreen} from './ui/apis/interactionmanager';
import {KeyboardScreen} from './ui/apis/keyboard';
import {LinkingScreen} from './ui/apis/linking';
import {PanResponderScreen} from './ui/apis/panresponder';
import {PermissionsAndroidScreen} from './ui/apis/permissions';
import {TimePickerAndroidScreen} from './ui/apis/timepickerandroid';
import {ToastAndroidScreen} from './ui/apis/toastandroid';

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
    APIS:APIScreen,
    ActivityIndicator: ActivityIndicatorScreen,
    Button:ButtonScreen,
    DrawerLayout:DrawerLayout,
    FlatList:FlatListScreen,
    Image1:ImageScreen,
    KeyboardAvoid:KeyBoardScreen,
    Modal:ModalScreen,
    Picker:PickerScreen,
    Progress:ProgressScreen,
    RefreshControl:RefreshControlScreen,
    SafeAreaView:SafeAreaViewScreen,
    ScrollView:ScrollviewScreen,
    SelectionList:SelectionListScreen,
    Slider:SliderScreen,
    StatusBar:StatusBarScreen,
    Switch:SwitchScreen,
    Text:TextScreen,
    TextInput: TextInputScreen,
    ToolbarAndroid: ToolBarScreen,
    TouchableHighlight: TouchableHighlightScreen,
    TouchableNativeFeedback: TouchableNativeFeedbackScreen,
    TouchableOpacity: TouchableOpacityScreen,
    ViewPagerAndroid: ViewPagerAndroidScreen,
    WebView: WebViewScreen,
    Alert: AlertScreen,
    Animated: AnimatedScreen,
    AppState: AppStateScreen,
    AsyncStorage: AsyncStorageScreen,
    BackHandler: BackHandlerScreen,
    CameraRoll: CameraRollScreen,
    Clipboard: ClipboardScreen,
    DatePickerAndroid: DatePickerAndroidScreen,
    Dimensions: DimensionsScreen,
    InteractionManager: InteractionManagerScreen,
    Keyboard: KeyboardScreen,
    Linking: LinkingScreen,
    PanResponder: PanResponderScreen,
    PermissionsAndroid: PermissionsAndroidScreen,
    TimePickerAndroid: TimePickerAndroidScreen,
    ToastAndroid: ToastAndroidScreen,
}, {
    initialRouteName: "Home"
});
