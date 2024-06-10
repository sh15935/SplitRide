import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

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
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
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
  },
  frameChildLayout: {
    height: 53,
    width: 245,
  },
  congratulationName: {
    fontSize: 25,
    width: 318,
    height: 96,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  logIn: {
    top: 9,
    left: 78,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 12,
  },
  validation: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingTop: Padding.p_265xl,
    paddingRight: 12,
    paddingBottom: Padding.p_265xl,
  },
});

export default Validation;
