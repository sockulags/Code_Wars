using System;
using System.Collections.Generic;

class Permutations
{
    public static List<string> SinglePermutations(string s)
    {
        HashSet<string> permutationsSet = GeneratePermutations(s);
        List<string> permutationsList = new List<string>(permutationsSet);
        return permutationsList;
    }

    private static HashSet<string> GeneratePermutations(string input)
    {
        var result = new HashSet<string>();
        if (input.Length <= 1)
        {
            result.Add(input);
            return result;
        }

        for (int i = 0; i < input.Length; i++)
        {
            char pickedChar = input[i];
            string remaining = input.Substring(0, i) + input.Substring(i + 1);
            HashSet<string> subPermutations = GeneratePermutations(remaining);

            foreach (var str in subPermutations)
            {
                result.Add(pickedChar + str);
            }
        }

        return result;
    }
}
