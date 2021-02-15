import React, { Component } from "react";
import { Media } from "reactstrap";

class Dish extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.selDish != null) {
    //   const finalFunc = this.props.selDish.map((dish) => {
    //     for (const comment of dish.comments) {
    //       return comment.author;
    //     }
    //   });
    // }
    
    // Added in a comment for testing purposes
    return (
      <div className="container">
        <div className="row">{this.props.menuProp}</div>
        <div className="row">
          {this.props.dishDet()}
          <Media list>
            {this.props.commentProp()}
          </Media>
        </div>
      </div>
    );
  }
}
// const dishComments = this.props.selDish.map((dish) => {
//   return (
//       <Media tag="li">
//         <Media body>{dish.comments.comment}</Media>
//       </Media>
//   );
// });
export default Dish;
