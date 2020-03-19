const cureFound = require('../fixtures/cureFound');
const cure = require('../fixtures/cure');

const getCureData = () => {
    /* making a logic just because,
    i want to simulate that the cure has been found after some time,
    and not immediatly */

    const getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    switch (getRandom(1, 3)) {
        case 1:
            return cureFound;
        case 2:
            return cure;
    };
};

module.exports = { getCureData };