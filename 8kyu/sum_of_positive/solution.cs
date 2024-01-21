using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr) => arr.Length > 0 ? arr.Where(num => num >= 0).Sum() : 0;
  
}