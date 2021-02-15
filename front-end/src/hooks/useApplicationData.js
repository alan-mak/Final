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
              console.log(data);
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
      console.log(data);
      dispatch({
          type: SET_TASKS,
          tasks: data
      });
  })
  .catch((err) => console.log(err));
  }, [])

  return {
      state,
      dispatch
  };
};

export default useApplicationData;