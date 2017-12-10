import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Game from './Game';

import Lottie from 'react-lottie';
import * as animationData from './../cloud.json';
import * as animationData2 from './../fail.json';
import * as animationData3 from './../touch.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2
};

const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: animationData3
};

export default class ModalResult extends React.PureComponent {
  static propTypes = {
    gameOn: PropTypes.bool.isRequired,
    setGame: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired,
  }
  render() {
    if (!this.props.gameOn) {
      return (
        <View style={{
          flex: 1,
          backgroundColor: '#87CEFA',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20
        }}>
          <View style={{
            position: 'absolute',
            top: 0,
            paddingHorizontal: (Dimensions.get('window').width / 2) - 150
          }}>
            <Lottie
              width={300}
              options={defaultOptions} />
          </View>
          <View style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#FFF',
            paddingHorizontal: (Dimensions.get('window').width / 2) - 150
          }}>
            <Lottie width={300} options={defaultOptions2} />
          </View>
          <Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            flexWrap: 'wrap',
            color: '#FFF'
          }}>Descender</Text>
          <Text style={{
            textAlign: 'center',
            paddingVertical: 30,
            fontSize: 20,
            flexWrap: 'wrap',
            color: '#FFF'
          }}>Touching from largest to smallest number as fast as you can.</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 20
            }}
            onPress={this.props.setGame}>
            <Text style={{ color: '#242424' }}>Start Game</Text>
            <View style={{ position: 'absolute' }}>
              <Lottie width={150} options={defaultOptions3} />
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <Game
        closeModal={this.props.closeModal}
        setModal={this.props.setModal}
        setScore={this.props.setScore} />
    }
  }
}