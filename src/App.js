import React from 'react';
import { View } from 'react-native';

// You can import from local files
import ModalResult from './screens/ModalResult';
import Start from './screens/Start';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
      visibleModal: false,
      score: {
        min: 0,
        sec: 0,
        msec: 0
      }
    };
  }
  closeModal = () => {
    this.setState({ gameOn: false, visibleModal: false });
  }
  setGame = () => {
    this.setState({ gameOn: true });
  }
  setModal = visibleModal => {
    this.setState({ visibleModal });
  }
  setScore = score => {
    this.setState({ score });
  }
  render() {
    const { gameOn, score, visibleModal } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Start
          key={0}
          gameOn={gameOn}
          setGame={this.setGame}
          setModal={this.setModal}
          closeModal={this.closeModal}
          setScore={this.setScore}
        />
        {visibleModal &&
          <ModalResult
            key={2}
            closeModal={this.closeModal}
            score={score}
          />
        }
      </View>
    );
  }
}
