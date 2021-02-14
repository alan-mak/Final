import React from 'react';
import TextBox from '../TextBox';
import Button from '../Button';

export default function Create () {
  return (
    <div>
      <TextBox message="Fill out this simple form and we'll find people to help!" />
    <form id="task-wrapper">
      <div className="form-group">
        <label for="title">What Do you need done? </label>
        <input type="text" placeholder="Shovelling, errands run etc." name="title" />
      </div>
      <div className="form-group">
        <label for ="description">Are there any more details about the task you need assistance with?</label>
        <input id="task-description" type="text" placeholder="Please write anything your volunteer should know about this task" size="100" />
      </div>
      <div className="form-group">
        <label for="time">Please estimate how many minutes the the task should take</label>
        <input type="number" placeholder="123412341235123412412" size="5" name="time_to_complete"/>
      </div>
      <Button message="Post Task!" />
    </form>
    </div>
  )
}