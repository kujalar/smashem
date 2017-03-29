var barrack = {  //namespace barrack
  idSequence: 0,
  getNextId: function(){
    return barrack.idSequence++;
  },
  getOrcWarChief: function() {
    return barrack.buildMonster(monsterManual.orcWarChief);
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
    return { id: newId ,name: monster.name, avatar: monster.avatar,rollHp: monster.rollHp,
      maxHp: hp,hp: hp,ac: monster.ac,nOfAttacks: monster.nOfAttacks,nOfAttacksLeft: monster.nOfAttacks,
      attackList: monster.attackList};
  }

};

var orcActionList = [{name: 'Greataxe', toHit: 5, hit: '1d12+3', critHit: '1d12'},{name: 'Javelin', toHit: 5, hit: '1d6+3', critHit: '1d12'}];
var orcWarChiefActionList =   [{name: 'Greataxe', toHit: 6, hit: '1d12+1d8+4', critHit: '1d12+1d8'},{name: 'Spear',toHit: 6, hit: '2d8+4', critHit: '2d8'}];
var expexterActionList = [{name: 'Sword +2', toHit: 9, hit: '1d8+9', critHit: '1d8'}];

var monsterManual = {
  orc: {name: 'Orc', avatar: 'pic/tuntematon.png',rollHp: '2d8+6',ac: 13,nOfAttacks: 1,attackList: orcActionList},
  orcWarChief: {name: 'Orc War Chief', avatar: 'pic/tuntematon.png', rollHp: '11d8+44',ac: 16, nOfAttacks: 2, attackList: orcWarChiefActionList},
  expexter: {name: 'Expexter', avatar: 'pic/platewarrior.png',rollHp: '55',ac: 22, nOfAttacks: 2,attackList: expexterActionList }
}
