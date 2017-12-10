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
import * as animationData from './../heart-eyes.json';
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
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Lottie
              options={defaultOptions}
              height={400}
              width={400} />
            <Text>Your time</Text>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'flex-start',
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
              <Text>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
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
  }
})