import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

const ProgressDialog = ({ visible }) => (
  <Modal animationType="fade" visible={visible} transparent={true}>
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loading}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
          <View style={styles.loadingContent}>
            <Text>Loading...</Text>
          </View> 
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    color:'rgba(12,23,24,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 35,
    borderRadius:30,
    borderColor:'grey',
    borderWidth:1,
    width:200,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
  },
  loadingContent: {
    flex: 3,
    fontSize: 16,
    paddingHorizontal: 10,
  }
})

export default ProgressDialog;