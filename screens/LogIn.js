import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View style={styles.frameParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <Text style={[styles.number, styles.numberTypo]}>Number :</Text>
          <Text style={[styles.keyWord, styles.numberTypo]}>Key Word :</Text>
          <TextInput
            style={[styles.frameItem, styles.frameLayout]}
            placeholder="Press Yr Number"
            keyboardType="phone-pad"
            autoCapitalize="none"
            maxLength={10}
            textContentType="telephoneNumber"
          />
          <TextInput
            style={[styles.frameInner, styles.frameLayout]}
            placeholder="press your key  "
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
        </View>
        <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <Pressable
            style={[styles.rectanglePressable, styles.rectangleLayout]}
            onPress={() => navigation.navigate("HomePage")}
          />
          <Text style={[styles.connect, styles.logIn1Typo]}>{`connect `}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numberTypo: {
    height: 36,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    left: 19,
    position: "absolute",
  },
  frameLayout: {
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
  rectangleLayout1: {
    height: 51,
    width: 128,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorSilver,
    top: 0,
    left: 0,
  },
  logIn1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  rectangleLayout: {
    height: 59,
    width: 274,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 39,
    backgroundColor: Color.colorGainsboro,
    top: 0,
    height: 317,
    left: 0,
    width: 311,
    position: "absolute",
  },
  number: {
    top: 62,
    width: 157,
  },
  keyWord: {
    top: 149,
    width: 185,
  },
  frameItem: {
    top: 61,
  },
  frameInner: {
    top: 148,
  },
  rectangleParent: {
    top: 25,
    height: 317,
    left: 0,
    width: 311,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 44,
    height: 51,
    width: 128,
    position: "absolute",
  },
  logIn1: {
    top: 7,
    left: 16,
  },
  rectangleGroup: {
    left: 28,
    top: 0,
    width: 128,
  },
  rectanglePressable: {
    borderRadius: 42,
    backgroundColor: Color.colorSilver,
    top: 0,
    left: 0,
  },
  connect: {
    top: 12,
    left: 66,
    width: 141,
    height: 35,
  },
  rectangleContainer: {
    top: 312,
    left: 19,
    height: 59,
    width: 274,
  },
  frameParent: {
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
  },
});

export default LogIn;
