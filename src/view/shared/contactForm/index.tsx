import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { TextInput } from "./../forms/Textinput";
class ContactForm extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  formHandler = (e: any) => {
    e.preventDefault();
    console.log("data", e);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.formHandler}>
          <FormGroup>
            <TextInput
              type="text"
              name="name"
              placeholder="Enter your name"
              fieldLabel="Name"
            />
          </FormGroup>
          <FormGroup>
            <TextInput
              type="text"
              name="email"
              placeholder="Enter your Email"
              fieldLabel="Email"
            />
          </FormGroup>
          <FormGroup>
            <TextInput
              type="text"
              name="mobile"
              placeholder="Enter your mobile"
              fieldLabel="Mobile"
            />
          </FormGroup>
          <FormGroup>
            <TextInput
              type="text"
              name="message"
              placeholder="Enter your Message"
              fieldLabel="Message"
            />
          </FormGroup>
          <Button type="submit" className="btn">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default ContactForm;
