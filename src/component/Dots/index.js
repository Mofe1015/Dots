import React from "react";
import { View } from "react-native";

import styles from "./Styles";

const Dots = ({ currentPage, pageQuantity }) => {
  const dots = [];

  for (var i = 1; i <= pageQuantity; i++) {
    dots.push(
      <View
        key={i}
        style={
          i < currentPage
            ? styles.before
            : i === currentPage
            ? styles.current
            : styles.after
        }
      />
    );
  }
  return <View style={styles.dotsContainer}>{dots}</View>;
};

export default Dots;
