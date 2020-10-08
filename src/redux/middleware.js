import {showAlert} from './actions';

const forbidden = ['fuck', 'love', 'php'];

export default function forbiddenWords ({dispatch}) {
  return function(next) {
      return function (action) {
          if (action.type === 'CREATE_POST') {
                const found = forbidden.filter(w => action.payload.title.includes(w));
                if (found.length) {
                    return dispatch(showAlert(`Не упретребяйте слова вроде ${found.join(', ')}`));
                }
          }
          return next(action);
     };
   };
};
