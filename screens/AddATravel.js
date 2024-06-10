import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { Slider } from "@rneui/themed";
import TabBar4 from "../components/TabBar4";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const AddATravel = () => {
  const [rectangleDatePicker, setRectangleDatePicker] = useState(undefined);
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState();
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Driver", label: "Driver" },
    { value: "Rider", label: "Rider" },
  ]);
  const [rectangleSliderValue, setRectangleSliderValue] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.addATravel}>
      <TabBar4 />
      <View style={styles.front}>
        <View style={styles.bareRecherche}>
          <View style={styles.bareRechercheChild} />
          <Pressable
            style={[styles.recherche, styles.recherchePosition]}
            onPress={() => navigation.navigate("FindAStudent")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/recherche.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameItem} />
        <Text
          style={[styles.contentText, styles.addTypo]}
        >{`leaving from          :
Going to                 :
Date                        :

Num of passager :
Price                       :
You are a                :`}</Text>
        <View style={[styles.selectADate, styles.selectLayout]}>
          <RNKDatepicker
            date={rectangleDatePicker}
            onSelect={setRectangleDatePicker}
            status="basic"
            controlStyle={styles.rectangleDatePickerValue}
          />
        </View>
        <Pressable
          style={[styles.selectRegion1, styles.selectLayout]}
          onPress={() => navigation.navigate("SelectRegion")}
        >
          <View style={styles.selectRegion1Child} />
        </Pressable>
        <TextInput
          style={[styles.frameInner, styles.wrapperPosition]}
          keyboardType="decimal-pad"
          underlineColor="red"
        />
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <DropDownPicker
            style={[styles.dropdownpicker, styles.frameInnerBorder]}
            open={rectangleDropdownOpen}
            setOpen={setRectangleDropdownOpen}
            value={rectangleDropdownValue}
            setValue={setRectangleDropdownValue}
            placeholder="selct who you are "
            items={rectangleDropdownItems}
            dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
          />
        </View>
        <View style={[styles.frontContent, styles.frontContentLayout]}>
          <View style={[styles.frontContentChild, styles.frontContentLayout]} />
          <Text
            style={[styles.findAStudent, styles.addTypo]}
          >{`Find a student Driver  `}</Text>
        </View>
        <Pressable
          style={[styles.selectRegion2, styles.selectRegion2Position]}
          onPress={() => navigation.navigate("SelectRegion")}
        >
          <View style={styles.selectRegion1Child} />
        </Pressable>
        <Slider
          style={[styles.rectangleSlider, styles.selectRegion2Position]}
          minimumValue={1}
          maximumValue={7}
          orientation="horizontal"
          step="1"
          value={rectangleSliderValue}
          onValueChange={setRectangleSliderValue}
          thumbStyle={styles.rectangleSliderts}
          thumbTintColor="#ff0000"
          minimumTrackTintColor="#3f3f3f"
          maximumTrackTintColor="#b3b3b3"
        />
        <View style={[styles.search, styles.addLayout]}>
          <Pressable
            style={[styles.searchChild, styles.childLayout]}
            onPress={() => navigation.navigate("AfterSearch")}
          />
          <Text style={[styles.add, styles.addLayout]}>add</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDatePickerValue: {},
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#a6a6a6",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  rectangleSliderts: {
    height: 10,
    width: 10,
  },
  recherchePosition: {
    top: 6,
    position: "absolute",
  },
  addTypo: {
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignItems: "center",
  },
  selectLayout: {
    height: 22,
    width: 97,
    left: 210,
    position: "absolute",
  },
  wrapperPosition: {
    marginLeft: 51,
    height: 24,
    width: 99,
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameInnerBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorDarkgray_200,
  },
  frontContentLayout: {
    height: 49,
    width: 315,
    top: 0,
    position: "absolute",
  },
  selectRegion2Position: {
    marginLeft: 52,
    left: "50%",
    top: "50%",
    height: 22,
    width: 97,
    position: "absolute",
  },
  addLayout: {
    height: 45,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_16xl,
    left: 0,
  },
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    top: 0,
    height: 29,
    width: 234,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  recherche: {
    left: 206,
    width: 19,
    height: 19,
  },
  bareRecherche: {
    left: 67,
    height: 29,
    width: 234,
    top: 6,
    position: "absolute",
  },
  frameChild: {
    height: 31,
    width: 33,
  },
  image4Icon: {
    width: 29,
    marginTop: -31,
    height: 29,
  },
  frame: {
    top: 7,
    left: 313,
    overflow: "hidden",
    alignItems: "center",
    height: 31,
    width: 33,
    position: "absolute",
  },
  logoIcon: {
    width: 55,
    left: 0,
    top: 0,
    height: 46,
    position: "absolute",
  },
  front: {
    top: 64,
    left: 6,
    width: 346,
    height: 46,
    position: "absolute",
  },
  frameItem: {
    top: 17,
    height: 345,
    width: 315,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    position: "absolute",
  },
  contentText: {
    top: 61,
    left: 7,
    fontSize: FontSize.size_3xl,
    lineHeight: 31,
    color: Color.colorBlack,
    width: 200,
    height: 204,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  selectADate: {
    top: 137,
  },
  selectRegion1Child: {
    marginTop: -12,
    marginLeft: -49.5,
    height: 24,
    width: 99,
    left: "50%",
    top: "50%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkgray_200,
    position: "absolute",
  },
  selectRegion1: {
    top: 63,
  },
  frameInner: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorDarkgray_200,
    marginLeft: 51,
  },
  dropdownpicker: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorDarkgray_200,
  },
  wrapper: {
    marginTop: 66,
  },
  frontContentChild: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_16xl,
    left: 0,
  },
  findAStudent: {
    top: 5,
    left: 43,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    color: Color.colorWhite,
    width: 212,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frontContent: {
    left: 1,
  },
  selectRegion2: {
    marginTop: -85,
  },
  rectangleSlider: {
    marginTop: 4,
  },
  searchChild: {
    backgroundColor: Color.colorGray_200,
    height: 33,
    width: 268,
    top: 6,
    position: "absolute",
  },
  add: {
    left: 69,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    color: Color.colorGray_100,
    textAlign: "center",
    justifyContent: "center",
    width: 132,
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    alignItems: "center",
    height: 45,
    top: 0,
  },
  search: {
    top: 314,
    left: 24,
    width: 268,
  },
  rectangleParent: {
    top: 211,
    left: 22,
    width: 316,
    height: 362,
    position: "absolute",
  },
  addATravel: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default AddATravel;
