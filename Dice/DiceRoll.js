// SCENARIOS
const scenarios = [
  {
    description: "A locked door blocks your path. You need to roll at least a 1 or higher to pick the lock.",
    difficulty: 1,
    failMessage: "Woops! The lockpick broke. Time for the next pick...",
    winMessage: "Success! You picked the lock and sneak inside.",
    loseMessage: "Fail! The lock is jammed. You'll need another way.",
    image: "image url.url"
  },
  {
    description: "A wild beast charges at you! You must roll 2 or higher to dodge.",
    difficulty: 2,
    failMessage: "You get hit by the charging beast. Wounding you but you still get up.",
    winMessage: "You dodge just in time and draw your weapon.",
    loseMessage: "You get knocked down and the beast pounces at you. Biting your neck.",
    image: "image url.url"
  },
  {
    description: "You attempt to climb a crumbling wall. Roll 3 or higher to succeed.",
    difficulty: 3,
    failMessage: "You almost fell but you managed to grab onto a crack in the wall. Keep climbing.",
    winMessage: "You scale the wall and spot your next objective.",
    loseMessage: "You slip and fall back down. Try again later.",
    image: "image url.url"
  },
  {
    description: "You try to convince a guard to let you pass. Roll 4 or higher to persuade.",
    difficulty: 4,
    failMessage: "The guard starts to become suspicious of you",
    winMessage: "The guard nods and steps aside. You're in!",
    loseMessage: "The guard laughs and says 'Nice try!'",
    image: "image url.url"
  },
  {
    description: "A thief attempts to rob you. Roll 5 or higher to defeat the thief.",
    difficulty: 5,
    failMessage: "You cross blades with the thief but he does a combination of swift punches and kicks.",
    winMessage: "You successfully defeated the thief! They then run away cowering in fear.",
    loseMessage: "The thief attacks you with quick slashes. Wounding you and cutting your purse then ran away with it.",
    image: "image url.url"
  },
  {
    description: "You have activated a trap while walking in a dungeon! Roll 6 or higher to dodge the traps!",
    difficulty: 6,
    failMessage: "You tripped but aren't dead yet. Get up and run!",
    winMessage: "You live to see the next day and continue to explore the dungeon.",
    loseMessage: "You die a horrible death and your corpse becomes a warning to other adventurers.",
    image: "image url.url"
  },
  {
    description: "A fighter challenges you to a duel. If you lose he will kill you. Roll a 7 or higher to defeat him in combat.",
    difficulty: 7,
    failMessage: "You attempt to make a clean hit against the fighter but he swiftly blocks it then hits you with the sword's butt.",
    winMessage: "You defeat the fighter. Killing him in the process.",
    loseMessage: "You fail to defeat the fighter. You fall on your knees and he beheads you.",
    image: "image url.url"
  },
  {
    description: "You encounter an injured man on the ground. Roll 8 or higher to attempt to make the man drink a health potion.",
    difficulty: 8,
    failMessage: "In your haste to save the man you picked the wrong type of potion. Keep rummaging your backpack.",
    winMessage: "You successfully made the man drink the health potion, gets up and thanks you.",
    loseMessage: "You accidentally dropped the the healing potion. You quickly grabbed for another one but the man dies due to his injuries.",
    image: "image url.url"
  },
  {
    description: "An assassin caught you unaware and pounces on you and prepares to stab you. Roll a 9 or higher to break away from the assassin's hold.",
    difficulty: 9,
    failMessage: "You try to wriggle out of the hold but fail. Keep trying!",
    winMessage: "You successfully broke away from the assassin's hold. You engaged in combat, defeating the assassin.",
    loseMessage: "You fail to break yourself out of the assassin's hold and you swiftly die.",
    image: "image url.url"
  },
  {
    description: "You get surrounded by a group of bandits. Roll 10  or higher to attempt an escape.",
    difficulty:  10,
    failMessage: "You try to run but was shot by an arrow. Thankfully you are still able to move.",
    winMessage: "You have successfully escaped the group of bandits!",
    loseMessage: "You attempt your escape but trip on a rock. The bandits then kill you while you were on the ground.",
    image: "image url.url"
  },
  {
    description: "You encounter a skeletal warrior. Roll 5 or higher to defeat it.",
    difficulty: 5,
    failMessage: "The skeletal warrior blocks your attack and proceeds to counter. Wounding you in the process.",
    winMessage: "You defeated the skeletal warrior with relative ease.",
    loseMessage: "Your fear freezes you and eventually get stabbed by the skeletal warrior.",
    image: "image url.url"
  },
  {
    description: "You get ambushed by a group of skeletal archers. Your only choice is to face them. Roll 8 or higher to survive this encounter.",
    difficulty: 8,
    failMessage: "You get shot by an arrow but you must keep charging ahead!",
    winMessage: "You managed to defeat the skeletal archers one by one. Congratulations!",
    loseMessage: "You fail miserably as the skeletal archers turn you into a pincusion.",
    image: "image url.url"
  },
  {
    description: "A mage appears before you in a flash and starts chanting for a spell. Roll a 7 or higher to quickly defeat the mage while they are chanting.",
    difficulty: 7,
    failMessage: "The mage casts an ice spell, hurting you and slowing you down.",
    winMessage: "The mage, severely wounded teleports away.",
    loseMessage: "The mage casts lightning upon you. Instantly killing you.",
    image: "image url.url"
  },
  {
    description: "You find a mysterious book near a pile of skeletal remains. Roll 8 or higher to attempt to read it.",
    difficulty: 8,
    failMessage: "You get a mild headache but you attempt to keep reading anyway.",
    winMessage: "You read the book learning about different spells and incantations in the process.",
    loseMessage: "You read the book but you quickly lose your sanity. You laugh uncontrollably and scratch your eyes out, eventually losing conciousness.",
    image: "image url.url"
  },
  {
    description: "A diabolist appears. He summons lesser demons to attack you. Roll 9 or higher to defeat the lesser demons.",
    difficulty: 9,
    failMessage: "A lesser demon manages to slash you!",
    winMessage: "The lesser demons attempt to swarm you but you were undettered. You managed to kill them one by one. The diabolist retreats for now.",
    loseMessage: "You steel yourself but eventually get swarmed by the lesser demons. They proceed to eat your corpse for snack.",
    image: "image url.url"
  },
  {
    description: "You face an axe wielding demon. It will be a tough battle. Roll a 9 or higher to win this engagement.",
    difficulty: 9,
    failMessage: "The demon swings its axe and wounds you in the process.",
    winMessage: "You managed to defeat the demon. Congratulations!",
    loseMessage: "The demon was too strong for you. Its axe breaks your sword and slices you in half at the same time.",
    image: "image url.url"
  },
  //BOSSES
  {
    description: "You encounter a rock golem. You equip a maul and attempt to destroy it. Roll 10 or higher to destroy it.",
    difficulty: 10,
    battleMessage: "You slam your maul on the golem. Chipping away at it's rocky armor.",
    failMessage: "The rock golem charges at you and delivers a mean punch. You managed to block it but you are not unscathed.",
    winMessage: "You keep hitting the rock golem with the maul and eventually hit it's core, killing it.",
    loseMessage: "The rock golem mitigated your attacks. The rock golem then punches you, killing you instantly.",
    image: "image url.url",
    isBoss: true,
    hp: 3
  },
  {
    description: "MINI BOSS FIGHT: You encounter the diabolist once more. Roll 10 or higher to finish him this time.",
    difficulty: 10,
    battleMessage: "You strike the diabolist but it casts a shield. Keep striking it!",
    failMessage: "The diabolist casts fire magic at you. Your body gets singed.",
    winMessage: "The diabolist's attacks were no match against your fury.",
    loseMessage: "The diabolist defeats you. Turning you into demon food.",
    image: "image url.url",
    isBoss: true,
    hp: 3
  },
  {
    description: "BOSS FIGHT: You encounter a powerful lich! It raises multiple corpses and surrounds you. Roll 12 or higher to defeat the lich.",
    difficulty: 12,
    battleMessage: "The lich appears to be hurt but still fights on. Keep attacking it!",
    failMessage: "The lich strikes you with dark magic!",
    winMessage: "The lich's dark spirit leaves it's host of bones as it falls apart instantly. You have defeated it.",
    loseMessage: "You were no match for the lich. It harvests your soul to add it to the ever growing undead horde.",
    image: "image url.url",
    isBoss: true,
    hp: 5
  },
  {
    description: "MINI BOSS FIGHT: You encounter a powerful demon lord. But before you fight him his generals block your path. Roll 12 or higher to defeat his generals.",
    difficulty: 10,
    battleMessage: "One general falls! Keep fighting!",
    failMessage: "A general wounds you but you are undeterred, fight on!",
    winMessage: "One by one the demon generals fall beneath you.",
    loseMessage: "The demon generals gang up on you. Stabbing and slashing you multiple times.",
    image: "image url.url",
    isBoss: true,
    hp: 3
  },
  {
    description: "BOSS FIGHT: It is time to fight the demon lord. He musters all his powers in preparation against you. Roll 12 or higher to damage the demon lord.",
    difficulty: 12,
    battleMessage: "You damage the demon lord but he perseveres. The battle rages on.",
    failMessage: "The demon lord swings its sword, slashing you in the process.",
    winMessage: "The demon lord bleeds and roars loudly. He eventually explodes. You are victorious!",
    loseMessage: "The demon lord laughs as you die in one fell swoop.",
    image: "image url.url",
    isBoss: true,
    hp: 5
  },
  {
    description: "BOSS FIGHT: A lava golem appears before you. It creates a wall of lava to prevent you from escaping. Roll a 12 or higher to defeat it!",
    difficulty: 12,
    battleMessage: "The lava golem is hurt. But is no where near death!",
    failMessage: "The lava golem punches you! But you managed to block it but you aren't unscathed.",
    winMessage: "The lava golem explodes upon death! Luckily you survived it.",
    loseMessage: "The lava golem burns you and turns you into ashes.",
    image: "image url.url",
    isBoss: true,
    hp: 5
  },
  
];

