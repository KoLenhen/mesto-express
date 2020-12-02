const path = require('path');
const getFileData = require('../helpers/files');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  return getFileData(dataPath)
    .then(users => res.status(200).send(users))
    .catch(error => res.status(500).send(error));
};

const getUser = (req, res) => {
  return getFileData(dataPath)
    .then(users => users.find(user => user._id === req.params.id))
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    })
    .catch(error => res.status(500).send(error));
};

module.exports = { getUsers, getUser };