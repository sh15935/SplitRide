import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const TabBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabBar}>
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tabBarItem, styles.tabItemSpaceBlock1]}
          onPress={() => navigation.navigate("WelcomePage")}
        >
          <Image
            style={styles.prayingHandIcon}
            contentFit="cover"
            source={require("../assets/prayinghand.png")}
          />
          <Text style={styles.iconhomeTypo}>Welcome</Text>
        </Pressable>
        <View style={styles.tabItemLayout}>
          <Image
            style={styles.tabBarItemChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Text style={[styles.iconhome1, styles.iconhomeTypo]}>Home</Text>
        </View>
        <Pressable
          style={[styles.tabBarItem2, styles.tabItemSpaceBlock]}
          onPress={() => navigation.navigate("FindAStudent")}
        >
          <Image
            style={styles.steeringWheelIcon}
            contentFit="cover"
            source={require("../assets/steeringwheel.png")}
          />
          <Text style={styles.iconhomeTypo}>{`Find `}</Text>
        </Pressable>
        <Pressable
          style={[styles.tabBarItem3, styles.tabItemSpaceBlock]}
          onPress={() => navigation.navigate("PlanForATravel")}
        >
          <Image
            style={styles.streetSignCrossroadStreetIcon}
            contentFit="cover"
            source={require("../assets/streetsigncrossroadstreetsignmetaphordirectionstravelplaces.png")}
          />
          <Text style={[styles.iconhome3, styles.iconhomeTypo]}>{`Plan `}</Text>
        </Pressable>
        <Pressable
          style={[styles.tabBarItem4, styles.tabItemLayout]}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <Image
            style={styles.chatBubbleOvalSmiley1MesIcon}
            contentFit="cover"
            source={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile.png")}
          />
          <Text style={styles.iconhomeTypo}>About Us</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItemSpaceBlock1: {
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_11xs,
    paddingTop: Padding.p_mini,
    paddingLeft: Padding.p_10xs,
    alignItems: "center",
  },
  iconhomeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  tabItemSpaceBlock: {
    paddingBottom: Padding.p_mid,
    marginLeft: 4,
    paddingTop: Padding.p_mini,
    width: 48,
    height: 66,
    justifyContent: "flex-end",
  },
  tabItemLayout: {
    marginLeft: 4,
    width: 48,
    height: 66,
  },
  prayingHandIcon: {
    height: 22,
    width: 20,
  },
  tabBarItem: {
    width: 48,
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_11xs,
    paddingTop: Padding.p_mini,
    paddingLeft: Padding.p_10xs,
    height: 66,
  },
  tabBarItemChild: {
    top: 8,
    left: 5,
    width: 38,
    height: 48,
    position: "absolute",
  },
  homeIcon: {
    top: 13,
    left: 12,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  iconhome1: {
    marginLeft: -14,
    bottom: 17,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  steeringWheelIcon: {
    width: 21,
    height: 22,
    overflow: "hidden",
  },
  tabBarItem2: {
    paddingLeft: Padding.p_smi,
    paddingRight: Padding.p_sm,
  },
  streetSignCrossroadStreetIcon: {
    height: 18,
    width: 20,
    overflow: "hidden",
  },
  iconhome3: {
    marginTop: 4,
  },
  tabBarItem3: {
    paddingHorizontal: Padding.p_sm,
  },
  chatBubbleOvalSmiley1MesIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  tabBarItem4: {
    paddingBottom: Padding.p_mini,
    paddingRight: Padding.p_11xs,
    paddingTop: Padding.p_mini,
    paddingLeft: Padding.p_10xs,
    alignItems: "center",
  },
  tabs: {
    flexDirection: "row",
    paddingLeft: Padding.p_33xl,
    paddingRight: Padding.p_32xl,
    overflow: "hidden",
    height: 66,
    alignItems: "center",
    width: 359,
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
    height: 70,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 359,
    left: "50%",
    position: "absolute",
  },
});

export default TabBar;
