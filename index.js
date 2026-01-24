console.log('before');
getUser(1, function(user){
    console.log('user', user)

    getrepositories(user.githubRepo, (repos)=> console.log('repos', repos))
});
console.log('after');


function getUser(id, callback) {

    setTimeout(() =>{
        console.log('loading the timer...');
        callback({id: id, githubRepo : 'cassim'});
    }, 2000);   


};

function getrepositories(username, callback){
    setTimeout(
        ()=>{
            console.log('getting github repo API..' );
            callback(['repo1', 'repo2', 'repo3', 'repo4']); 
        }
    ,2000);
};


