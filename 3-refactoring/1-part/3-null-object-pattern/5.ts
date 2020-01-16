interface IBoss {
  fight(player: Player);
  isDead();
}

{
  class Boss implements IBoss {
    fight(player: Player) {
      // Do some logic
    }

    isDead() {
      // Return whether boss is dead depending on how the fight went.
    }
  }

  class NullBoss implements IBoss {
    fight(player: Player) {
      // Player always wins.
    }

    isDead() {
      return true;
    }
  }
}
// In the following code example,
// if the boss is an instance of NullBoss or Boss
// there are no extra checks to be made.
currentLevel.boss.fight(player);
currentLevel.boss.isDead();
