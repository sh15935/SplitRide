import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUs}>
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
            <Text style={[styles.iconhome2, styles.iconhomeTypo]}>Find</Text>
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
            <Image
              style={styles.tabBarItemChild}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Text style={[styles.iconhome, styles.iconhomeTypo]}>About Us</Text>
            <Image
              style={[styles.chatBubbleOvalSmiley1MesIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/chatbubbleovalsmiley1messagesmessagebubblechatovalsmileysmile2.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.logoSpliterideIcon}
          resizeMode="cover"
          source={require("../assets/logo-spliteride2.png")}
        />
        <Text
          style={styles.splitrideIsA}
        >{`SplitRide is a mobile application designed and created by Safae Sahih. It aims to help students share travels and reduce costs through carpooling, promoting a more affordable, sustainable, and social way to get around.
Key Features:
User-Friendly Interface: Easily navigate through the app.
Profile Creation: Create profiles and enter travel details, including origin, destination, and desired travel dates and times.
Find a Driver: Add your travel information and find others to share the journey with.
Plan a Travel: Organize and plan your travel efficiently.
Search Rides: Find rides that match your travel needs.
Messaging System: Communicate with other students within the app.
Safety Rating System: Rate and review other users for safety.
Mobile-Friendly Design: Accessible from any device for on-the-go convenience.
Our Mission: SplitRide is designed to make traveling more affordable and convenient for students. By connecting students with similar travel needs, we aim to create a community that values sustainability and social interaction.
Technical Aspects:
Front-end: Built with HTML, CSS, and JavaScript for a responsive and user-friendly experience.
Back-end: Developed with Python for robust functionality and data management.
Database: Utilizes SQLite for efficient storage and retrieval of information.
Learning Objectives:
Gain practical experience in the full web development lifecycle: planning, design, development, deployment, and maintenance.
Understand the importance of user-centered design principles.
Apply project management skills to organize tasks and meet deadlines.
Learn the value of open-source technologies and best practices in web development.
Join us in making travel more efficient, affordable, and enjoyable for students everywhere!`}</Text>
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
          style={styles.logoSpliterideIcon1}
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
    fontSize: FontSize.size_3xs,
    bottom: 17,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: 14,
    top: 15,
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
    overflow: "hidden",
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
  logoSpliterideIcon: {
    left: 38,
    width: 277,
    height: 166,
    top: 0,
    position: "absolute",
  },
  splitrideIsA: {
    top: 172,
    left: 11,
    fontSize: 10,
    textAlign: "left",
    width: 319,
    height: 436,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  content: {
    top: 96,
    left: 9,
    width: 341,
    height: 608,
    position: "absolute",
    overflow: "hidden",
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
  logoSpliterideIcon1: {
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
  aboutUs: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default AboutUs;
