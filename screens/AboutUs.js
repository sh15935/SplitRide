import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import TabBar2 from "../components/TabBar2";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border } from "../GlobalStyles";

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUs}>
      <TabBar2 />
      <View style={[styles.content, styles.framePosition]}>
        <Image
          style={styles.logoSpliterideIcon}
          contentFit="cover"
          source={require("../assets/logo-spliteride1.png")}
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
        <View style={[styles.bareRecherche, styles.bareLayout]}>
          <View style={[styles.bareRechercheChild, styles.logoIconPosition]} />
          <Pressable
            style={[styles.recherche, styles.recherchePosition]}
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
          style={[styles.logoIcon, styles.logoIconPosition]}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  bareLayout: {
    width: 234,
    height: 29,
  },
  logoIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  recherchePosition: {
    top: 6,
    position: "absolute",
  },
  frameLayout: {
    height: 31,
    width: 33,
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
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    width: 319,
    height: 436,
    position: "absolute",
  },
  content: {
    top: 96,
    left: 9,
    width: 341,
    height: 608,
  },
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorGainsboro,
    height: 29,
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
  },
  bareRecherche: {
    left: 67,
    height: 29,
    top: 6,
    position: "absolute",
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
    height: 46,
  },
  front: {
    top: 64,
    left: 6,
    width: 346,
    height: 46,
    position: "absolute",
  },
  aboutUs: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default AboutUs;
