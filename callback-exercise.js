
const repos = [{repoId: 1, repoName: 'repo1'}, {repoId: 2, repoName: 'repo2'}, {repoId: 3, repoName:'repo3'}];

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Return user with id', id);
        callback({id: id, name: 'Anas'});
    }, 2000);
}

function getRepositories(userName, repId, callback) {
    setTimeout(() => {
        console.log(`Retuning all repositories for user: ${userName}`);
        console.log(`these the Repositories: ${JSON.stringify(repos)}`);
        console.log(repos[repId].repoName);
        callback(repos[repId].repoName);
    }, 1500);
}

function getCommites(repoName, callback){
    setTimeout(() => {
        console.log(`Returning commites for ${repoName} repository`);
        callback(['First Commite']);
    }, 1000);
}

function displayCommites (commitee) {
    setTimeout(() => {
        console.log(commitee);
    }, 500);
}

getUser(1, (user) => {
    getRepositories(user.name, 1, (repo) => {
        getCommites(repo.repoName, (com) => {
            displayCommites(com);
        });
    });
});