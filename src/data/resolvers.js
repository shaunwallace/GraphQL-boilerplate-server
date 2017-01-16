const users = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const resolveFunctions = {
    Query: {
        users: () => users,
        user: (...args) => {
            const user = users.find(usr => usr.id.toString() === args[1].id);
            if (!user) {
                throw new Error(`Couldn't find user with id ${args[1].id}`);
            }
            return user;
        },
    },
};

export default resolveFunctions;
