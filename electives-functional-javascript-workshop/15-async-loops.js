module.exports = (userIds, load, done) => {
    let completed = 0;
    let users = [];
    userIds.forEach((userId, i) => {
        load(userId, (user) => {
            users[i] = user;
            if(++completed === userIds.length)
                return done(users);
        });
    });
};
