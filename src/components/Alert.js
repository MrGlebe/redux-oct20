import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideAlert} from '../redux/actions';

export default () => {

    const dispatch = useDispatch();
    const alert = useSelector(state => state.app.alert);

    if(!alert) {
        return null;
    }

  return (
      <div className="alert alert-warning alert-dismissible">
          <strong>Увага</strong> {alert}
          <button className="close"
          onClick={() => dispatch(hideAlert())}
          >
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
  );
};