let currentScenario = null;
let bossCurrentHp = 0;
let bossMaxHp = 0;
let playerHp = 5;
const playerMaxHp = 5;

function updatePlayerHpDisplay() {
  const hpText = document.getElementById("playerHpText");
  hpText.textContent = `❤️ ${playerHp} / ${playerMaxHp}`;
}

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateBossHpBar() {
  const hpText = document.getElementById("bossHpText");
  hpText.textContent = `🎲 ${bossCurrentHp} / ${bossMaxHp}`;
}

function handleNext() {
  const rollButton = document.getElementById('rollBtn');
  const nextButton = document.getElementById('nextBtn');

  rollButton.hidden = false;
  nextButton.hidden = true;
}

//SCENARIO SETTINGS
function startScenario() {
  const scenarioElement = document.getElementById('scenario');
  const outputElement = document.getElementById('output');
  const rollButton = document.getElementById('rollBtn');
  const nextButton = document.getElementById('nextBtn');
  const imageElement = document.getElementById('scenarioImage');

  const randomIndex = Math.floor(Math.random() * scenarios.length);
  currentScenario = scenarios[randomIndex];


    rollButton.hidden = false;
    rollButton.disabled = false;
      nextButton.hidden = true;

  if (currentScenario.isBoss) {
    bossMaxHp = currentScenario.hp;
    bossCurrentHp = bossMaxHp;
    document.getElementById("bossHpContainer").hidden = false;
    updateBossHpBar();
  } else {
    document.getElementById("bossHpContainer").hidden = true;
  }

  playerHp = playerMaxHp;
  updatePlayerHpDisplay();

  scenarioElement.textContent = currentScenario.description;
  outputElement.textContent = "Click 'Roll Dice' to continue...";
  imageElement.src = currentScenario.image;
  imageElement.hidden = false;
}

