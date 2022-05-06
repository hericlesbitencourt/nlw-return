import { Image, Text, TouchableOpacity, View } from "react-native";
import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

interface Props {
  onSendAnotherFeedback: () => void;
}
export function Success({onSendAnotherFeedback}: Props) {

  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Thank you for your feedback!</Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>I want sent another</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}