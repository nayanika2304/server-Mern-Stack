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

    ));

    app.get('/api/logout',(req,res) =>{
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user',(req,res) =>{
        res.send(req.user);
    })


}

