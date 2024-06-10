import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-41.png")}
      />
      <Pressable
        style={[styles.retourButon, styles.retourLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.retour}>RETOUR</Text>
        <Image
          style={[styles.retourButonChild, styles.retourLayout]}
          contentFit="cover"
          source={require("../assets/frame-19.png")}
        />
      </Pressable>
      <View style={styles.firstNameParent}>
        <Text style={[styles.firstName, styles.nameTypo]}>First Name :</Text>
        <Text style={[styles.lastName, styles.nameTypo]}>Last Name :</Text>
        <Text style={[styles.number, styles.numberTypo]}>Number :</Text>
        <Text style={[styles.gender, styles.numberTypo]}>Gender :</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  retourLayout: {
    width: 106,
    position: "absolute",
  },
  nameTypo: {
    left: 29,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  numberTypo: {
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  profileChild: {
    top: 92,
    left: 93,
    width: 173,
    height: 172,
    position: "absolute",
  },
  image4Icon: {
    top: 103,
    left: 104,
    width: 151,
    height: 161,
    position: "absolute",
  },
  retour: {
    top: 47,
    left: 13,
    width: 89,
    height: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  retourButonChild: {
    left: 0,
    height: 47,
    top: 0,
  },
  retourButon: {
    top: 596,
    left: 138,
    height: 74,
  },
  firstName: {
    width: 155,
    height: 30,
    top: 0,
  },
  lastName: {
    top: 50,
    width: 149,
    height: 29,
  },
  number: {
    top: 99,
    width: 164,
    height: 30,
  },
  gender: {
    top: 149,
    width: 148,
    height: 33,
  },
  firstNameParent: {
    top: 314,
    left: 16,
    width: 175,
    height: 231,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Profile;
