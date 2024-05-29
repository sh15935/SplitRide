import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.logIn, styles.logInFlexBox]}>{`Log In `}</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.signIn, styles.logInFlexBox]}>{`Sign In `}</Text>
      </Pressable>
      <Image
        style={styles.logoSpliterideIcon}
        resizeMode="cover"
        source={require("../assets/logo-spliteride1.png")}
      />
      <Text
        style={[styles.welcomeToSpliteride, styles.logInFlexBox]}
      >{`Welcome to SpliteRide
`}</Text>
      <Text
        style={[styles.youreBestMobile, styles.logInFlexBox]}
      >{`you’re best mobile app as a student `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 53,
    width: 245,
    position: "absolute",
  },
  logInFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorSilver,
  },
  logIn: {
    left: 77,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    top: 9,
  },
  rectangleParent: {
    top: 530,
    left: 58,
    width: 245,
  },
  signIn: {
    left: 71,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    top: 9,
  },
  rectangleGroup: {
    top: 601,
    left: 58,
    width: 245,
  },
  logoSpliterideIcon: {
    top: 201,
    left: 14,
    width: 332,
    height: 254,
    position: "absolute",
  },
  welcomeToSpliteride: {
    top: 127,
    left: 35,
    width: 291,
    height: 72,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
  },
  youreBestMobile: {
    top: 460,
    left: 17,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 326,
    height: 59,
    display: "none",
  },
  welcomePage: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default WelcomePage;
