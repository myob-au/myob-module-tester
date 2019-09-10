var decode = require('urldecode');
const myobtest = require("myob-package");

//Token after you login using api url
let _token_code = '[ENTER_TOKEN_HERE]';

console.log(myobtest({
    client_id : '[client_id]',
    client_secret : '[client_secret]',
    grant_type : 'refresh_token',
    refresh_token : decode(_token_code)
}));