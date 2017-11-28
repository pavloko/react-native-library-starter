import React from 'react';
import PropTypes from 'prop-types';
import ReactNativeLibraryStarter from 'react-native-library-starter';

export default function MainComponent(props) {
  return <ReactNativeLibraryStarter/>
}

MainComponent.defaultProps = {
  children: null,
};

MainComponent.propTypes = {
  children: PropTypes.node,
};
