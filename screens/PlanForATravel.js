import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import TabBar3 from "../components/TabBar3";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily } from "../GlobalStyles";

const PlanForATravel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.planForATravel}>
      <TabBar3 />
      <View style={[styles.planForATravelChild, styles.planLayout]} />
      <View style={[styles.planForATravelItem, styles.planLayout]} />
      <Pressable
        style={styles.planForATravelInner}
        onPress={() => navigation.navigate("AddATravel")}
      />
      <Text style={styles.add}>add</Text>
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
  planLayout: {
    height: 133,
    width: 294,
    borderRadius: Border.br_xl,
    left: 42,
    backgroundColor: Color.colorGainsboro,
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
  planForATravelChild: {
    top: 166,
  },
  planForATravelItem: {
    top: 327,
  },
  planForATravelInner: {
    top: 488,
    left: 46,
    borderRadius: 52,
    width: 291,
    height: 66,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  add: {
    top: 508,
    left: 101,
    fontSize: 26,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "center",
    width: 161,
    height: 46,
    position: "absolute",
  },
  bareRechercheChild: {
    borderRadius: Border.br_9xl,
    height: 29,
    width: 234,
    backgroundColor: Color.colorGainsboro,
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
    overflow: "hidden",
    alignItems: "center",
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
  planForATravel: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default PlanForATravel;
