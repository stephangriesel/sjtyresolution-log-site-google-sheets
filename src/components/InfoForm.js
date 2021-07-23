import React, { Component } from "react"
import { Button, Form, Container, Header } from "semantic-ui-react"
import axios from "axios"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      start_time: "",
      end_time: "",
      truck_registration: "",
      driver_name: "",
      odometer_reading: "",
      pressure_reader: "",
      tracking_no: "",
      thread_depth: "",
      brand: "",
      replacement: "",
      condition: "",
      thread_pattern: "",
      torque_wheel_nuts: "",
      tyremovement_in_order: "",
      tyre_used: "",
      comments: "",
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)

    axios
      .post(
        "https://sheet.best/api/sheets/208a1f15-0739-4d0e-a700-16b34cb621a4",
        this.state
      )
      .then(response => {
        console.log(response)
      })
  }

  render() {
    const {
      date,
      start_time,
      end_time,
      truck_registration,
      driver_name,
      odometer_reading,
      pressure_reading,
      tracking_no,
      thread_depth,
      brand,
      replacement,
      condition,
      thread_pattern,
      torque_wheel_nuts,
      tyremovement_in_order,
      tyre_used,
      comments,
    } = this.state
    return (
      <Container fluid className="container">
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Date</label>
            <input
              placeholder="Enter date"
              type="date"
              name="date"
              value={date}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Start Time</label>
            <input
              placeholder="Select start time"
              type="time"
              name="start_time"
              value={start_time}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>End Time</label>
            <input
              placeholder="Select end time"
              type="time"
              name="end_time"
              value={end_time}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Truck Registration</label>
            <input
              placeholder="Enter registration"
              type="text"
              name="truck_registration"
              value={truck_registration}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Driver Name</label>
            <input
              placeholder="Enter driver name"
              type="text"
              name="driver_name"
              value={driver_name}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Odometer Reading</label>
            <input
              placeholder="Enter odometer reading"
              type="text"
              name="odometer_reading"
              value={odometer_reading}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Pressure Reading</label>
            <input
              placeholder="Enter pressure reading"
              type="text"
              name="pressure_reading"
              value={pressure_reading}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Tracking No.</label>
            <input
              placeholder="Enter tracking no."
              type="text"
              name="tracking_no"
              value={tracking_no}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Thread Depth</label>
            <input
              placeholder="Enter thread depth"
              type="text"
              name="thread_depth"
              value={thread_depth}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Brand</label>
            <input
              placeholder="Enter brand"
              type="text"
              name="brand"
              value={brand}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Replacement</label>
            <input
              placeholder="Replacement, YES/NO?"
              type="text"
              name="replacement"
              value={replacement}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Condition</label>
            <input
              placeholder="Enter condition"
              type="text"
              name="condition"
              value={condition}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Thread Pattern</label>
            <input
              placeholder="Enter thread patterm"
              type="text"
              name="thread_pattern"
              value={thread_pattern}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Torque Wheel Nuts</label>
            <input
              placeholder="Torque wheel nuts, YES/NO?"
              type="text"
              name="torque_wheel_nuts"
              value={torque_wheel_nuts}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Tyre Movement In Order</label>
            <input
              placeholder="Enter tyre movement in order"
              type="text"
              name="tyremovement_in_order"
              value={tyremovement_in_order}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Tyre Used</label>
            <input
              placeholder="What tyre was used?"
              type="text"
              name="tyre_used"
              value={tyre_used}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Comments</label>
            <input
              placeholder="Enter registration"
              type="text"
              name="comments"
              value={comments}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
