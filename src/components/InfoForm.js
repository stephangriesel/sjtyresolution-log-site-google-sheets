import React, { Component } from "react"
import { Button } from "./common/Button"
import { Form } from "./common/Form"
import { Container } from "./common/Container"
import { Input } from "./common/Input"
import { Select } from "./common/Select"

import axios from "axios"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      tyre_position: "",
      truck_trailer: "",
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
      tyre_position,
      truck_trailer,
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
              required
            />
          </>
          <>
            <label>Tyre Position</label>
            <Input
              placeholder="Tyre Position"
              type="number"
              name="tyre_position"
              value={tyre_position}
              onChange={this.changeHandler}
              required
            />
          </>
          <>
            <label>Truck or Trailer</label>
            <Select name="truck_trailer" onChange={this.changeHandler} required>
              <option>--Make selection--</option>
              <option value="Truck">Truck</option>
              <option value="Trailer">Trailer</option>
            </Select>
          </>
          <>
            <label>Start Time</label>
            <Input
              placeholder="Select start time"
              type="time"
              name="start_time"
              value={start_time}
              onChange={this.changeHandler}
              required
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
              required
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
              required
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
              required
            />
          </>
          <>
            <label>Odometer Reading</label>
            <Input
              placeholder="Enter odometer reading"
              type="number"
              name="odometer_reading"
              value={odometer_reading}
              onChange={this.changeHandler}
              required
            />
          </>
          <>
            <label>Pressure Reading</label>
            <Input
              placeholder="Enter pressure reading"
              type="number"
              name="pressure_reading"
              value={pressure_reading}
              onChange={this.changeHandler}
              required
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
              required
            />
          </>
          <>
            <label>Thread Depth</label>
            <Input
              placeholder="Enter thread depth"
              type="number"
              name="thread_depth"
              value={thread_depth}
              onChange={this.changeHandler}
              required
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
              required
            />
          </>
          <>
            <label>Replacement</label>
            <Select name="replacement" onChange={this.changeHandler} required>
              <option>--YES/NO?--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </>
          <>
            <label>Condition</label>
            <Input
              placeholder="Enter condition"
              type="text"
              name="condition"
              value={condition}
              onChange={this.changeHandler}
              required
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
              required
            />
          </>
          <>
            <label>Torque Wheel Nuts</label>
            <Select
              name="torque_wheel_nuts"
              onChange={this.changeHandler}
              required
            >
              <option>--YES/NO?--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </>
          <>
            <label>Tyre Movement In Order</label>
            <Input
              placeholder="Enter tyre movement in order"
              type="text"
              name="tyremovement_in_order"
              value={tyremovement_in_order}
              onChange={this.changeHandler}
              required
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
              required
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

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}
