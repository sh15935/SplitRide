const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./screens/HomePage";
import WelcomePage from "./screens/WelcomePage";
import SignIn from "./screens/SignIn";
import Validation from "./screens/Validation";
import LogIn from "./screens/LogIn";
import FindAStudent from "./screens/FindAStudent";
import SelectRegion from "./screens/SelectRegion";
import SelectDate from "./screens/SelectDate";
import AfterSearch from "./screens/AfterSearch";
import AboutUs from "./screens/AboutUs";
import PlanForATravel from "./screens/PlanForATravel";
import AddATravel from "./screens/AddATravel";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
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
              name="SelectDate"
              component={SelectDate}
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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
