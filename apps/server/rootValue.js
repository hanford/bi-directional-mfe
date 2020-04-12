const { connectionFromArray } = require("graphql-relay");
const db = require("./db");

const viewer = variables => {
  return {
    id: db.id,
    user: db.user,
    allFeedPosts: connectionFromArray(db.feedPosts, variables)
  };
};

module.exports = { viewer };
