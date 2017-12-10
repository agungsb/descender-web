import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import digitConverter from './../utils/digitConverter';

let frame;

export default class CountUpTimer extends React.PureComponent {
  static propTypes = {
    setScore: PropTypes.func.isRequired
  }
  mOld = new Date().getTime();
  state = {
    sec: 0,
    msec: 0,
    min: 0
  }
  count = 0;
  componentDidMount() {
    this.draw();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.running !== nextProps.running) {
      if (!nextProps.running) {
        cancelAnimationFrame(frame);
        this.props.setScore(this.state);
      }
    }
  }
  componentWillUnmount() {
    cancelAnimationFrame(frame);
  }
  draw = () => {
    frame = requestAnimationFrame(this.draw);
    this.mNew = new Date().getTime();
    this.count += this.mNew - this.mOld;
    this.mOld = this.mNew;
    const sec = Math.floor(this.count / 1000);
    const msec = this.count % 1000;
    const min = Math.floor(sec / 60);
    this.setState({
      min,
      sec: sec % 60,
      msec
    });
  }
  render() {
    const { min, sec, msec } = this.state;
    return (
      <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text style={styles.text}>{digitConverter(min)}</Text>
        <Text style={styles.text}>:</Text>
        <Text style={styles.text}>{digitConverter(sec)}</Text>
        <Text style={styles.text}>:</Text>
        <Text style={styles.text}>{digitConverter(msec)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});