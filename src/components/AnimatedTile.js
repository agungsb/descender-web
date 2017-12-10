import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'; // 15.6.0
import digitConverter from './../utils/digitConverter';

const CORRECT = 'green';
const WRONG = 'red';

export default class AnimatedTile extends React.PureComponent {
  static propTypes = {
    text: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      color: CORRECT,
      opacity: 1,
      scale: new Animated.Value(1),
      liked: props.liked,
      count: props.count
    };
  }

  onPress = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true });
      this.props.onPress(this.props.text, this.animate);
    } else {
      if (this.state.color !== CORRECT) {
        this.props.onPress(this.props.text, this.animate);
      }
    }
  };

  animate = status => {
    Animated.timing(this.state.scale, {
      toValue: 1.2,
      duration: 50
    }).start();

    setTimeout(() => {
      Animated.spring(this.state.scale, {
        toValue: 1,
        duration: 50
      }).start();
    }, 50);

    this.setState({ opacity: 0, color: status ? CORRECT : WRONG });
  }

  render() {
    const { text } = this.props;
    const { color, opacity, scale } = this.state;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Animated.View style={[
          styles.tile,
          {
            opacity,
            backgroundColor: 'blue',
            minWidth: 70,
            transform: [{ scale }]
          }
        ]}>
          <Text style={{ color: '#FFF', fontSize: 40 }}>{digitConverter(text)}</Text>
        </Animated.View>
        <Animated.View style={[
          styles.tile,
          {
            opacity: 1 - opacity,
            backgroundColor: color,
            position: 'absolute',
            transform: [{ scale }]
          }
        ]}>
          <Text style={{ color: '#FFF', fontSize: 40 }}>{digitConverter(text)}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tile: {
    minWidth: 70,
    height: 120,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})