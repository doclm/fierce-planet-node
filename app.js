
/**
 * Module dependencies.
 */



var express = require('express')
    , everyauth = require('everyauth')
    , conf = require('./conf')
    , MongoStore = require('connect-mongodb');




var app = module.exports = express.createServer();



// MongoDB stuff
var FPProvider = require('./db/FPProviderDB').FPProvider;
var fpProvider;


app.configure('development', function() {
    conf = require('./conf-local')
    fpProvider = new FPProvider('test', '127.0.0.1', '27017', function(error, res) {
	    if( error ) console.log(error);
	    else if (res) {
	    }
	});
});

//app.configure('development', function() {
////    fpProvider = new FPProvider('mongodb://heroku:password@staff.mongohq.com:10089/app708577?auto_reconnect=true', function(error, res) {
//	fpProvider = new FPProvider('app708577', 'staff.mongohq.com', '10089', function(error, res) {
//	    if( error ) console.log(error);
//	    else if (res) {
//	    }
//	}, 'heroku', 'password');
//});

app.configure('production', function() {
//    fpProvider = new FPProvider('mongodb://heroku:password@staff.mongohq.com:10089/app708577?auto_reconnect=true', function(error, res) {
	fpProvider = new FPProvider('app708577', 'staff.mongohq.com', '10089', function(error, res) {
	    if( error ) console.log(error);
	    else if (res) {
	    }
	}, 'heroku', 'password');
});


// Everyauth config
everyauth.debug = true;

var usersById = {};
var nextUserId = 0;

function addUser (source, sourceUser) {
  var user;
  if (arguments.length === 1) { // password-based
    user = sourceUser = source;
    user.id = ++nextUserId;
    usersById[nextUserId] = user;
  } else { // non-password-based
    user = usersById[++nextUserId] = {id: nextUserId};
    user[source] = sourceUser;

      // For FaceBook
    if (sourceUser.email)
        user.email = sourceUser.email;
      // For Google
    else if (sourceUser.id)
        user.email = sourceUser.id;
  }

  // Save to MongoDB
    fpProvider.saveUser(user, function(error, res) {
        if (res)
            user = res;
    });
    console.log(user)

  return user;
}
var usersByFbId = {};
var usersByGoogleId = {};
var usersByLogin = {};
everyauth.password.extractExtraRegistrationParams( function (req) {
  return {
      nickname: req.body.nickname
  };
});

everyauth.everymodule
  .findUserById( function (id, callback) {
    callback(null, usersById[id]);
  });
everyauth
  .facebook
    .appId(conf.fb.appId)
    .appSecret(conf.fb.appSecret)
    .findOrCreateUser( function (session, accessToken, accessTokenExtra, fbUserMetadata) {
      return usersByFbId[fbUserMetadata.id] ||
        (usersByFbId[fbUserMetadata.id] = addUser('facebook', fbUserMetadata));
    })
    .redirectPath('/');
everyauth.google
  .myHostname('http://www.fierce-planet.com/')
  .appId(conf.google.clientId)
  .appSecret(conf.google.clientSecret)
//  .scope('https://www.google.com/m8/feeds/')
    .scope('https://www.googleapis.com/auth/userinfo.profile') // What you want access to
    .handleAuthCallbackError( function (req, res) {
        // If a user denies your app, Google will redirect the user to
        // /auth/google/callback?error=access_denied
        // This configurable route handler defines how you want to respond to
        // that.
        // If you do not configure this, everyauth renders a default fallback
        // view notifying the user that their authentication failed and why.
    })
    .findOrCreateUser( function (sess, accessToken, extra, googleUser) {
        // find or create user logic goes here
        // Return a user or Promise that promises a user
        // Promises are created via
        //     var promise = this.Promise();
        googleUser.refreshToken = extra.refresh_token;
        googleUser.expiresIn = extra.expires_in;
        return usersByGoogleId[googleUser.id] || (usersByGoogleId[googleUser.id] = addUser('google', googleUser));
  })
  .redirectPath('/');
