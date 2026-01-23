getUser(1, (user) => {
    getRepositories(user.username,(repos ) =>{
        console.log('repos' );
    })
});


function getRepositories (username, Callback){
    setTimeout(() => {
        console.log('Checking from the databse...')
    }, 2000);
    Callback([repo1, repo2, repo3, repo4]);
}