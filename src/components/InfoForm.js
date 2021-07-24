import React, { Component } from "react"
import { Button } from "./common/Button"
import { Form } from "./common/Form"
import { Container } from "./common/Container"
import { Input } from "./common/Input"

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
        window.location = "/success"
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
          <>
            <label>Date</label>
            <Input
              placeholder="Enter date"
              type="date"
              name="date"
              value={date}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Start Time</label>
            <Input
              placeholder="Select start time"
              type="time"
              name="start_time"
              value={start_time}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>End Time</label>
            <Input
              placeholder="Select end time"
              type="time"
              name="end_time"
              value={end_time}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Truck Registration</label>
            <Input
              placeholder="Enter registration"
              type="text"
              name="truck_registration"
              value={truck_registration}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Driver Name</label>
            <Input
              placeholder="Enter driver name"
              type="text"
              name="driver_name"
              value={driver_name}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Odometer Reading</label>
            <Input
              placeholder="Enter odometer reading"
              type="text"
              name="odometer_reading"
              value={odometer_reading}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Pressure Reading</label>
            <Input
              placeholder="Enter pressure reading"
              type="text"
              name="pressure_reading"
              value={pressure_reading}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Tracking No.</label>
            <Input
              placeholder="Enter tracking no."
              type="text"
              name="tracking_no"
              value={tracking_no}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Thread Depth</label>
            <Input
              placeholder="Enter thread depth"
              type="text"
              name="thread_depth"
              value={thread_depth}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Brand</label>
            <Input
              placeholder="Enter brand"
              type="text"
              name="brand"
              value={brand}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Replacement</label>
            <Input
              placeholder="Replacement, YES/NO?"
              type="text"
              name="replacement"
              value={replacement}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Condition</label>
            <Input
              placeholder="Enter condition"
              type="text"
              name="condition"
              value={condition}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Thread Pattern</label>
            <Input
              placeholder="Enter thread patterm"
              type="text"
              name="thread_pattern"
              value={thread_pattern}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Torque Wheel Nuts</label>
            <Input
              placeholder="Torque wheel nuts, YES/NO?"
              type="text"
              name="torque_wheel_nuts"
              value={torque_wheel_nuts}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Tyre Movement In Order</label>
            <Input
              placeholder="Enter tyre movement in order"
              type="text"
              name="tyremovement_in_order"
              value={tyremovement_in_order}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Tyre Used</label>
            <Input
              placeholder="What tyre was used?"
              type="text"
              name="tyre_used"
              value={tyre_used}
              onChange={this.changeHandler}
            />
          </>
          <>
            <label>Comments</label>
            <Input
              placeholder="Additional Comments"
              type="text"
              name="comments"
              value={comments}
              onChange={this.changeHandler}
            />
          </>

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
