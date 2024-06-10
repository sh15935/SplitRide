const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import WelcomePage from "./screens/WelcomePage";
import SignIn from "./screens/SignIn";
import Validation from "./screens/Validation";
import LogIn from "./screens/LogIn";
import FindAStudent from "./screens/FindAStudent";
import SelectRegion from "./screens/SelectRegion";
import AfterSearch from "./screens/AfterSearch";
import AboutUs from "./screens/AboutUs";
import PlanForATravel from "./screens/PlanForATravel";
import AddATravel from "./screens/AddATravel";
import Profile from "./screens/Profile";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomePage"
                component={WelcomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Validation"
                component={Validation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FindAStudent"
                component={FindAStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectRegion"
                component={SelectRegion}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AfterSearch"
                component={AfterSearch}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AboutUs"
                component={AboutUs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanForATravel"
                component={PlanForATravel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddATravel"
                component={AddATravel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <AfterSearch />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
