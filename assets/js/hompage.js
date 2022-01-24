var getUserRepos = function(user){
    //format teh git hub api url 
    var apiUrl = 'https://api.github.com/users/' + user + "/repos";

    // make a request to the Url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};

getUserRepos();