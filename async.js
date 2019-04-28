const repos =['repo1', 'repo2', 'repo3'];
const commites = [
    {repoName: 'repo1', commites :[
        {commiteName:'firstinital', date:'2016-05-23'},
        {commiteName:'SecondCommite', date:'2016-06-01'},
        {commiteName:'AddNewFeature', date:'2016-08-23'}
    ]},
    {repoName: 'repo2', commites: [
        {commiteName:'initalizing', date:'2017-06-30'},
        {commiteName:'FixBug', date:'2017-07-12'},
        {commiteName:'AddnewService', date:'2017-12-25'}
    ]},
    {repoName: 'repo3', commites: [
        {commiteName: 'addPrimaryFeatures', date:'2019-01-15'},
        {commiteName: 'editingLoginProcess', date:'2019-01-18'},
        {commiteName: 'addThirdPartyAuthontication', date:'2019-02-28'}
    ]}
];

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Fetching user');
        callback({id:id, name: 'anas'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log(`fetching repositories for this user: ${repos}`);
        callback({username: username, repositories: repos[1]});
    }, 2000);
}

function getCommites(repo) {
    setTimeout(() => {
        console.log(`fetching commites for this repo ${JSON.stringify(repo)} : ${JSON.stringify(commites)}`);
        console.log({repoName: repo, commite: commites[1]});
    }, 2000);
}

function displayCommites(repos) {
    getCommites(repos);
}

function displayRepositories(user) {
    getRepositories(user.name, displayCommites);
}

getUser(1, displayRepositories );

//second way to call
/*getUser(1, (user) => {
    getRepositories(user.name, (repos) => {
        getCommites(repos)
    });
});*/