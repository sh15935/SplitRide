import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Input } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState();
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "female", label: "female" },
    { value: "male", label: "male" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Text style={styles.hey}>{`Hey (●'◡'●) `}</Text>
      <View style={styles.signInChild} />
      <View style={styles.firstNameParent}>
        <Text style={styles.firstName}>First Name* :</Text>
        <Text style={styles.lastName}>Last Name* :</Text>
        <Text style={styles.number}>Number* :</Text>
        <Text style={[styles.gender, styles.genderTypo]}>Gender* :</Text>
        <Text style={[styles.keyWord, styles.genderTypo]}>Key Word* :</Text>
      </View>
      <Input
        style={[styles.signInItem, styles.signInItemBorder]}
        placeholder="Enter name"
      />
      <TextInput
        style={[styles.signInInner, styles.wrapperLayout]}
        placeholder="press a password"
        keyboardType="default"
        secureTextEntry={true}
      />
      <TextInput
        style={[styles.rectangleTextinput, styles.wrapperLayout]}
        placeholder="enter number "
        keyboardType="number-pad"
        autoCapitalize="none"
        multiline={false}
        maxLength={10}
        textContentType="telephoneNumber"
      />
      <View style={[styles.wrapper, styles.wrapperLayout]}>
        <DropDownPicker
          style={[styles.dropdownpicker, styles.signInInnerBorder]}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          placeholder="Ente your gender "
          items={rectangleDropdownItems}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Validation")}
      >
        <Pressable style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={styles.validate}>Validate</Text>
      </Pressable>
      <Input
        style={[styles.rectangleInput, styles.signInItemBorder]}
        placeholder="Enter name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
    borderStyle: "dashed",
    borderColor: "#000",
    borderRadius: 0.001,
    borderWidth: 1,
  },
  genderTypo: {
    width: 148,
    left: 28,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  signInItemBorder: {
    width: 122,
    left: 201,
    borderWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  wrapperLayout: {
    height: 28,
    width: 122,
    borderRadius: 0.001,
    borderStyle: "dashed",
    left: 201,
    position: "absolute",
  },
  signInInnerBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorGainsboro,
  },
  frameChildLayout: {
    width: 288,
    height: 48,
    position: "absolute",
  },
  hey: {
    top: 88,
    width: 195,
    height: 48,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    left: 82,
    position: "absolute",
  },
  signInChild: {
    top: 141,
    left: 21,
    borderRadius: Border.br_6xl,
    width: 315,
    height: 505,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  firstName: {
    width: 155,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 29,
    top: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  lastName: {
    top: 58,
    width: 149,
    height: 29,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    left: 29,
    color: Color.colorBlack,
    position: "absolute",
  },
  number: {
    top: 115,
    width: 164,
    left: 28,
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  gender: {
    top: 173,
    height: 33,
  },
  keyWord: {
    top: 234,
    height: 29,
  },
  firstNameParent: {
    top: 194,
    left: 10,
    width: 175,
    height: 278,
    position: "absolute",
  },
  signInItem: {
    top: 196,
  },
  signInInner: {
    top: 430,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorGainsboro,
    height: 28,
  },
  rectangleTextinput: {
    top: 311,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorGainsboro,
    height: 28,
  },
  dropdownpicker: {
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  wrapper: {
    top: 372,
  },
  frameChild: {
    left: 0,
    borderRadius: 26,
    backgroundColor: Color.colorSilver,
    top: 0,
    width: 288,
  },
  validate: {
    top: 6,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontStyle: "italic",
    fontSize: FontSize.size_11xl,
    left: 82,
    position: "absolute",
  },
  rectangleParent: {
    top: 630,
    left: 36,
  },
  rectangleInput: {
    top: 254,
  },
  signIn: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default SignIn;
