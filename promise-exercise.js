
const repos = [{repoId: 1, repoName: 'repo1'}, {repoId: 2, repoName: 'repo2'}, {repoId: 3, repoName:'repo3'}];

function getUser(id) {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            console.log('Return user with id', id);
            resolve({id: id, name: 'Anas'});
        }, 2000);

    });
}

function getRepositories(userName, repId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Retuning all repositories for user: ${userName}`);
            console.log(`these the Repositories: ${JSON.stringify(repos)}`);
            console.log(repos[repId].repoName);
            resolve(repos[repId].repoName);
        }, 1500);
    });
}

function getCommites(repoName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Returning commites for ${repoName} repository`);
            resolve(['First Commite']);
        }, 1000);
    });
}

function displayCommites (commitee) {
    setTimeout(() => {
        console.log(commitee);
    }, 500);
}

getUser(1).then(res => getRepositories(res.name, 1).then(res => getCommites(res).then(res => displayCommites(res))));