using System;
using System.Collections.Generic;

public class PrimeDecomp {

	public static string factors(int lst) {
   Dictionary<int, int> primeFactoring = new Dictionary<int, int>();
        int divisor = 2;

        while (lst > 1)
        {
            if (lst % divisor == 0)
            {
                lst /= divisor;
                primeFactoring[divisor] = primeFactoring.ContainsKey(divisor) ? primeFactoring[divisor] + 1 : 1;
            }
            else
            {
                divisor++;
            }
        }

        string result = "";
        foreach (var p in primeFactoring)
        {
            if (p.Value == 1)
            {
                result += $"({p.Key})";
            }
            else
            {
                result += $"({p.Key}**{p.Value})";
            }
        }
        return result;
  }
}