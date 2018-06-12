import * as navSagas from './navigation.saga';

const sagas = [
    navSagas
];

export default (middleware) => {
    sagas.forEach((saga) => {
        for (let func in saga) {
            middleware.run(saga[func]);
        }
    });
}