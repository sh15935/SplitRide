import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <View style={styles.tabBar}>
        <View style={styles.tabs}>
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
          <View style={[styles.tabBarItem1, styles.tabItemPosition]}>
            <Image
              style={[styles.tabBarItemChild, styles.tabBarItemChildPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.iconhome1, styles.iconhomeTypo]}>Home</Text>
          </View>
          <Pressable
            style={[styles.tabBarItem2, styles.tabItemPosition]}
            onPress={() => navigation.navigate("FindAStudent")}
          >
            <Text
              style={[styles.iconhome2, styles.iconhomeTypo]}
            >{`Find `}</Text>
            <Image
              style={styles.steeringWheelIcon}
              resizeMode="cover"
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
              resizeMode="cover"
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
              resizeMode="cover"
              source={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.homePageChild, styles.homeLayout]}
        onPress={() => navigation.navigate("FindAStudent")}
      />
      <View style={[styles.findAStudentWrapper, styles.wrapperPosition]}>
        <Text
          style={[styles.findAStudent, styles.aboutUsTypo]}
        >{`Find a student  `}</Text>
      </View>
      <View style={[styles.homePageItem, styles.homeLayout]} />
      <View style={[styles.planForATravelWrapper, styles.wrapperPosition]}>
        <Text
          style={[styles.findAStudent, styles.aboutUsTypo]}
        >{`Plan for a Travel  `}</Text>
      </View>
      <Pressable
        style={[styles.homePageInner, styles.homeLayout]}
        onPress={() => navigation.navigate("AboutUs")}
      />
      <View style={[styles.aboutUsWrapper, styles.wrapperPosition]}>
        <Text style={[styles.aboutUs, styles.aboutUsTypo]}>{`About Us `}</Text>
      </View>
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
          style={[styles.logoSpliterideIcon, styles.tabBarItemChildPosition]}
          resizeMode="cover"
          source={require("../assets/logo-spliteride.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  tabBarItemChildPosition: {
    top: 8,
    position: "absolute",
  },
  iconPosition: {
    left: 14,
    top: 15,
    position: "absolute",
    overflow: "hidden",
  },
  homeLayout: {
    height: 49,
    width: 315,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_16xl,
    left: 22,
    position: "absolute",
  },
  wrapperPosition: {
    height: 25,
    top: "50%",
    marginLeft: -91,
    width: 181,
    left: "50%",
    position: "absolute",
  },
  aboutUsTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    lineHeight: 25,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  frontChildLayout: {
    height: 29,
    position: "absolute",
  },
  frontItemPosition: {
    height: 31,
    top: 17,
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
    position: "absolute",
    overflow: "hidden",
  },
  tabBarItem: {
    marginLeft: -127.5,
  },
  tabBarItemChild: {
    left: 5,
    width: 38,
    height: 48,
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
  },
  tabBarItem1: {
    marginLeft: -75.5,
  },
  iconhome2: {
    marginLeft: -10,
  },
  steeringWheelIcon: {
    left: 13,
    width: 21,
    height: 22,
    top: 15,
    position: "absolute",
    overflow: "hidden",
  },
  tabBarItem2: {
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
    position: "absolute",
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
  homePageChild: {
    top: 229,
  },
  findAStudent: {
    left: -15,
    width: 212,
  },
  findAStudentWrapper: {
    marginTop: -161,
  },
  homePageItem: {
    top: 348,
  },
  planForATravelWrapper: {
    marginTop: -40,
  },
  homePageInner: {
    top: 481,
  },
  aboutUs: {
    width: 181,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    lineHeight: 25,
    fontSize: FontSize.size_lg,
    left: 0,
  },
  aboutUsWrapper: {
    marginTop: 95,
  },
  frontChild: {
    top: 19,
    left: 61,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorGainsboro,
    width: 234,
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
    left: 6,
    width: 55,
    height: 46,
  },
  front: {
    left: -4,
    width: 369,
    height: 65,
    top: 17,
    position: "absolute",
    overflow: "hidden",
  },
  homePage: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default HomePage;
