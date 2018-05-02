module.exports = (messages) => messages.filter(x => x.message.length < 50).map(x => x.message);
