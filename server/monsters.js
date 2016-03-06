Meteor.publish("monsters", function(argument) {
  if (!this.userId) {
    throw new Meteor.Error("not-authorized");
  }
  if(argument){
    return Monsters.find({_id: argument._id});
  }
  return Monsters.find();
});
