import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Lottie from 'react-lottie';
import * as animationData from './../clap.json';
import digitConverter from './../utils/digitConverter';
var DeviceHeight = Dimensions.get('window').height;
var DeviceWidth = Dimensions.get('window').width;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
};

export default class ModalResult extends React.PureComponent {
  static propTypes = {
    closeModal: PropTypes.func.isRequired
  }
  render() {
    const {
      closeModal,
      score
    } = this.props;
    return (
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          <Lottie
            options={defaultOptions}
            height={100}
            width={100} />
          <View style={{ marginTop: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Your Time</Text>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={styles.text}>{digitConverter(score.min)}</Text>
            <Text style={styles.text}>:</Text>
            <Text style={styles.text}>{digitConverter(score.sec)}</Text>
            <Text style={styles.text}>:</Text>
            <Text style={styles.text}>{digitConverter(score.msec)}</Text>
          </View>
          <TouchableOpacity onPress={closeModal}>
            <View style={styles.button}>
              <Text style={{ color: '#FFF' }}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#87CEFA',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalWrapper: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: DeviceWidth,
    height: DeviceHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})