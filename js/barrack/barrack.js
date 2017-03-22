var barrack = {  //namespace barrack
  idSequence: 0,
  getNextId: function(){
    return barrack.idSequence++;
  },
  getOrc: function() {
    var monster = monsterManual.orc;
    return barrack.buildMonster(monster);
  },
  getExpexter: function() {
    return barrack.buildMonster(monsterManual.expexter);
  },
  buildMonster: function(monster) {
    var hp = dice.roll(monster.rollHp);
    var newId = barrack.getNextId();
    return { id: newId ,name: monster.name, avatar: monster.avatar,rollHp: monster.rollHp,maxHp: hp,hp: hp,ac: monster.ac,actionList: monster.actionList};
  }

};

var orcActionList = [{name: 'Greataxe', toHit: 5, hit: '1d12+3', critHit: '1d12'},{name: 'Javelin', toHit: 5, hit: '1d6+3', critHit: '1d12'}];
var expexterActionList = [{name: 'Attack', toHit: 9, hit: '1d8+9', critHit: '1d8'}];

var monsterManual = {
  orc: {name: 'Orc', avatar: 'pic/tuntematon.png',rollHp: '2d8+6',ac: 13,actionList: orcActionList},
  expexter: {name: 'Expexter', avatar: 'pic/platewarrior.png',rollHp: '45',ac: 22,actionList: expexterActionList }
}