everyauth
  .password
    .loginWith('email')
    .getLoginPath('/login')
    .postLoginPath('/login')
    .loginView('login.jade')
//    .loginLocals({
//      title: 'Login'
//    })
//    .loginLocals(function (req, res) {
//      return {
//        title: 'Login'
//      }
//    })
    .loginLocals( function (req, res, done) {
      setTimeout( function () {
        done(null, {
          title: 'Async login'
        });
      }, 200);
    })
    .authenticate( function (login, password) {
        var promise = this.Promise();
      var errors = [];
      if (!login) errors.push('Missing login');
      if (!password) errors.push('Missing password');
        if (errors.length) return promise.fulfill(errors)

      // Add mongo lookup here
      fpProvider.authenticateUser(login, password, function(error, user) {
        if (error) return promise.fulfill([error])
          if (!user.id) user.id = user._id;
          usersById[user.id] = user;
        promise.fulfill(user);
      });
        return promise;
    })

    .getRegisterPath('/register')
    .postRegisterPath('/register')
    .registerView('register.jade')
//    .registerLocals({
//      title: 'Register'
//    })
//    .registerLocals(function (req, res) {
//      return {
//        title: 'Sync Register'
//      }
//    })
    .registerLocals( function (req, res, done) {
      setTimeout( function () {
        done(null, {
          title: 'Async Register'
        });
      }, 200);
    })
    .validateRegistration( function (newUserAttrs, errors) {
      var login = newUserAttrs.login;
      if (usersByLogin[login]) errors.push('Login already taken');
      return errors;
    })
    .registerUser( function (newUserAttrs) {
        var promise = this.Promise();

      // Add mongo lookup here
        fpProvider.saveUser(newUserAttrs, function(error, user) {
            if (error) return promise.fulfill([error]);
//            var user = users[0];
            if (!user.id) user.id = user._id;
            usersById[user.id] = user;
            promise.fulfill(user);
        });
        return promise;
    })

    .loginSuccessRedirect('/')
    .registerSuccessRedirect('/');
/*
 */


// Configuration stuff
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

//    MONGOHQ_URL => mongodb://heroku:e4ac2a0e4c20fe1d1e45d27c3e126186@staff.mongohq.com:10089/app708577
//    app.set('connstring', process.env.MONGOHQ_URL || ('mongodb://' + app.set('m_host') + '/' +    app.set('m_database')));
//    console.log('connstring is: ' + app.set('connstring'));
//    var uri = parseUri(app.set('connstring'));
//    console.log('host is: ' + uri.host);


  app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({
        secret: "very fierce planet"
        //, store: new MongoStore({ db: fpProvider.db })
    }));
//    , maxAge : new Date(Date.now() + 3600000) //1 Hour

    // Use mongo alternative?
//    app.use(express.session({ store: mongostore(app.set('connstring')), secret: 'topsecret' }));
    // use connect-mongo as session middleware
//    app.use(express.session({
//        secret: 'topsecret',
//        store: new store({ db: app.set('m_database'), host: uri.host })
//    }));
    app.use(everyauth.middleware());

        // IMPORTANT!!!!!!! Do not add app.router, to your middleware chain
        // explicitly, or you will run into problems accessing `req.user`
        // i.e., do not use app.use(app.router). Let express do this for you
        // automatically for you upon your first app.get or app.post.

    // LM: In spite of this admonition, app does not load without this call
    app.use(app.router);

  // use express logger
//  app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }));


    // Try compression in Express 3.0
//    app.use(express.compress());

  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});



// Now.js stuff - fails on Windows, Node 0.5.4
//var everyone = require("now").initialize(app);

// Routes
app.get('/', function(req, res){
	res.render('index', {
        title: 'Fierce Planet',
        locals: {}
    });
});

app.get('/worlds/gallery', function(req, res){
  fpProvider.findAll(function(error, worlds){
      res.render('worlds/gallery.jade', { locals: {
          title: 'Worlds',
          layout: false,
          worlds: worlds
          }
      });
//      res.send(worlds);
  });
});

