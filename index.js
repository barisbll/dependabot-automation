const _ = require('lodash');

const getOnlyTrueValues = (values) => {
    return _.compact(values);
}

module.exports = {
    getOnlyTrueValues
}