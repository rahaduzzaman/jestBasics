const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    chechValue: (x) => x,
    createUser: () => {
        const user = {firstName : 'MD'};
        user['lastName'] = 'Rahaduzzaman';
        return user;
    }
    }

module.exports = functions;