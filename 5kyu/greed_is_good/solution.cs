using System;

public static class Kata
{
  public static int Score(int[] dice) {
     int score = 0;
        int[] counts = new int[7]; 

        foreach (int die in dice)
        {
            counts[die]++;
        }

        for (int value = 1; value <= 6; value++)
        {
            int count = counts[value];

            if (count >= 3)
            {
                if (value == 1)
                {
                    score += 1000;
                }
                else
                {
                    score += value * 100;
                }
                count -= 3;
            }

            if (value == 1)
            {
                score += count * 100;
            }
            else if (value == 5)
            {
                score += count * 50;
            }
        }

        return score;
  }
}