//DICE ROLL
async function handleRoll() {
  const outputElement = document.getElementById('output');
  const rollButton = document.getElementById('rollBtn');
  const nextButton = document.getElementById('nextBtn');
  const sides = 15;
  const scenario = currentScenario;

  rollButton.disabled = true;
  outputElement.textContent = 'Rolling the dice... 🎲';
  await wait(1000);

  const result = rollDice(sides);
  outputElement.textContent = `🎲 You rolled a ${result}.`;
  await wait(1000);

  //REGULAR ENCOUNTERS/MINI BOSS/BOSS
  if (scenario.isBoss) {
    if (result === 15) {
      bossCurrentHp = 0;
      outputElement.textContent += `\n🔥 CRITICAL HIT! You instantly slay the boss!\n${scenario.winMessage}`;
    } else if (result >= scenario.difficulty) {
      bossCurrentHp--;
      updateBossHpBar();

      if (bossCurrentHp <= 0) {
        outputElement.textContent += `\n💥 You delivered the final blow!\n${scenario.winMessage}`;
      } else {
        outputElement.textContent += `\n✅ ${scenario.battleMessage}`;
        rollButton.disabled = false;
      }
    } else {
      playerHp--;
      updatePlayerHpDisplay();

      if (playerHp <= 0) {
        outputElement.textContent += `\n💀 ${scenario.loseMessage}`;
      } else {
        rollButton.disabled = false;
        outputElement.textContent += `\n❌ ${scenario.failMessage}`;
      }
    }

    if (bossCurrentHp <= 0) {
      rollButton.hidden = true;
      nextButton.hidden = false;
    }

    if (playerHp <= 0) {
      rollButton.disabled = true;
    }
  } else {
    if (result >= scenario.difficulty) {
      outputElement.textContent += `\n✅ ${scenario.winMessage}`;
      rollButton.hidden = true;
      nextButton.hidden = false;
    } else {
      playerHp--;
      updatePlayerHpDisplay();

      if (playerHp <= 0) {
        outputElement.textContent += `\n💀 ${scenario.loseMessage}`;
        rollButton.disabled = true;
        return;
      } else {
        outputElement.textContent += `\n❌ ${scenario.failMessage}`;
        rollButton.disabled = false;
      }
    }
  }
}









