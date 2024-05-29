import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const FindAStudent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findAStudent}>
      <View style={styles.content}>
        <View style={styles.contentChild} />
        <View style={[styles.selectDate, styles.selectPosition1]}>
          <Pressable
            style={[styles.selectDateChild, styles.homeIconLayout]}
            onPress={() => navigation.navigate("SelectDate")}
          />
          <Text style={[styles.selectADate, styles.selectTypo]}>
            select a date
          </Text>
        </View>
        <Pressable
          style={[styles.selectRegion2, styles.selectPosition1]}
          onPress={() => navigation.navigate("SelectRegion")}
        >
          <View style={[styles.selectDateChild, styles.homeIconLayout]} />
          <Text style={[styles.selectARegion, styles.selectPosition]}>
            select a region
          </Text>
        </Pressable>
        <Text
          style={[styles.contentText, styles.textTypo]}
        >{`leaving from          :
Going to                 :
Date                        :
Num of passager :
Price                       :
You are a                :`}</Text>
        <Pressable
          style={[styles.selectRegion1, styles.selectPosition1]}
          onPress={() => navigation.navigate("SelectRegion")}
        >
          <View style={[styles.selectDateChild, styles.homeIconLayout]} />
          <Text style={[styles.selectARegion1, styles.selectPosition]}>
            select a region
          </Text>
        </Pressable>
        <View style={styles.numPassIcon}>
          <Image
            style={[styles.numPassIconChild, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/polygon-1.png")}
          />
          <View style={[styles.wrapper, styles.frameLayout]}>
            <Text style={[styles.text, styles.frameLayout]}>5</Text>
          </View>
          <View style={[styles.container, styles.frameLayout]}>
            <Text style={[styles.text, styles.frameLayout]}>4</Text>
          </View>
          <View style={[styles.frame, styles.frameLayout]}>
            <Text style={[styles.text, styles.frameLayout]}>3</Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <Text style={[styles.text, styles.frameLayout]}>2</Text>
          </View>
          <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-888.png")}
            />
            <Text style={[styles.text, styles.frameLayout]}>1</Text>
          </View>
        </View>
        <View style={[styles.contentItem, styles.homeIconLayout]} />
        <View style={styles.driverOrRider}>
          <Image
            style={[styles.driverOrRiderChild, styles.driverLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-886.png")}
          />
          <Image
            style={[styles.driverOrRiderItem, styles.driverLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-886.png")}
          />
          <Text style={[styles.driver, styles.riderTypo]}>{`Driver `}</Text>
          <Text style={[styles.rider, styles.riderTypo]}>Rider</Text>
        </View>
        <Pressable
          style={styles.contentInner}
          onPress={() => navigation.navigate("AfterSearch")}
        />
        <Text style={styles.search}>search</Text>
        <View style={[styles.frontContent, styles.frontContentLayout]}>
          <View style={[styles.frontContentChild, styles.frontContentLayout]} />
          <Text
            style={[styles.findAStudent1, styles.findAStudent1Position]}
          >{`Find a student Driver  `}</Text>
        </View>
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
          style={[styles.logoSpliterideIcon, styles.ellipseParentPosition]}
          resizeMode="cover"
          source={require("../assets/logo-spliteride.png")}
        />
      </View>
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
          <Pressable
            style={[styles.tabBarItem1, styles.tabItemPosition]}
            onPress={() => navigation.navigate("FindAStudent")}
          >
            <Image
              style={[styles.tabBarItemChild, styles.findAStudent1Position]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Pressable
              style={[styles.tabBarItem2, styles.tabItemPosition]}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={[styles.homeIcon, styles.homeIconLayout]}
                resizeMode="cover"
                source={require("../assets/home.png")}
              />
              <Text style={[styles.iconhome1, styles.iconhomeTypo]}>Home</Text>
            </Pressable>
            <Text
              style={[styles.iconhome2, styles.iconhomeTypo]}
            >{`Find `}</Text>
            <Image
              style={[styles.steeringWheelIcon, styles.iconPosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  selectPosition1: {
    top: "50%",
    marginLeft: 52,
    height: 22,
    width: 97,
    left: "50%",
    position: "absolute",
  },
  homeIconLayout: {
    height: 24,
    position: "absolute",
  },
  selectTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  selectPosition: {
    top: 3,
    position: "absolute",
  },
  textTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  framePosition: {
    top: 6,
    position: "absolute",
  },
  frameLayout: {
    height: 6,
    width: 8,
  },
  ellipseParentPosition: {
    left: 6,
    position: "absolute",
  },
  driverLayout: {
    height: 17,
    width: 15,
    top: 17,
    position: "absolute",
  },
  riderTypo: {
    width: 32,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    height: 17,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frontContentLayout: {
    height: 49,
    top: 0,
    width: 315,
    position: "absolute",
  },
  findAStudent1Position: {
    top: 5,
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
  tabItemPosition: {
    width: 48,
    height: 66,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconhomeTypo: {
    letterSpacing: 0,
    bottom: 17,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 15,
    position: "absolute",
    overflow: "hidden",
  },
  contentChild: {
    height: 323,
    width: 315,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_16xl,
    left: 0,
    top: 17,
    position: "absolute",
  },
  selectDateChild: {
    marginTop: -11,
    marginLeft: -48.5,
    width: 99,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkgray_200,
    height: 24,
    left: "50%",
    top: "50%",
  },
  selectADate: {
    top: 1,
    left: 4,
    position: "absolute",
  },
  selectDate: {
    marginTop: -40,
    height: 22,
    width: 97,
    left: "50%",
  },
  selectARegion: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: 4,
  },
  selectRegion2: {
    marginTop: -74,
    height: 22,
    width: 97,
    left: "50%",
  },
  contentText: {
    top: 49,
    fontSize: FontSize.size_3xl,
    lineHeight: 31,
    width: 200,
    height: 204,
    left: 14,
    color: Color.colorBlack,
    display: "flex",
    position: "absolute",
  },
  selectARegion1: {
    marginLeft: -44.5,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: "50%",
  },
  selectRegion1: {
    marginTop: -107,
    height: 22,
    width: 97,
    left: "50%",
  },
  numPassIconChild: {
    height: 15,
    width: 97,
    left: 0,
  },
  text: {
    top: 0,
    width: 8,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  wrapper: {
    left: 84,
    top: 0,
    width: 8,
    position: "absolute",
  },
  container: {
    left: 63,
    top: 3,
    position: "absolute",
  },
  frame: {
    left: 44,
    top: 6,
    position: "absolute",
  },
  frameView: {
    top: 10,
    left: 25,
    position: "absolute",
  },
  frameChild: {
    top: -2,
    left: -2,
    width: 10,
    height: 10,
    position: "absolute",
  },
  ellipseParent: {
    top: 12,
    height: 6,
    width: 8,
  },
  numPassIcon: {
    top: 156,
    left: 209,
    height: 22,
    width: 97,
    position: "absolute",
  },
  contentItem: {
    marginTop: 18,
    marginLeft: 51,
    width: 99,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkgray_200,
    height: 24,
    left: "50%",
    top: "50%",
  },
  driverOrRiderChild: {
    left: 5,
  },
  driverOrRiderItem: {
    left: 38,
  },
  driver: {
    left: 0,
  },
  rider: {
    left: 33,
  },
  driverOrRider: {
    top: 211,
    left: 226,
    width: 65,
    height: 34,
    position: "absolute",
  },
  contentInner: {
    top: 287,
    left: 24,
    backgroundColor: Color.colorGray_200,
    width: 268,
    height: 33,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  search: {
    top: 281,
    left: 82,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    color: Color.colorGray_100,
    justifyContent: "center",
    width: 132,
    height: 45,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frontContentChild: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_16xl,
    left: 0,
  },
  findAStudent1: {
    left: 20,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    color: Color.colorWhite,
    width: 212,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frontContent: {
    left: 1,
  },
  content: {
    top: 164,
    left: 22,
    width: 316,
    height: 340,
    position: "absolute",
  },
  frontChild: {
    top: 19,
    left: 61,
    borderRadius: Border.br_9xl,
    width: 234,
    backgroundColor: Color.colorGainsboro,
    height: 29,
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
    width: 38,
    height: 48,
    left: 4,
  },
  homeIcon: {
    top: 13,
    left: 12,
    width: 24,
    overflow: "hidden",
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
  },
  tabBarItem1: {
    marginLeft: -23.5,
  },
  streetSignCrossroadStreetIcon: {
    width: 20,
    height: 18,
    left: 14,
  },
  tabBarItem3: {
    marginLeft: 28.5,
  },
  chatBubbleOvalSmiley1MesIcon: {
    width: 22,
    left: 14,
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
  findAStudent: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default FindAStudent;
