import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <Pressable
        style={[styles.signInWrapper, styles.frameChildLayout]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.signIn, styles.logInFlexBox]}>{`Sign In `}</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.logIn, styles.logInFlexBox]}>{`Log In `}</Text>
      </Pressable>
      <Image
        style={styles.logoSpliterideIcon}
        contentFit="cover"
        source={require("../assets/logo-spliteride.png")}
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
  frameChildLayout: {
    height: 53,
    width: 245,
    position: "absolute",
  },
  logInFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
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
  signInWrapper: {
    top: 601,
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_17xl,
    width: 245,
    left: 58,
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_17xl,
    width: 245,
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
  },
});

export default WelcomePage;
