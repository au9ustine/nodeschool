module.exports = (goodUsers) => (submittedUsers) => submittedUsers.every(
    submittedUser => goodUsers.some(goodUser =>
        submittedUser.id === goodUser.id
    )
);
