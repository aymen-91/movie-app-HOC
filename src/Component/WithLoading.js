import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

function WithLoading(Movie) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Movie {...props} />);
    return <div className="loading"><Loader  type="Puff"
    color="#00BFFF"
    height={100}
    width={100} /></div>  }
}
export default WithLoading;