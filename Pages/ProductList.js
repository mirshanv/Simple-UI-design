import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

const ProductList = (props) => {
  const Data = [
    {
      name: "Nike",
      Rate: "100 $",
      // image: require("../assets/s2.jpg"),
      image: require("../assets/s12.png"),
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "250 $",
      image: require("../assets/S3.png"),
      // image: require("../assets/s12.png"),
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "150 $",
      image: require("../assets/S4.png"),
      rating: "⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "100 $",
      image: require("../assets/S5.png"),
      // image: require("../assets/s12.png"),
      rating: "⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "300 $",
      image: require("../assets/S6.png"),
      // image: require("../assets/s12.png"),
      rating: "⭐⭐",
    },
    {
      name: "Nike",
      Rate: "50 $",
      image: require("../assets/S7.png"),
      // image: require("../assets/s12.png"),
      rating: "⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "500 $",
      image: require("../assets/S8.png"),
      // image: require("../assets/s12.png"),
      rating: "⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "120 $",
      image: require("../assets/S10.png"),
      // image: require("../assets/s12.png"),
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "170 $",
      image: require("../assets/S11.png"),
      rating: "⭐⭐⭐",
    },
    {
      name: "Nike",
      Rate: "100 $",
      image: require("../assets/s12.png"),
      rating: "⭐⭐⭐",
    },
  ];

  const FilterData = [
    {
      Name: "All",
      id: "1",
    },
    {
      Name: "Running",
      id: "2",
    },
    {
      Name: "Formal",
      id: "3",
    },
    {
      Name: "Casual",
      id: "4",
    },
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        width: "40%",
        height: 180,
        borderRadius: 10,
        backgroundColor: "#fff",
        margin: 16,
        alignContent: "center",
        left: "3%",
        elevation: 5,
        shadowColor: "black",
      }}
      onPress={() => {
        props.navigation.navigate("ProductDetails", {
          image: item.image,
          Name: item.name,
          Rate: item.Rate,
          Rating: item.rating,
        });
      }}
    >
      <View style={{ height: "60%", width: "100%" }}>
        <Image style={{ alignSelf: "center", top: "3%" }} source={item.image} />
      </View>
      <View
        style={{
          height: "40%",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, alignSelf: "center" }}>
          {item.name}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, alignSelf: "center" }}>
          {item.Rate}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, alignSelf: "center" }}>
          {item.rating}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          width: "100%",
          height: "20%",
          //   backgroundColor: "#fff",
          top: "2%",
        }}
      >
        <View
          style={{
            width: "95%",
            height: "90%",
            borderRadius: 10,
            backgroundColor: "#fff",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "40%",
              height: "100%",
              top: "2%",
              left: "3%",
            }}
          >
            <Image source={require("../assets/s12.png")} />
          </View>
          <View style={{ height: "100%", width: "50%" }}>
            <View style={{ alignItems: "center", top: "10%" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                20% Discount
              </Text>
              <Text>On Your First Purchase</Text>
            </View>
            <TouchableOpacity
              style={{
                width: "50%",
                height: "30%",
                backgroundColor: "black",
                borderRadius: 15,
                alignSelf: "center",
                top: "15%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  alignSelf: "center",
                }}
              >
                BUY NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "7%",
          flexDirection: "row",
          top: "1%",
        }}
      >
        {FilterData &&
          FilterData.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert("filter");
                }}
                style={{
                  backgroundColor: "black",
                  width: "20%",
                  height: "70%",
                  borderRadius: 10,
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  {item.Name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
      <View
        style={{
          // width: "100%",
          height: "73%",
          margin: 10,
          backgroundColor: "#fff",
        }}
      >
        <FlatList data={Data} renderItem={renderItem} numColumns={2} />
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
