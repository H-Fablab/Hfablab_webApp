// server-side-functions.js

const _ = require('lodash'); // Import the lodash library for string manipulation

function truncateText(text, maxLength) {
  // Use lodash to truncate text and add ellipsis if needed
  return _.truncate(text, { length: maxLength });
}

module.exports = {
  truncateText,
};
