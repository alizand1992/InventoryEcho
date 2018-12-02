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
import {login} from "../actions/userActions";

class UserView extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.login(this.state);
  };

  render() {
    const userFields = [
        { name: "email", type: "email", placeholder: "Email" },
        { name: "password", type: "password", placeholder: "Password" },
    ];

    return (
      <React.Fragment>
        <Container className="margined-container">
          {/*<Row>*/}
            {/*<Col md={{size: 6, offset: 3}}>*/}
              {/*<div className="alert alert-warning">*/}
              {/*</div>*/}
            {/*</Col>*/}
          {/*</Row>*/}
          <Row>
            <Col md={{size: 6, offset: 3}}>
              <Form onSubmit={this.onSubmit}>
              <Card>
                <CardHeader>
                  Login
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    {userFields.map((user) =>
                      <React.Fragment>
                        <FormGroup>
                          <Input key={user.name} name={user.name} type={user.type} placeholder={user.placeholder} onChange={this.onChange} />
                        </FormGroup>
                      </React.Fragment>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <a href="/user/register"><span className="text-muted" style={{fontSize: 0.95 + "em"}}>Not a user? Register!</span></a>
                  </FormGroup>
                  <FormGroup className="text-right">
                      <Button className="btn btn-primary">Login</Button>
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

//at bottom, replace export default with
const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { login }
)(UserView);
