const Users = ['Sam', 'Ellie', 'Bernie'];

function addUser(user) {
    setTimeout(() => {
        console.log(`Adding User: ${user}`)
        Users.push(user);
    }, 2000);
}

function getUsers(id) {
    setTimeout(() => {
        console.log(`these are the users: ${Users[id]}`)
    },2000);
}

/*console.log('First Line without callback');
addUser('Anas');
console.log('Second Line without callback');
getUsers();*/

function addUserCallback (user, callback) {
    setTimeout(() => {
        console.log(`trying to add user: ${user}`);
        Users.push(user);
        callback(3);
    }, 2000);
}

console.log('first line with callback');
addUserCallback('anas-aljundi', getUsers);