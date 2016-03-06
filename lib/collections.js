Monsters = new Mongo.Collection("monsters");
Monsters.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});
Monsters.addMessage = function(monster,data){
  Monsters.update({
    _id: monster._id
  }, {
    $push: {
      messages: {
        _id: data._id,
        player:data.email,
        message: data.message
      }
    }
  });
};
Monsters.addAttack = function(monster,data){
  if(monster.currentLife <= 0)
    return;
  var newCurrentLife = monster.currentLife - data.damage;
  if(newCurrentLife < 0) {
    newCurrentLife = 0;
  }
  Monsters.update({
    _id: monster._id
  }, {
    $push: {
      attacks: {
        player: data._id,
        email: data.email,
        damage: data.damage
      }
    },
    $set: {
      currentLife: newCurrentLife
    }
  });
};
Monsters.newMonster = function(owner) {
  Monsters.insert({
    owner: owner._id,
    name: "Morgoth",
    totalLife: 100000,
    currentLife: 100000,
    players: [],
    messages: [],
    attacks: []
  });
};
Monsters.addPlayerToMonster = function(monster, player) {
  Monsters.update({
    _id: monster._id
  }, {
    $push: {
      players: player._id
    }
  });
};
Monsters.removePlayerFromMonster = function(monster, player) {
  Monsters.update({
    _id: monster._id
  }, {
    $pull: {
      players: player._id
    }
  });
};
