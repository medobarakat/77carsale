import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Text,
  Input,
  Icon,
  Stack,
  Button,
  Pressable,
  Heading,
  VStack,
  Box,
  AspectRatio,
  Center,
  Divider,
} from "native-base";

import Logo1 from "../images/logo/logo1.png";
import Logo2 from "../images/logo/logo2.png";
import Logo3 from "../images/logo/logo3.png";
import Logo4 from "../images/logo/logo4.png";
import Logo5 from "../images/logo/logo5.png";
import Logo6 from "../images/logo/logo6.png";

import Image1 from "../images/1.jpg";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.jpg";
import Image4 from "../images/4.jpg";

const Home = ({ navigation }) => {
  const [FlatListData1, setFlatListData1] = useState([
    {
      id: "bd7acbea-c1b1-461231c2-aed5-3ad53abb28ba",
      title: "All",
    },
    {
      id: "3ac68afc-c605-48d3-a3124f8-fbd91aa97f63",
      title: "Motors",
    },
    {
      id: "58694a0f-3da1-471f-bd496-145571e29d72",
      title: "Property",
    },
    {
      id: "58694a0f-3da1-471f-bd596-14545431e29d72",
      title: "General  ",
    },
    {
      id: "58694a0f-3da1-2471f-bd96-1451123e29d72",
      title: "Satellite",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145ada66se29d72",
      title: "Electronics",
    },
    {
      id: "5869224a0f-3da1-471f-bd96-145ada66se29d72",
      title: "Bugs ",
    },
    {
      id: "5869224a0f-3d3a1-471f-bd96-145ada66se29d72",
      title: "Pack & More",
    },
    {
      id: "5869224a0f-3d53a1-471f-bd96-145ada66se29d72",
      title: "Painter",
    },
  ]);

  const [FlatListData2, setFlatListData2] = useState([
    {
      id: "213123123123",
      photo: Image1,
    },
    {
      id: "432453242344",
      photo: Image2,
    },
    {
      id: "4324234234",
      photo: Image1,
    },
    {
      id: "6546045543534",
      photo: Image2,
    },
    {
      id: "543534867y",
      photo: Image1,
    },
    {
      id: "4325266",
      photo: Image2,
    },
    {
      id: "4324353242344",
      photo: Image2,
    },
    {
      id: "43224234234",
      photo: Image1,
    },
    {
      id: "6546454543534",
      photo: Image2,
    },
    {
      id: "543535467y",
      photo: Image1,
    },
    {
      id: "43251266",
      photo: Image2,
    },
  ]);
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          height={60}
          horizontal
          data={FlatListData1}
          renderItem={({ item }) => (
            <Pressable
              marginHorizontal={10}
              onPress={() => console.warn(`you clicked num ${item.title}`)}
            >
              <Box>
                <Box
                  width={75}
                  height={75}
                  alignItems="center"
                  marginHorizontal={10}
                >
                  <Center width={150} height={"100%"}>
                    <View style={styles.FlatListContainerUnder3}>
                      <Text style={styles.txt1}>{item.title}</Text>
                    </View>
                  </Center>
                </Box>
              </Box>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* second flatlist */}
      <View
        style={{
          marginTop: 10,
        }}
      >
        <FlatList
          data={FlatListData2}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{
            marginBottom: 90,
          }}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("ShopDetail")}>
              <Box
                backgroundColor={"#FFFFFF"}
                margin={2}
                width={185}
                height={240}
              >
                <Image
                  source={item.photo}
                  resizeMode="center"
                  style={{
                    height: 240,
                    width: 185,
                    marginRight: 15,
                  }}
                />
              </Box>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBF9F9",
    flex: 1,
  },
  smalllogo: {
    borderRadius: 50,
  },
  FlatListContainerUnder3: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 25,
  },
  card: {
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
    flex: 1,
  },

  txt: {
    fontSize: 14,
    color: "#E56B1F",
  },
  txt1: {
    color: "#555555",
    fontSize: 12,
  },
});

export default Home;
