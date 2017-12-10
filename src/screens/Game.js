import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Tile from './../components/AnimatedTile';
import CountUpTimer from './../components/CountUpTimer';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const tiles = 4;
    // const arr = [1, 5, 3, 9, 10, 7, 4, 21, 2, 19, 12, 44];
    const arr = this.generateNumber().slice(0, 12);
    let grids = [arr.slice(0, tiles), arr.slice(tiles, tiles * 2), arr.slice(tiles * 2)];
    const order = arr.sort((a, b) => a - b).reverse();
    console.log('order', order);
    console.log('grids', grids);
    this.state = {
      finished: false,
      grids,
      order,
      running: props.running,
      step: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.running !== nextProps.running) {
      this.setState({ running: nextProps.running });
    }
  }
  generateNumber() {
    for (var a = [], i = 0; i < 40; ++i) a[i] = i;
    a = this.shuffle(a);
    return a;
  }
  shuffle(array) {
    var tmp, current, top = array.length;
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  onPress = (value, cb) => {
    let { order, running, step } = this.state;
    if (!running) {
      this.setState({ running: true });
    }
    if (value === order[step]) {
      step++;
      this.setState({ step }, () => {
        cb(true);
        if (step === order.length) {
          this.onStop();
        }
      });
    } else {
      cb(false);
    }
  }
  onStop = () => {
    this.setState({ running: false }, () => {
      this.props.setModal(true);
    });
  }
  render() {
    const { grids, running } = this.state;
    return (
      <View style={{ paddingHorizontal: 20, flex: 1, paddingTop: 20, flexDirection: 'column' }}>
        <StatusBar />
        <CountUpTimer running={running} setScore={this.props.setScore} />
        {grids.map((grid, k) =>
          <View style={styles.container} key={k}>
            {grid.map((tile, key) =>
              <Tile text={tile} key={key} onPress={this.onPress} />
            )}
          </View>
        )}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={this.props.closeModal}>
          <Text>Restart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});