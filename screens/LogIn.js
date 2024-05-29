import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
        <Pressable
          style={styles.groupInner}
          onPress={() => navigation.navigate("HomePage")}
        />
        <Text style={[styles.connect, styles.logIn1Typo]}>{`connect `}</Text>
        <Text style={[styles.number, styles.numberTypo]}>Number :</Text>
        <Text style={[styles.keyWord, styles.numberTypo]}>Key Word :</Text>
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logIn1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  numberTypo: {
    height: 36,
    textAlign: "left",
    left: 19,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 39,
    width: 116,
    borderWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 185,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  groupChild: {
    top: 25,
    left: 0,
    borderRadius: 39,
    height: 317,
    backgroundColor: Color.colorGainsboro,
    width: 311,
    position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 28,
    borderRadius: 44,
    width: 128,
    height: 51,
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  logIn1: {
    top: 7,
    left: 47,
  },
  groupInner: {
    top: 312,
    borderRadius: 42,
    width: 274,
    height: 59,
    left: 19,
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  connect: {
    top: 317,
    left: 61,
    width: 186,
    height: 54,
  },
  number: {
    top: 87,
    width: 157,
  },
  keyWord: {
    top: 175,
    width: 185,
  },
  rectangleView: {
    top: 86,
  },
  groupChild1: {
    top: 173,
  },
  rectangleParent: {
    top: 225,
    left: 24,
    height: 371,
    width: 311,
    position: "absolute",
  },
  logIn: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LogIn;
