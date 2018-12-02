import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Form,
} from "reactstrap";
import { connect } from "react-redux";
import {createUser} from "../actions/userActions";

class RegisterUserView extends Component {
  state = {
    email: "",
    password: "",
    r_password: "",
    first_name: "",
    last_name: "",
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.createUser(this.state);
  };

  render() {
    const userFields = [
      {name: "email", type: "email", placeholder: "Email"},
      {name: "password", type: "password", placeholder: "Password"},
      {name: "r_password", type: "password", placeholder: "Repeat Password"},
      {name: "first_name", type: "first_name", placeholder: "First Name"},
      {name: "last_name", type: "last_name", placeholder: "Last Name"},
    ];

    return (
      <React.Fragment>
        <Container className="margined-container">
          <Row>
            <Col md={{size: 6, offset: 3}}>
              <Form onSubmit={this.onSubmit}>
                <Card>
                  <CardHeader>
                    Register New User
                  </CardHeader>
                  <CardBody>
                    {userFields.map((user) =>
                      <React.Fragment>
                        <FormGroup>
                          <Input key={user.name} name={user.name} type={user.type} placeholder={user.placeholder} onChange={this.onChange} />
                        </FormGroup>
                      </React.Fragment>
                    )}
                    <FormGroup className="text-right">
                      <Button className="btn btn-primary">Register</Button>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  {createUser},
)(RegisterUserView);

