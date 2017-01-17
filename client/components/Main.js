import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    );
  }
};

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>
//           <link to="/">Reduxstagram</link>
//         </h1>
//       </div>
//     )
//   }
// });
//
// export default Main;
