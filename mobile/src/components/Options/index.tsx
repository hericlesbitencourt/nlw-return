import { Text, View } from "react-native";
import React from "react";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Option } from "../Option";
import { Copyright } from "../Copyright";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave your feedback here</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}