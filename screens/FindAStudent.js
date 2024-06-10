import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { Slider } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TabBar1 from "../components/TabBar1";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const FindAStudent = () => {
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
    <View style={styles.findAStudent}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Text
          style={[styles.contentText, styles.search1Typo]}
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
        <View style={[styles.search, styles.searchLayout]}>
          <Pressable
            style={[styles.searchChild, styles.childLayout]}
            onPress={() => navigation.navigate("AfterSearch")}
          />
          <Text style={[styles.search1, styles.searchLayout]}>search</Text>
        </View>
        <TextInput
          style={[styles.frameItem, styles.wrapperPosition]}
          keyboardType="decimal-pad"
          underlineColor="red"
        />
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <DropDownPicker
            style={[styles.dropdownpicker, styles.frameItemBorder]}
            open={rectangleDropdownOpen}
            setOpen={setRectangleDropdownOpen}
            value={rectangleDropdownValue}
            setValue={setRectangleDropdownValue}
            placeholder="driver or rider"
            items={rectangleDropdownItems}
            dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
          />
        </View>
        <View style={[styles.frontContent, styles.frontContentLayout]}>
          <View style={[styles.frontContentChild, styles.frontContentLayout]} />
          <Text
            style={[styles.findAStudent1, styles.search1Typo]}
          >{`Find a student Driver  `}</Text>
        </View>
        <Pressable
          style={[styles.selectRegion2, styles.frameInnerPosition]}
          onPress={() => navigation.navigate("SelectRegion")}
        >
          <View style={styles.selectRegion1Child} />
        </Pressable>
        <Slider
          style={[styles.frameInner, styles.frameInnerPosition]}
          minimumValue={1}
          maximumValue={7}
          orientation="horizontal"
          step="1"
          value={rectangleSliderValue}
          onValueChange={setRectangleSliderValue}
          thumbStyle={styles.rectangleSliderts}
          thumbTintColor="#000000"
          minimumTrackTintColor="#3f3f3f"
          maximumTrackTintColor="#b3b3b3"
        />
      </View>
      <TabBar1
        iconHome="Plan "
        streetSignCrossroadStreet={require("../assets/streetsigncrossroadstreetsignmetaphordirectionstravelplaces.png")}
        iconHome1="About Us"
        chatBubbleOvalSmiley1Mess={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile1.png")}
        onTabBarItemPress={() => navigation.navigate("WelcomePage")}
        onTabBarItemPress1={() => navigation.navigate("FindAStudent")}
        onTabBarItemPress2={() => navigation.navigate("HomePage")}
        onTabBarItemPress3={() => navigation.navigate("PlanForATravel")}
        onTabBarItemPress4={() => navigation.navigate("AboutUs")}
      />
      <View style={[styles.front, styles.frontLayout]}>
        <View style={[styles.bareRecherche, styles.bareLayout]}>
          <View style={[styles.bareRechercheChild, styles.bareLayout]} />
          <Pressable
            style={styles.recherche}
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
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.frameLayout}
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
          style={[styles.logoIcon, styles.frontLayout]}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
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
  search1Typo: {
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
  frameItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorDarkgray_200,
  },
  frontContentLayout: {
    height: 49,
    top: 0,
    width: 315,
    position: "absolute",
  },
  frameInnerPosition: {
    marginLeft: 52,
    left: "50%",
    top: "50%",
    height: 22,
    width: 97,
    position: "absolute",
  },
  searchLayout: {
    height: 45,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_16xl,
    left: 0,
  },
  frontLayout: {
    height: 46,
    position: "absolute",
  },
  bareLayout: {
    width: 234,
    height: 29,
    position: "absolute",
  },
  frameLayout: {
    height: 31,
    width: 33,
  },
  frameChild: {
    top: 17,
    height: 345,
    width: 315,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_16xl,
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
    height: 250,
    alignItems: "center",
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  selectADate: {
    top: 127,
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
  frameItem: {
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
  findAStudent1: {
    top: 5,
    left: 43,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    color: Color.colorWhite,
    width: 212,
    alignItems: "center",
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
  frameInner: {
    marginTop: 4,
  },
  searchChild: {
    backgroundColor: Color.colorGray_200,
    height: 33,
    top: 6,
    width: 268,
    position: "absolute",
  },
  search1: {
    left: 69,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    color: Color.colorGray_100,
    textAlign: "center",
    justifyContent: "center",
    width: 132,
    top: 0,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 45,
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
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    height: 29,
    top: 0,
    backgroundColor: Color.colorGainsboro,
    width: 234,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  recherche: {
    left: 206,
    width: 19,
    height: 19,
    top: 6,
    position: "absolute",
  },
  bareRecherche: {
    left: 67,
    height: 29,
    top: 6,
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
    position: "absolute",
  },
  logoIcon: {
    width: 55,
    top: 0,
    left: 0,
    height: 46,
  },
  front: {
    top: 64,
    left: 6,
    width: 346,
  },
  findAStudent: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default FindAStudent;
