Meteor.methods({
  message: function(data) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var monster = Monsters.findOne({
      _id: data._id
    });
    if (monster !== undefined) {
      Monsters.addMessage(monster, {
        _id: Meteor.userId(),
        email: Meteor.user().emails[0].address,
        message: data.message
      });
    }

  },
  attack: function(data) {
    function calcDamage(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var monster = Monsters.findOne({
      _id: data._id
    });
    if (monster !== undefined) {
      Monsters.addAttack(monster, {
        _id: Meteor.userId(),
        email: Meteor.user().emails[0].address,
        damage: calcDamage(1,100)
      });
    }

  }
});
