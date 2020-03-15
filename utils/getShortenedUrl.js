module.exports = ({ protocol, host, originalUrlId }) => {
  return `${protocol}://${host}/go/${originalUrlId}`;
};
