Meteor.methods({
  newMonster: function() {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Monsters.newMonster(Meteor.user());
  },
  JoinDungeon: function(data){
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    //Para version más chida checar si el player no está ya en un monster :)
    var monster = Monsters.findOne({_id:data._id});
    if(monster !== undefined){
      Monsters.addPlayerToMonster(monster,Meteor.user());
    }
  },
  ExitDungeon:function(){
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    //Para version más chida checar si el player está ya en el monster :)
    var monster = Monsters.findOne({_id:data._id});
    if(monster !== undefined){
      Monsters.removePlayerFromMonster(monster,Meteor.user());
    }
  }
});
