//  packages
import React from 'react';
// styles
import styles from './style';
// core components
import {Image, Linking, TouchableOpacity, View} from 'react-native';

const Avatar = ({item}) => {
  return (
    <>
      <TouchableOpacity style={styles.Avatar} onPress={() => {Linking.openURL(item.item.images.lg)}}>
        <Image style={styles.image} source={{uri:`${item.item.images.xs}`}} />
      </TouchableOpacity>
    </>
  );
};

export default Avatar;
