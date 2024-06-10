import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TabBar2 = () => {
  const navigation = useNavigation();

  return (
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
          <Text style={[styles.iconhome2, styles.iconhomeTypo]}>Find</Text>
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
          <Text style={[styles.iconhome2, styles.iconhomeTypo]}>{`Plan `}</Text>
          <Image
            style={[styles.streetSignCrossroadStreetIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/streetsigncrossroadstreetsignmetaphordirectionstravelplaces.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.tabBarItem4, styles.tabItemPosition]}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <Image
            style={styles.tabBarItemChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.iconhome, styles.iconhomeTypo]}>About Us</Text>
          <Image
            style={[styles.chatBubbleOvalSmiley1MesIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  tabBarItemChild: {
    top: 9,
    left: 5,
    width: 38,
    height: 48,
    position: "absolute",
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
    left: 0,
    height: 66,
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
    backgroundColor: Color.colorWhitesmoke,
    width: 359,
    height: 70,
    left: "50%",
    position: "absolute",
  },
});

export default TabBar2;
