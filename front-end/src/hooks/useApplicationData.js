import {
  useEffect,
  useReducer,
  useState
} from 'react';
import dataReducer, {
  SET_USERS,
  SET_TASKS
} from '../reducer/data_reducer';
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      loading: true,
      tasks: []
  });

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
      axios({
              method: 'GET',
              url: '/api/users',
          })
          .then(({
              data
          }) => {
              dispatch({
                  type: SET_USERS,
                  users: data
              });
          })
          .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/tasks',
  })
  .then(({
      data
  }) => {
      dispatch({
          type: SET_TASKS,
          tasks: data
      });
  })
  .catch((err) => console.log(err));
  }, [])
  
  function createUser(user) {
    return axios.post(`/api/users/register`, { user })
    // .catch(err => console.log("HI 57",err))
  }

  function loginUser(user) {
    return axios.post(`/api/users/login`, { user })
    .catch(err => console.log(err))
  }
// getTaskById and AcceptTask register helpers to posted tasks
  function getTaskById(id) {
    let tasks = [...state.tasks]
    for (let task in tasks) {
      if (tasks[task].recipient_id === id) {
        return tasks[task];
      }
    } return null;
  }

  function acceptTask(recipient_id, helper_id) {
    let task = getTaskById(recipient_id);
    task.helper_id = helper_id;
    console.log(task);
    return axios({method: 'put', url: `/api/tasks/${task.id}`, data: { task }})
    .catch(err => console.log(err));
 
  }

  return {
      state,
      dispatch,
      createUser,
      loginUser,
      acceptTask
  };
};

export default useApplicationData;