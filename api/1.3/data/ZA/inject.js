const { random, pad, include, } = require('../../api');

module.exports = (inc, contents) => {
    const pic = contents.picture;
    delete contents.picture;

    include(inc, contents, 'phone', '(0' + random(3, 2) + ') ' + random(3, 3) + ' ' + random(3, 4));
    include(inc, contents, 'cell', '(0' + random(3, 2) + ') ' + random(3, 3) + ' ' + random(3, 4));
    include(inc, contents, 'id', () => {
        const dobDate = new Date(contents.dob.date);
        const day = dobDate.getDate();
        const month = dobDate.getMonth() + 1;
        const year = String(dobDate.getFullYear()).substr(2, 2);

        contents.id = {
            name: 'RSAID',
            value: pad(year, 2) + pad(month, 2) + pad(day, 2) + String(random(3, 4)) + '' + String(random(3, 3))
        };
    });
    include(inc, contents, 'location', () => {
        contents.location.coordinates = {
            latitude: (-29 + (Math.random() > 0.5 ? Math.random() * 5 : Math.random() * -5)).toFixed(4),
            longitude: (24 + (Math.random() > 0.5 ? Math.random() * 3 : Math.random() * -3)).toFixed(4),
        };
    });
    include(inc, contents, 'picture', pic);
};
