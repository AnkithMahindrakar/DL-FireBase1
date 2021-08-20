import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFloat, setIsFloat] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [placeholder, setPlaceholder] = useState(props.placeholder);
  const onChangeText = (inputValue) => {
    setInputValue(inputValue);
  };
  return (
    <View>
      <View
        style={{
          ...styles.placeholderContainer,
          // ...{ top: !isFloat && inputValue.length == 0 ? 60 : 30 },
          ...{ top: !isFloat ? 0 : 30 },
        }}
      >
        <Text
          style={{
            ...styles.placeholder,
            ...{
              // color: !isFloat && inputValue.length == 0 ? "#ccc" : "black",
              // fontSize: !isFloat && inputValue.length == 0 ? 24 : 16,
              color: !isFloat ? null : "black",
              fontSize: !isFloat ? null : 16,
            },
            ...props.inputTextStyle,
          }}
        >
          {props.name}
        </Text>
      </View>
      <TextInput
        {...props}
        textContentType={props.type}
        style={{
          ...styles.input,
          ...{
            borderBottomColor: !isFocused ? "#ccc" : "black",
            borderBottomWidth: !isFocused ? 1 : 2,
          },
          ...props.inputStyle,
        }}
        placeholderTextColor="#bbb"
        placeholder={props.placeholder}
        // placeholderTextColor={props.placeholderTextColor}
        onFocus={() => {
          setIsFocused((prevState) => !prevState);
          setIsFloat((prevState) => !prevState);
        }}
        onBlur={() => {
          setIsFocused((prevState) => !prevState);
          setIsFloat((prevState) => !prevState);
        }}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    color: "black",
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  placeholder: {
    color: "#ccc",
    fontSize: 24,
  },
  placeholderContainer: {
    position: "relative",
    left: 20,
    top: 60,
  },
});

// import React, { useState } from "react";
// import { StyleSheet, TextInput, View, Text } from "react-native";

// const Input = (props) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [isFloat, setIsFloat] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const onChangeHandler = (inputValue) => {
//     setInputValue(inputValue);
//   };
//   return (
//     <View>
//       <View
//         style={{
//           ...styles.placeholderContainer,
//           ...{ top: !isFloat && inputValue.length == 0 ? 60 : 30 },
//         }}
//       >
//         <Text
//           style={{
//             ...styles.placeholder,
//             ...{
//               color: !isFloat && inputValue.length == 0 ? "#ccc" : "black",
//               fontSize: !isFloat && inputValue.length == 0 ? 24 : 16,
//             },
//             ...props.inputTextStyle,
//           }}
//         >
//           {props.name}
//         </Text>
//       </View>
//       <TextInput
//         {...props}
//         textContentType={props.type}
//         style={{
//           ...styles.input,
//           ...{
//             borderBottomColor: !isFocused ? "#ccc" : "black",
//             borderBottomWidth: !isFocused ? 1 : 2,
//           },
//           ...props.inputStyle,
//         }}
//         placeholderTextColor="#bbb"
//         onFocus={() => {
//           setIsFocused((prevState) => !prevState);
//           setIsFloat((prevState) => !prevState);
//         }}
//         onBlur={() => {
//           setIsFocused((prevState) => !prevState);
//           setIsFloat((prevState) => !prevState);
//         }}
//         value={props.value}
//         onChangeText={props.onChangeText}
//       />
//     </View>
//   );
// };

// export default Input;

// const styles = StyleSheet.create({
//   input: {
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//     color: "black",
//     fontSize: 18,
//     marginHorizontal: 20,
//     marginVertical: 20,
//   },
//   placeholder: {
//     color: "#ccc",
//     fontSize: 24,
//   },
//   placeholderContainer: {
//     position: "relative",
//     left: 20,
//     top: 60,
//   },
// });
