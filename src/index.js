import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
//import Clock from './Clock';

const App = () => {
  const [lat, setLat] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setError(err.message)
    );
  }, []) // empty array, so run the arrow func one time in the life cycle of the compoenent

  let content;
  if (error) content = <div>error: {error}</div>
  else if (lat) content = <SeasonDisplay latitude={lat} />;
  else content = <Loader loaderText='Press Allow on location sharing prompt' />;

  return <div className='border red'>{content}</div>
}

// class App extends React.Component {
//   // use constructor for one time setup, not for data loading
//   //   constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //       latitude: null,
//   //       errorMessage: null
//   //     };
//   //   }

//   // the easy way to initialize state, Babel implements the constructor for us
//   state = { latitude: null, errorMessage: null };
//   // always do data loading here
//   componentDidMount() {
//     //setting state
//     // set the geolocation in Console drawer/Sensors
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ latitude: position.coords.latitude }),
//       err => this.setState({ errorMessage: err.message })
//     );
//   }

//   renderContent() {
//     if (this.state.latitude && !this.state.errorMessage) return <SeasonDisplay latitude={this.state.latitude} />;
//     if (!this.state.latitude && this.state.errorMessage) return <div>error: {this.state.errorMessage}</div>;
//     return <Loader loaderText='Press Allow on location sharing prompt' />;
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.renderContent()}</div>
//         <Clock />
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));
