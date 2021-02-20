import { useEffect, useReducer, useState } from 'react';
import dataReducer, { SET_USERS, SET_TASKS } from '../reducer/data_reducer';
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
    tasks: [],
  });

  const [tasks, setTasks] = useState([]);
  // const [accepted, setAccepted] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users',
    })
      .then(({ data }) => {
        dispatch({
          type: SET_USERS,
          users: data,
        });
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/tasks',
    })
      .then(({ data }) => {
        dispatch({
          type: SET_TASKS,
          tasks: data,
        });
      })
      .catch(err => console.log(err));
  }, []);

  function createUser(user) {
    console.log(user);
    return axios.post(`/api/users/register`, { user })
  }

  function loginUser(user) {
    return axios
      .post(`/api/users/login`, { user })
      .catch(err => console.log(err));
  }
  // getTaskById and AcceptTask register helpers to posted tasks
  function getTaskById(id) {
    let tasks = [...state.tasks];
    for (let task in tasks) {
      if (tasks[task].recipient_id === id) {
        return tasks[task];
      }
    }
    return null;
  }

  // function addToAccepted(task) {
  //   if (accepted.length < 1) {
  //     let taskList = [];
  //     let newTask = task;
  //     taskList.push(newTask);
  //     setAccepted(taskList);
  //   } else {
  //     let newTask = task;
  //     setAccepted([...accepted, newTask]);
  //   } 
  // }

  function acceptTask(recipient_id, helper_id) {
    let task = getTaskById(recipient_id);
    task.helper_id = helper_id;
    task.accepted_at = Date.now();
    // addToAccepted(task);
    console.log(task);
    return axios({
      method: 'put',
      url: `/api/tasks/${task.id}`,
      data: { task },
    }).catch(err => console.log(err));
  }

  function createTask(title, description, duration, recipient_id) {
    const task = {
      name: title,
      description: description,
      duration: duration,
      recipient_id: recipient_id
    };

    return axios({
      method: 'post',
      url: `/api/tasks`,
      data: { task },
    }).catch(err => console.log(err));
  }


  return {
    state,
    dispatch,
    createUser,
    loginUser,
    acceptTask,
    createTask,
    // accepted
  };
};

export default useApplicationData;
