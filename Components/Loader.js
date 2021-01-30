import React from "react";
import Loader from "react-native-modal-loader";

const AppLoader = props => {
  return (
    <Loader loading={props.isLoading} size="large" color='black' />
  );
};

export default AppLoader;