app.get('/worlds/list', function(req, res){
  fpProvider.findAllByUser(req.user, function(error, worlds){
      res.send(worlds);
  });
});

app.get('/worlds/:id', function(req, res){
    var id = req.params.id;
    if (id) {
        fpProvider.findById(id, function(error, world){
            res.send(world);
        });
    }
    else {
        res.send({});
    }
});

app.get('/worlds/share/:id', function(req, res){
    var id = req.params.id;
    if (id) {
        fpProvider.findById(id, function(error, world){
            res.render('index', {
                title: 'Fierce Planet',
                locals: {serverWorld: world }
            });
        });
    }
    else {
        res.render('index', {
            title: 'Fierce Planet',
            locals: {}
        });
    }
});

app.get('/worlds/destroy/:id', function(req, res){
    var id = req.params.id;
    if (id) {
        fpProvider.deleteById(id, function(error, world){
            if (error) res.send([]);
            else {
                fpProvider.findAllByUser(req.user, function(err, worlds){
                    if (err) res.send([]);
                    else res.send(worlds);
                });
            }
        });
    }
});

app.post('/worlds/save', function(req, res){
    if (req.body.world && req.user) {
        var world = JSON.parse(req.body.world);
        if (! world.user_id)
            world.user_id = req.user._id;
        fpProvider.updateWorld(world, function(error, result){
            if (error) res.send(error);
            else  {
                res.send({_id: world._id});
            }
        });
    }
});


app.get('/profiles/high_scores', function(req, res){
    fpProvider.findHighScores(id, function(error, results){
        res.send(results);
    });
});

app.get('/profile/get', function(req, res){
    res.send(req.user);
});

app.post('/profile/update', function(req, res){
    if (req.user && req.body.profile) {
        var user = req.user;
        user.profile = JSON.parse(req.body.profile);
        user.profile.saved = true;
        fpProvider.updateUser(user, function(error, result){
            res.send(result.toString());
        });
    }
    else {
        res.send(-1);
    }
});

app.get('/figure', function(req, res){
    res.render('figure', {
        title: 'Fierce Planet',
        layout: false,
        locals: {}
    });
});


// Run express
var port = process.env.PORT || 3003;
app.listen(port);


// Socket IO stuff
var sio = require('socket.io');
var io = sio.listen(app);
var nicknames = {};
var duels = {};


io.configure(function(){
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
  io.set('log level', 0);
});

// Hack for heroku... needs web sockets support
io.configure('production', function(){
  io.enable('browser client etag');
  io.set('log level', 1);

  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
//  io.set('transports', [
//  , 'flashsocket'
//  , 'htmlfile'
//  , 'xhr-polling'
//  , 'jsonp-polling'
//  ]);
});


// For development
io.configure('development', function(){
  io.set('transports', [
    'websocket'
  , 'flashsocket'
  , 'htmlfile'
  , 'xhr-polling'
  , 'jsonp-polling'
  ]);
    io.set("polling duration", 10);
});



io.sockets.on('connection', function (socket) {
  socket.on('user message', function (msg) {
    socket.broadcast.emit('user message', socket.nickname, msg);
  });

  socket.on('nickname', function (nick, fn) {
    if (nicknames[nick]) {
      fn(true);
    } else {
      fn(false);
      nicknames[nick] = socket.nickname = nick;
      socket.broadcast.emit('announcement', nick + ' connected');
      io.sockets.emit('nicknames', nicknames);
    }
  });
  socket.on('initiate duel', function(rival, data) {
    socket.broadcast.emit('event', socket.nickname, data);
  });

  socket.on('list users', function(rival, data) {
    sockets.emit('nicknames', nicknames);
  });

  socket.on('lifecycle event', function(eventType, data) {
    socket.broadcast.emit('lifecycle event', socket.nickname, eventType, data);
  });

  socket.on('disconnect', function () {
    if (!socket.nickname) return;

    delete nicknames[socket.nickname];
    socket.broadcast.emit('announcement', socket.nickname + ' disconnected');
    socket.broadcast.emit('nicknames', nicknames);
  });
});

console.log("Express server listening on port %d in %s mode");
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
