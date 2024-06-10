import * as React from "react";
import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TabBar1 from "../components/TabBar1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SelectRegion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectRegion}>
      <View style={styles.frame}>
        <TextInput style={[styles.frameChild, styles.frameLayout1]} />
        <Text style={[styles.adresse, styles.cityLayout]}>Adresse :</Text>
        <TextInput style={[styles.frameItem, styles.frameLayout1]} />
        <View style={[styles.frame1, styles.cityLayout]}>
          <Text style={[styles.city, styles.cityPosition]}>{`City :
`}</Text>
          <Text style={[styles.city, styles.cityPosition]}>{`City :
`}</Text>
        </View>
        <Pressable
          style={[styles.frame2, styles.frameLayout]}
          onPress={() => navigation.navigate("FindAStudent")}
        >
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={[styles.validate, styles.cityTypo]}>validate</Text>
        </Pressable>
      </View>
      <TabBar1
        iconHome="About Us"
        streetSignCrossroadStreet={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile2.png")}
        iconHome1="Plan "
        chatBubbleOvalSmiley1Mess={require("../assets/streetsigncrossroadstreetsignmetaphordirectionstravelplaces.png")}
        propMarginLeft={80.5}
        propMarginLeft1={-21}
        propWidth={22}
        propHeight={22}
        propMarginLeft2={28.5}
        propMarginLeft3={-10}
        propWidth1={20}
        propHeight1={18}
        onTabBarItemPress={() => navigation.navigate("WelcomePage")}
        onTabBarItemPress1={() => navigation.navigate("FindAStudent")}
        onTabBarItemPress2={() => navigation.navigate("HomePage")}
        onTabBarItemPress3={() => navigation.navigate("AboutUs")}
        onTabBarItemPress4={() => navigation.navigate("PlanForATravel")}
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
          style={[styles.frame3, styles.frame3Layout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.frame3Layout}
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
  frameLayout1: {
    height: 45,
    width: 258,
    borderWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorBlack,
    borderStyle: "dashed",
    backgroundColor: Color.colorDarkgray_100,
    position: "absolute",
  },
  cityLayout: {
    height: 23,
    position: "absolute",
  },
  cityPosition: {
    left: 0,
    top: 0,
  },
  frameLayout: {
    height: 33,
    width: 254,
    position: "absolute",
  },
  cityTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
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
  frame3Layout: {
    height: 31,
    width: 33,
  },
  frameChild: {
    top: 170,
    left: 37,
  },
  adresse: {
    top: 138,
    width: 91,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    height: 23,
    left: 21,
  },
  frameItem: {
    top: 84,
    left: 35,
  },
  city: {
    width: 55,
    height: 23,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  frame1: {
    top: 50,
    width: 55,
    left: 21,
    overflow: "hidden",
  },
  frameInner: {
    borderRadius: 22,
    backgroundColor: Color.colorBlack,
    left: 0,
    top: 0,
  },
  validate: {
    top: 3,
    left: 46,
    color: Color.colorWhite,
    width: 153,
    height: 28,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  frame2: {
    top: 280,
    left: 31,
    overflow: "hidden",
  },
  frame: {
    top: 173,
    left: 16,
    borderRadius: Border.br_6xl,
    width: 330,
    height: 323,
    overflow: "hidden",
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    height: 29,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGainsboro,
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
  frame3: {
    top: 7,
    left: 313,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  logoIcon: {
    left: 0,
    top: 0,
    width: 55,
  },
  front: {
    top: 64,
    left: 6,
    width: 346,
  },
  selectRegion: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default SelectRegion;
