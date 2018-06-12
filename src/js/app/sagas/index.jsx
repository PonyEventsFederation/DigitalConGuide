const sagas = [
];

export default (middleware) => {
    sagas.forEach((saga) => {
        for (let func in saga) {
            middleware.run(saga[func]);
        }
    });
}