import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TabBar1 = ({
  iconHome,
  streetSignCrossroadStreet,
  iconHome1,
  chatBubbleOvalSmiley1Mess,
  propMarginLeft,
  propMarginLeft1,
  propWidth,
  propHeight,
  propMarginLeft2,
  propMarginLeft3,
  propWidth1,
  propHeight1,
  onTabBarItemPress,
  onTabBarItemPress1,
  onTabBarItemPress2,
  onTabBarItemPress3,
  onTabBarItemPress4,
}) => {
  const tabBarItemStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const iconHomeStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  const streetSignCrossroadStreetIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  const tabBarItem1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft2),
    };
  }, [propMarginLeft2]);

  const iconHome1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft3),
    };
  }, [propMarginLeft3]);

  const chatBubbleOvalSmiley1MesIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("height", propHeight1),
    };
  }, [propWidth1, propHeight1]);

  return (
    <View style={styles.tabBar}>
      <View style={[styles.tabs, styles.iconPosition1]}>
        <Pressable
          style={[styles.tabBarItem, styles.tabItemPosition]}
          onPress={onTabBarItemPress}
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
          onPress={onTabBarItemPress1}
        >
          <Image
            style={styles.tabBarItemChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Pressable
            style={[styles.tabBarItem2, styles.tabItemPosition]}
            onPress={onTabBarItemPress2}
          >
            <Image
              style={[styles.homeIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.iconhome1, styles.iconhomeTypo]}>Home</Text>
          </Pressable>
          <Text style={[styles.iconhome2, styles.iconhomeTypo]}>{`Find `}</Text>
          <Image
            style={styles.steeringWheelIcon}
            contentFit="cover"
            source={require("../assets/steeringwheel.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.tabBarItem3, styles.tabItemPosition, tabBarItemStyle]}
          onPress={onTabBarItemPress3}
        >
          <Text style={[styles.iconhome2, styles.iconhomeTypo, iconHomeStyle]}>
            {iconHome}
          </Text>
          <Image
            style={[
              styles.streetSignCrossroadStreetIcon,
              styles.iconPosition,
              streetSignCrossroadStreetIconStyle,
            ]}
            contentFit="cover"
            source={streetSignCrossroadStreet}
          />
        </Pressable>
        <Pressable
          style={[styles.tabBarItem4, styles.tabItemPosition, tabBarItem1Style]}
          onPress={onTabBarItemPress4}
        >
          <Text style={[styles.iconhome, styles.iconhomeTypo, iconHome1Style]}>
            {iconHome1}
          </Text>
          <Image
            style={[
              styles.chatBubbleOvalSmiley1MesIcon,
              styles.iconPosition,
              chatBubbleOvalSmiley1MesIconStyle,
            ]}
            contentFit="cover"
            source={chatBubbleOvalSmiley1Mess}
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

export default TabBar1;
