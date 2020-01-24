import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from './actions/counts';

class App extends Component {
  decrementCount() {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const { count } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text style={styles.textCenter}>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const ActionCreators = Object.assign(
  {},
  countActions,
);

// mapStateToProps will contain all the state properties which will be available to the components
// of the app whatever properties that need to be accessed from the UI components need to be written into
// the mapStateToProps helper function.
const mapStateToProps = state => ({
  count: state.count.count,
});

// mapDispatchToProps will contain all the necessary functions wrapped with action creators which
// will be mapped to the props of the app and can be called directly. The directory containing the
// file is ./actions/counts.js
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

// connect App.js to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  textCenter:{
    textAlign :'center',
    margin: 10,
  }
});
