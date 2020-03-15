const PID = process.pid;

module.exports = (...args) => {
  console.log(`[PID: ${PID}]`.magenta, ...args);
};
