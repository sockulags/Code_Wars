using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata {
  public static IEnumerable<string> FriendOrFoe(string[] names) => names.Where(x => x.Length == 4).ToList();
  
}