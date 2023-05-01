function signUp(){
    document.getElementById('log_id').style.zIndex = '1';
    document.getElementById('sign_id').style.zIndex = '2';
    
    document.getElementById('ipt_log_a').value = '';
    document.getElementById('ipt_log_b').value = '';
}
function signIn(){
    document.getElementById('log_id').style.zIndex = '2';
    document.getElementById('sign_id').style.zIndex = '1';

    document.getElementById('ipt_sign_a').value = '';
    document.getElementById('ipt_sign_b').value = '';
}

function registerUser(){
    var username = document.getElementById('ipt_sign_email').value;
    var password = document.getElementById('ipt_sign_pass').value;

    console.log(username);
    console.log(password);

    var user = {
        username: username,
        password: password
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');
    alert('User Registered Successfully!');

}

function loginUser(){
    var username = document.getElementById('ipt_log_a').value;
    var password = document.getElementById('ipt_log_b').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

        if(user == null){
            alert('Wrong Username!');
        } else if(username == data.username && password == data.password){
            window.location.href = "https://sherreeswen.github.io/Andal_Nacaitona.BusinessWebsite.github.io/index.html";
            alert('Successfully Logged in!');
        } else {
            alert('Wrong Password!');
        }
}