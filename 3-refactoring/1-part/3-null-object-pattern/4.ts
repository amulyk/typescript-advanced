{
  if (currentLevel.boss != null) {
    currentLevel.boss.fight(player);
  }
}

{
  if (currentLevel.boss != null) {
    currentLevel.completed = currentLevel.boss.isDead();
  }
}
