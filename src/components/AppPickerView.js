import React from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';

const AppPickerView = props => {
  const pickerValues = [
    {
      title: '2',
      value: 2,
    },
    {
      title: '3',
      value: 3,
    },
    {
      title: '4',
      value: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        visible={props.pickerDisplayed}
        animationType={'slide'}
        transparent={true}>
        <View style={styles.list}>
          <Text> Please pick a value </Text>
          {pickerValues.map((value, index) => {
            return (
              <TouchableHighlight
                key={index}
                onPress={() => props.onValueChange(value.value)}
                style={styles.listItem}>
                <Text>{value.title}</Text>
              </TouchableHighlight>
            );
          })}
          <TouchableHighlight
            onPress={props.onCancel}
            style={styles.cancelItem}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    margin: 20,
    padding: 20,
    backgroundColor: '#efefef',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute',
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  cancelItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  cancelText: {
    color: '#999',
  },
});
export default AppPickerView;
