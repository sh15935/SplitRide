import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PlanForATravel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.planForATravel}>
      <View style={styles.front}>
        <View style={[styles.frontChild, styles.frontChildLayout]} />
        <Image
          style={[styles.image3Icon, styles.frontItemPosition]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={[styles.frontItem, styles.frontItemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.image2Icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={[styles.image4Icon, styles.frontChildLayout]}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
        <Image
          style={styles.logoSpliterideIcon}
          resizeMode="cover"
          source={require("../assets/logo-spliteride.png")}
        />
      </View>
      <View style={styles.tabBar}>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <Pressable
            style={[styles.tabBarItem, styles.tabItemPosition]}
            onPress={() => navigation.navigate("WelcomePage")}
          >
            <Text style={[styles.iconhome, styles.iconhomeTypo]}>Welcome</Text>
            <Image
              style={styles.prayingHandIcon}
              resizeMode="cover"
              source={require("../assets/prayinghand.png")}
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
                style={styles.homeIcon}
                resizeMode="cover"
                source={require("../assets/home.png")}
              />
              <Text style={[styles.iconhome1, styles.iconhomeTypo]}>Home</Text>
            </Pressable>
            <Text
              style={[styles.iconhome2, styles.iconhomeTypo]}
            >{`Find `}</Text>
            <Image
              style={styles.steeringWheelIcon}
              resizeMode="cover"
              source={require("../assets/steeringwheel.png")}
            />
          </Pressable>
          <View style={[styles.tabBarItem3, styles.tabItemPosition]}>
            <Image
              style={styles.tabBarItemChild}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Text
              style={[styles.iconhome2, styles.iconhomeTypo]}
            >{`Plan `}</Text>
            <Image
              style={[
                styles.streetSignCrossroadStreetIcon,
                styles.iconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/streetsigncrossroadstreetsignmetaphordirectionstravelplaces.png")}
            />
          </View>
          <Pressable
            style={[styles.tabBarItem4, styles.tabItemPosition]}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={[styles.iconhome, styles.iconhomeTypo]}>About Us</Text>
            <Image
              style={[styles.chatBubbleOvalSmiley1MesIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.planForATravelChild, styles.planLayout]} />
      <View style={[styles.planForATravelItem, styles.planLayout]} />
      <Pressable
        style={[styles.planForATravelInner, styles.tabsLayout]}
        onPress={() => navigation.navigate("AddATravel")}
      />
      <Text style={[styles.add, styles.iconhomeTypo]}>add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frontChildLayout: {
    height: 29,
    position: "absolute",
  },
  frontItemPosition: {
    height: 31,
    top: 17,
    position: "absolute",
  },
  tabsLayout: {
    height: 66,
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
    position: "absolute",
  },
  iconPosition: {
    left: 14,
    top: 15,
    position: "absolute",
    overflow: "hidden",
  },
  planLayout: {
    height: 133,
    width: 294,
    borderRadius: Border.br_xl,
    left: 34,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  frontChild: {
    top: 19,
    left: 61,
    borderRadius: Border.br_9xl,
    width: 234,
    backgroundColor: Color.colorGainsboro,
  },
  image3Icon: {
    left: 295,
    width: 29,
  },
  frontItem: {
    left: 330,
    width: 33,
  },
  image2Icon: {
    top: 23,
    left: 269,
    width: 19,
    height: 19,
    position: "absolute",
  },
  image4Icon: {
    left: 331,
    width: 29,
    top: 17,
  },
  logoSpliterideIcon: {
    top: 8,
    left: 6,
    width: 55,
    height: 46,
    position: "absolute",
  },
  front: {
    left: -4,
    width: 369,
    height: 65,
    top: 17,
    position: "absolute",
    overflow: "hidden",
  },
  iconhome: {
    marginLeft: -21,
    fontSize: FontSize.size_3xs,
    bottom: 17,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: "50%",
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
    position: "absolute",
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -127.5,
  },
  homeIcon: {
    top: 13,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconhome1: {
    marginLeft: -14,
    fontSize: FontSize.size_3xs,
    bottom: 17,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: "50%",
  },
  tabBarItem2: {
    marginLeft: -76,
  },
  iconhome2: {
    marginLeft: -10,
    fontSize: FontSize.size_3xs,
    bottom: 17,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: "50%",
  },
  steeringWheelIcon: {
    left: 13,
    width: 21,
    height: 22,
    top: 15,
    position: "absolute",
    overflow: "hidden",
  },
  tabBarItem1: {
    marginLeft: -23.5,
  },
  tabBarItemChild: {
    top: 9,
    left: 5,
    width: 38,
    height: 48,
    position: "absolute",
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
  planForATravelChild: {
    top: 110,
  },
  planForATravelItem: {
    top: 271,
  },
  planForATravelInner: {
    top: 432,
    left: 38,
    borderRadius: 52,
    width: 291,
    backgroundColor: Color.colorGainsboro,
  },
  add: {
    top: 452,
    left: 93,
    fontSize: 26,
    width: 161,
    height: 46,
  },
  planForATravel: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default PlanForATravel;