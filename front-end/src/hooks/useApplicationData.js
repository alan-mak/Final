import { useEffect, useReducer, useState } from 'react';

import dataReducer, {
  SET_USERS,
  SET_TASKS,
  SET_LOGGEDIN,
  SET_CHANNELS,
} from '../reducer/data_reducer';

import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
    tasks: [],
    loggedIn: sessionStorage.token,
  });

  const setLoggedIn = data => {
    dispatch({
      type: SET_LOGGEDIN,
      loggedIn: data,
    });
  };

  const setTasks = task => {
    dispatch({
      type: SET_TASKS,
      tasks: [...state.tasks, task],
    });
  };

  const [accepted, setAccepted] = useState([]);

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

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/channels',
    })
      .then(({ data }) => {
        dispatch({
          type: SET_CHANNELS,
          channels: data,
        });
      })
      .catch(err => console.log(err));
  }, []);

  function createChannel(channel) {
    console.log('CREATINGGGG! ', channel);
    return axios.post('/api/channels', channel);
  }

  function completeTask(task) {
    console.log(task);
    let time = Date.now();
    task.completed_at = time;
    console.log(task.completed_at);
    return axios({
      method: 'put',
      url: `/api/tasks/${task.id}`,
      data: { task },
    }).catch(err => console.log(err));
  }

  function cancelTask(task) {
    console.log('deleting: ', task);
    return axios({
      method: 'delete',
      url: `/api/tasks/${task.id}`,
      data: { task },
    }).catch(err => console.log(err));
  }

  async function createUser(user) {
    const turtle =
      user.street.split(' ').join('+') +
      ',' +
      user.city.split(' ').join('+') +
      ',' +
      user.province.split(' ').join('+');

    const findCoord = incData => {
      return axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: incData,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          },
        })
        .then(res => {
          return res.data.results[0].geometry.location;
        })
        .catch(err => console.log(err));
    };

    const dinosaur = await findCoord(turtle).then(data => {
      user.lat = data.lat;
      user.lng = data.lng;
      return user;
    });
    return axios.post(`/api/users/register`, { user });
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

  function addToAccepted(task) {
    if (accepted.length < 1) {
      let taskList = [];
      let newTask = task;
      taskList.push(newTask);
      setAccepted(taskList);
    } else {
      let newTask = task;
      setAccepted([...accepted, newTask]);
    }
  }

  function acceptTask(recipient_id, helper_id) {
    console.log('you are ', helper_id);
    let task = getTaskById(recipient_id);
    console.log('accepting task,', task);
    task.helper_id = helper_id;
    task.accepted_at = Date.now();
    addToAccepted(task);
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
      recipient_id: recipient_id,
    };

    return axios({
      method: 'post',
      url: `/api/tasks`,
      data: { task },
    }).catch(err => console.log(err));
  }

  function getTask(taskID) {
    return axios({
      method: 'GET',
      url: `/api/tasks/${taskID}`,
    }).catch(err => console.log(err));
  }

  function getWeather(obj) {
    return axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    })
    .catch(err => console.log(err))
  }

  return {
    state,
    dispatch,
    createUser,
    loginUser,
    acceptTask,
    createTask,
    accepted,
    setLoggedIn,
    createChannel,
    getTask,
    setTasks,
    getWeather,
    completeTask,
    cancelTask
  };
};

export default useApplicationData;
