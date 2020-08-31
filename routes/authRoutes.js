const passport = require('passport')


/*
Here passport.authenticate checks for the string 'google' and goes to the above declared strategy to use the ifo provided
 */

module.exports = (app) =>{
    app.get('/auth/google',passport.authenticate(
        'google',
        {scope: ['profile','email']},
        )
    );

    app.get('/auth/google/callback',passport.authenticate(
        'google',

    ))
}

