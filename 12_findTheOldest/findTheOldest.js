const findTheOldest = function(people) {
    Oldest = 0;
    index = 0;
    for (let i = 0; i < people.length; ++i) {
        if (people[i]['yearOfDeath'] === undefined) {
            death = new Date(). getFullYear();
        } else {
            death = people[i]['yearOfDeath'];
        }

        age = death - people[i]['yearOfBirth'];
        if (age > Oldest) {
            Oldest = age;
            index = i;
            continue;
        };
        Oldest = age;
    }

    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
