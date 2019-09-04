const req = require.context('./json', true, /.json$/);
let modules = req.keys().map(req);
const messages = {};

modules.forEach((element) => {
  const keys = Object.keys(element);
  keys.forEach((key) => {
    if (messages[key] !== undefined) {
      throw new Error('current transID is duplicated!');
    }
    messages[key] = element[key];
  });
});

export default messages;
