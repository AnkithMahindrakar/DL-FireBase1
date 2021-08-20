//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,

  // Alert,
  FlatList,
  Image,
} from "react-native";
import firestore from "@react-native-firebase/firestore";

const MyVillageScreen = () => {
  ///adding of the data
  //   const [user, setUser] = useState();
  const [particular, setParticular] = useState();

  useEffect(() => {
    const FetchUser = async () => {
      try {
        const list = [];
        await firestore()
          .collection("post")
          // .orderBy('time', 'asc')
          .get()
          .then((querySnapshot) => {
            // console.log('total user', querySnapshot.size);
            querySnapshot.forEach((doc) => {
              const { title, url } = doc.data();
              list.push({
                title,
                url,
              });
            });
          });
        setParticular(list);
        // console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    return FetchUser();
  }, [particular]);

  return (
    <View style={styles.container}>
      {/* <Text>App</Text> */}
      {/* <TextInput
        style={styles.input}
        placeholder="write user name"
        placeholderTextColor="#aaaaaa"
        value={user}
        onChangeText={content => setUser(content)}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.btnTxt}> Submit</Text>
      </TouchableOpacity> */}
      <Text style={styles.flatlist}>Rendered Data</Text>
      <FlatList
        data={particular}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Image style={styles.image1} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        // keyExtractor={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "#eee",
    height: 50,
    width: 360,
    marginVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 16,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 22,
    color: "black",
  },
  button: {
    height: 50,
    width: 360,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 12,
  },
  btnTxt: {
    color: "white",
    fontSize: 28,
  },
  flatlistCtnr: {
    // backgroundColor: 'yellow',
    flex: 1,
    width: 360,
    paddingVertical: 10,
  },
  flatlistTxt: {
    fontSize: 26,
    color: "black",
    // fontWeight: 'bold',
  },
  flatlist: {
    fontSize: 28,
    color: "black",
    marginVertical: 20,
    // fontWeight: 'bold',
  },
  flatlistAge: {
    fontSize: 16,
    color: "black",
    // fontWeight: 'bold',
  },
  image1: {
    width: 384,
    height: 392,
  },
  title: {
    fontSize: 18,
    color: "#2A2A2A",
    fontWeight: "bold",
    top: 363,
  },
  cardContainer: {
    alignItems: "center",
    width: "100%",
    height: 480,
  },
});

export default MyVillageScreen;

// import React from 'react';
// import {TouchableOpacity, FlatList} from 'react-native';
// import Data from '../assets/Data';
// import Card from '../components/Card';

// const MyVillageScreen = props => {
//   return (
//     <FlatList
//       data={Data}
//       renderItem={({item}) => (
//         <>
//           <TouchableOpacity
//             activeOpacity={0.9}
//             onPress={() => {
//               props.navigation.navigate('DescriptionDetailsScreen', item);
//             }}>
//             <Card
//               img={item.img}
//               title={item.title}
//               description={item.description}
//             />
//           </TouchableOpacity>
//         </>
//       )}
//     />
//   );
// };

// export default MyVillageScreen;
