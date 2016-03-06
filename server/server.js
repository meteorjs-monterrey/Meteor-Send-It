Meteor.startup(function () {
  // code to run on server at startup
});

// Support for playing D&D: Roll 3d6 for dexterity
// Accounts.onCreateUser(function(options, user) {
//   // var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
//   // user.dexterity = d6() + d6() + d6();
//   // user.lifePoints = 200;
//   // We still want the default hook's 'profile' behavior.
//   // if (options.profile)
//   //   user.profile = options.profile;
//   return user;
// });
