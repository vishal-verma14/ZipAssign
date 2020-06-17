import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './index';

function actionCreator(url) {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);

        dispatch(fetchSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  };
}

export {actionCreator};
