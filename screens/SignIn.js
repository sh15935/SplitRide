import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Text style={styles.hey}>{`Hey (●'◡'●) `}</Text>
      <View style={styles.frameParent}>
        <View style={styles.groupChild} />
        <View style={styles.firstNameParent}>
          <Text style={[styles.firstName, styles.numberTypo]}>
            First Name* :
          </Text>
          <Text style={[styles.lastName, styles.keyWordTypo]}>
            Last Name* :
          </Text>
          <Text style={[styles.number, styles.numberTypo]}>Number* :</Text>
          <Text style={styles.gender}>Gender* :</Text>
          <Text style={[styles.keyWord, styles.keyWordTypo]}>Key Word* :</Text>
          <Text style={[styles.picture, styles.numberTypo]}> Picture :</Text>
        </View>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChild4Layout]}
        onPress={() => navigation.navigate("Validation")}
      >
        <View style={[styles.groupChild4, styles.groupChild4Layout]} />
        <Text style={styles.valide}>Validée</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  numberTypo: {
    height: 30,
    width: 164,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  keyWordTypo: {
    height: 29,
    width: 164,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 18,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    height: 28,
    width: 122,
    borderWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 182,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  groupChild4Layout: {
    width: 288,
    height: 48,
    position: "absolute",
  },
  hey: {
    top: 88,
    left: 82,
    width: 195,
    height: 48,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    top: 0,
    height: 505,
    width: 315,
    position: "absolute",
    overflow: "hidden",
  },
  firstName: {
    left: 18,
    height: 30,
    top: 0,
  },
  lastName: {
    top: 58,
  },
  number: {
    top: 115,
    left: 18,
    height: 30,
  },
  gender: {
    top: 173,
    height: 33,
    width: 164,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 18,
    color: Color.colorBlack,
    position: "absolute",
  },
  keyWord: {
    top: 234,
  },
  picture: {
    top: 283,
    left: 0,
  },
  firstNameParent: {
    top: 25,
    left: 11,
    width: 182,
    height: 313,
    position: "absolute",
  },
  groupItem: {
    top: 26,
  },
  groupInner: {
    top: 260,
  },
  rectangleView: {
    top: 311,
  },
  groupChild1: {
    top: 83,
  },
  groupChild2: {
    top: 141,
    width: 122,
    borderWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    left: 182,
  },
  groupChild3: {
    top: 200,
  },
  frameParent: {
    left: 21,
    height: 505,
    width: 315,
    top: 141,
    position: "absolute",
  },
  groupChild4: {
    borderRadius: 26,
    backgroundColor: Color.colorSilver,
    left: 0,
    top: 0,
  },
  valide: {
    top: 6,
    left: 87,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  rectangleParent: {
    top: 630,
    left: 36,
  },
  signIn: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SignIn;
