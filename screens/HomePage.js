import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TabBar from "../components/TabBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <TabBar />
      <Pressable style={[styles.frame, styles.framePosition]}>
        <Pressable
          style={[styles.frameChild, styles.childPosition]}
          onPress={() => navigation.navigate("FindAStudent")}
        />
        <Text
          style={[styles.findAStudent, styles.aboutUsTypo]}
        >{`Find a student  `}</Text>
      </Pressable>
      <Pressable style={[styles.frame1, styles.framePosition]}>
        <Pressable
          style={[styles.frameChild, styles.childPosition]}
          onPress={() => navigation.navigate("AboutUs")}
        />
        <Text style={[styles.aboutUs, styles.aboutUsTypo]}>{`About Us `}</Text>
      </Pressable>
      <Pressable style={[styles.frame2, styles.framePosition]}>
        <Pressable
          style={[styles.frameChild, styles.childPosition]}
          onPress={() => navigation.navigate("AboutUs")}
        />
        <Text style={[styles.aboutUs, styles.aboutUsTypo]}>Plan a travel</Text>
      </Pressable>
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
  framePosition: {
    overflow: "hidden",
    left: 22,
    height: 49,
    width: 315,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  aboutUsTypo: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.size_lg,
    alignItems: "center",
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
  frame3Layout: {
    height: 31,
    width: 33,
  },
  frameChild: {
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorBlack,
    height: 49,
    width: 315,
    top: 0,
    position: "absolute",
  },
  findAStudent: {
    top: 10,
    left: 52,
    width: 212,
  },
  frame: {
    top: 229,
  },
  aboutUs: {
    top: 14,
    width: 181,
    left: 67,
  },
  frame1: {
    top: 481,
  },
  frame2: {
    top: 351,
  },
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorGainsboro,
    height: 29,
    left: 0,
    top: 0,
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
    height: 29,
    top: 6,
    left: 67,
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
    height: 31,
    width: 33,
    overflow: "hidden",
    position: "absolute",
  },
  logoIcon: {
    width: 55,
    left: 0,
    top: 0,
  },
  front: {
    top: 64,
    left: 6,
    width: 346,
  },
  homePage: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default HomePage;
