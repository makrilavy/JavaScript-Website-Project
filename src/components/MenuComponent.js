import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import Dish from "./DishComponent";
import { Media } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  finalFunc(dish) {
    if (dish != null) {
      const authors = [];
      const theirComments = [];
      const dates = [];
      const ids = [];
      for (const comment of dish.comments) {
        // console.log(comment);
        authors.push(comment.author);
        theirComments.push(comment.comment);
        dates.push(comment.date);
        ids.push(comment.id);
        // return (
        //   <Media tag="li">
        //   {"Author:" + comment.author + ", Comment: " + comment.comment + ", Date: " + comment.date}
        //   </Media>
        // );
      }
      let arr=[];
      for (let i = 0; i < authors.length; i++) {
        arr.push("ID: " + ids[i] + "Author: " + authors[i] + "Comment: " + theirComments[i] + "Date: " + dates[i]);
      }
      return (
        <Media tag="li">
          <Media body>
            {arr}
          </Media>
        </Media>
      );
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <Dish
        selDish={this.state.selectedDish}
        dishDet={() => this.renderDish(this.state.selectedDish)}
        menuProp={menu}
        commentProp={() => this.finalFunc(this.state.selectedDish)}
      />
    );
  }
}
export default Menu;
