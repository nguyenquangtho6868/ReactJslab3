import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function renderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} value={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {comment.date}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (this.props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.RenderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
