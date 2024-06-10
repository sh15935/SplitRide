import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AfterSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.afterSearch}>
      <View style={[styles.afterSearchChild, styles.afterLayout]} />
      <View style={[styles.afterSearchItem, styles.afterLayout]} />
      <View style={[styles.afterSearchInner, styles.afterLayout]} />
      <View style={styles.tabBar}>
        <View style={[styles.tabs, styles.iconPosition1]}>
          <Pressable
            style={[styles.tabBarItem, styles.tabItemPosition]}
            onPress={() => navigation.navigate("WelcomePage")}
          >
            <Text style={[styles.iconhome, styles.iconhomeTypo]}>Welcome</Text>
            <Image
              style={[styles.prayingHandIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/prayinghand1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.tabBarItem1, styles.tabItemPosition]}
            onPress={() => navigation.navigate("FindAStudent")}
          >
            <Image
              style={styles.tabBarItemChild}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Pressable
              style={[styles.tabBarItem2, styles.tabItemPosition]}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={[styles.homeIcon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/home.png")}
              />
              <Text style={[styles.iconhome1, styles.iconhomeTypo]}>Home</Text>
            </Pressable>
            <Text
              style={[styles.iconhome2, styles.iconhomeTypo]}
            >{`Find `}</Text>
            <Image
              style={styles.steeringWheelIcon}
              contentFit="cover"
              source={require("../assets/steeringwheel.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.tabBarItem3, styles.tabItemPosition]}
            onPress={() => navigation.navigate("PlanForATravel")}
          >
            <Text
              style={[styles.iconhome2, styles.iconhomeTypo]}
            >{`Plan `}</Text>
            <Image
              style={[
                styles.streetSignCrossroadStreetIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/streetsigncrossroadstreetsignmetaphordirectionstravelplaces.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.tabBarItem4, styles.tabItemPosition]}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={[styles.iconhome, styles.iconhomeTypo]}>About Us</Text>
            <Image
              style={[styles.chatBubbleOvalSmiley1MesIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile2.png")}
            />
          </Pressable>
        </View>
      </View>
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
  afterLayout: {
    height: 133,
    width: 294,
    borderRadius: Border.br_xl,
    left: 34,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  iconPosition1: {
    overflow: "hidden",
    position: "absolute",
  },
  tabItemPosition: {
    width: 48,
    top: 0,
    height: 66,
    left: "50%",
    position: "absolute",
  },
  iconhomeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    bottom: 17,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: 14,
    top: 15,
    overflow: "hidden",
    position: "absolute",
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
  afterSearchChild: {
    top: 149,
  },
  afterSearchItem: {
    top: 295,
  },
  afterSearchInner: {
    top: 441,
  },
  iconhome: {
    marginLeft: -21,
  },
  prayingHandIcon: {
    height: "33.33%",
    width: "41.67%",
    top: "22.73%",
    right: "29.17%",
    bottom: "43.94%",
    left: "29.17%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  tabBarItem: {
    marginLeft: -127.5,
  },
  tabBarItemChild: {
    top: 5,
    left: 4,
    width: 38,
    height: 48,
    position: "absolute",
  },
  homeIcon: {
    top: 13,
    left: 12,
    width: 24,
    height: 24,
  },
  iconhome1: {
    marginLeft: -14,
  },
  tabBarItem2: {
    marginLeft: -76,
  },
  iconhome2: {
    marginLeft: -10,
  },
  steeringWheelIcon: {
    left: 13,
    width: 21,
    height: 22,
    top: 15,
    overflow: "hidden",
    position: "absolute",
  },
  tabBarItem1: {
    marginLeft: -23.5,
  },
  streetSignCrossroadStreetIcon: {
    width: 20,
    height: 18,
  },
  tabBarItem3: {
    marginLeft: 28.5,
  },
  chatBubbleOvalSmiley1MesIcon: {
    width: 22,
    height: 22,
  },
  tabBarItem4: {
    marginLeft: 80.5,
  },
  tabs: {
    top: 4,
    right: 0,
    height: 66,
    left: 0,
    overflow: "hidden",
  },
  tabBar: {
    marginLeft: -179,
    bottom: 2,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 359,
    height: 70,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke,
  },
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    height: 29,
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro,
    width: 234,
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
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  logoIcon: {
    width: 55,
    top: 0,
    left: 0,
  },
  front: {
    top: 64,
    left: 6,
    width: 346,
  },
  afterSearch: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default AfterSearch;
