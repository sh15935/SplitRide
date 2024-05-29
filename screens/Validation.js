import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Validation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.validation}>
      <Text
        style={[styles.congratulationName, styles.logInTypo]}
      >{`Congratulation  Name !!
You’re compte created successfully 
`}</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.logIn, styles.logInTypo]}>{`Log In `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logInTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    position: "absolute",
  },
  groupChildLayout: {
    height: 53,
    width: 245,
    position: "absolute",
  },
  congratulationName: {
    top: 284,
    left: 30,
    fontSize: 25,
    width: 318,
    height: 116,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorSilver,
  },
  logIn: {
    top: 9,
    left: 77,
    fontSize: FontSize.size_11xl,
  },
  rectangleParent: {
    top: 392,
    left: 66,
  },
  validation: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Validation;
