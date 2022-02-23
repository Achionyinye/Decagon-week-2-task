const input = [
    {
        name: 'Hendrick',
        dob: '1853-07-18T00:00:00.000Z',
        regNo: '041',
    },
    {
        name: 'Albert',
        dob: '1879-03-14T00:00:00.000Z',
        regNo: '033',
    },
    {
        name: 'Marie',
        dob: '1867-11-07T00:00:00.000Z',
        regNo: '024',
    },
    {
        name: 'Neils',
        dob: '1885-10-07T00:00:00.000Z',
        regNo: '02',
    },
    {
        name: 'Max',
        dob: '1858-04-23T00:00:00.000Z',
        regNo: '014',
    },
    {
        name: 'Erwin',
        dob: '1887-08-12T00:00:00.000Z',
        regNo: '09',
    },
    {
        name: 'Auguste',
        dob: '1884-01-28T00:00:00.000Z',
        regNo: '08',
    },
    {
        name: 'Karl',
        dob: '1901-12-05T00:00:00.000Z',
        regNo: '120',
    },
    {
        name: 'Louis', //
        dob: '1892-08-15T00:00:00.000Z',
        regNo: '022',
    },
    {
        name: 'Arthur',
        dob: '1892-09-10T00:00:00.000Z',
        regNo: '321',
    },
    {
        name: 'Paul',
        dob: '1902-08-08T00:00:00.000Z',
        regNo: '055',
    },
    {
        name: 'William',
        dob: '1890-03-31T00:00:00.000Z',
        regNo: '013',
    },
    {
        name: 'Owen',
        dob: '1879-04-26T00:00:00.000Z',
        regNo: '052',
    },
    {
        name: 'Martin',
        dob: '1871-02-15T00:00:00.000Z',
        regNo: '063',
    },
    {
        name: 'Guye',
        dob: '1866-10-15T00:00:00.000Z',
        regNo: '084',
    },
    {
        name: 'Charles',
        dob: '1868-02-14T00:00:00.000Z',
        regNo: '091',
    },
];


// Get no ofgroups
let noOfGroups = input.length;

let output = {};
let totalNumberOfGroups;
output.noOfGroups = noOfGroups;

let members = [];
input.forEach((member) => {
    let temp = {};
    let age = 2019 - member.dob.split('T')[0].split('-')[0];
    temp.name = member.name;
    temp.age = age;
    members.push(temp);
});

for (let i = 1; i < getNumberOfGroups(input); i++) {
    output[`group${i}`] = {};
    output[`group${i}`].members = [];
    members.forEach(member => {
        let ageSum = 0;
        let temp = {};
        while (output[`group${i}`].members.length < 3) {
            ageSum += member.age;
            temp.sum = ageSum;
            output[`group${i}`].members.push(temp);
        }
        // while (output[`group${i}`].members.length < 3) {
        //     ageSum += member.age;
        //     i++;
        // }
        member.sum = ageSum;
    });
    console.log(members);
}

// keep tracks of the groups
// let i = 1;

// iterate through the inputs
// input.forEach(
//     function (member) {
//         // creating groups using computed properties
//         output[`group${i}`] = {};
//         output[`group${i}`].members = [];


//         for (let j = 0; j < 3; j++) {
//             output[`group${i}`].members[j] = member;
//             i++;
//         }


//         i++;
//     }
// ); // Using an higher order function "forEach" to iterate

function getNumberOfGroups(input) {
    let counter = 0;
    let i = 0;
    while (i < input.length) {
        i += 3
        counter++;
    }
    return counter;
}


// for (let j = 1; j <= getNumberOfGroups(input); j++) {
//     output[`group${j}`] = {}
//     output[`group${j}`].members = [];
// }



// function splitArrayIntoChunksOfLen(input) {
//     let members = [];
//     let i = 0;
//     let n = input.length;
//     while (i < n) {
//         members.push(input.slice(i, i += 3));
//     }
//     return members;
// }

function splitArrayIntoChunksOfLen(input) {
    let members = [];
    let i = 0;
    let n = input.length;
    while (i < n) {
        members.push(input.slice(i, i += 3));
    }
    return members;
}

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

// console.log(output);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.slice(1, 3);
// console.log(arr);


// var alphabet=['a','b','c','d','e','f'];
// let count = 1;
// for (let i = 0; i < input.length; i++) {
//     output[`group${count}`] = {};
//     output[`group${count}`].members = [];

//     let j;
//     for (j = 0; j < 3; j++) {
//         if (input[i]) {
//             output[`group${count}`].members[j] = input[i];
//             if (output[`group${count}`].members[j] != 3) {
//                 i++;
//             } else {
//                 i = i+j;
//                 count++;
//             }
//             console.log("i{from this}: " + i);
//         }
//     }
//     // output[`group${count}`].members[j] = input[i];
//     // i = j;
//     // console.log("i: " + i);
//     // console.log("count: " + count);
//     // count++;
// }


// console.log(output);