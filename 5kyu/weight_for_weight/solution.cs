using System;
using System.Text.RegularExpressions;
using System.Linq;

public class WeightSort {
	
	public static string orderWeight(string strng) {
// Remove leading and trailing white spaces and extra spaces between numbers
        string cleanedStrng = Regex.Replace(strng.Trim(), @"\s+", " ");

        // Split the cleaned string into an array of numbers
        string[] numbers = cleanedStrng.Split(' ');

        // Sort the numbers based on their weights and then by their string representation
        Array.Sort(numbers, (a, b) =>
        {
            int weightA = CalculateWeight(a);
            int weightB = CalculateWeight(b);

            if (weightA == weightB)
            {
                return string.Compare(a, b, StringComparison.Ordinal);
            }

            return weightA.CompareTo(weightB);
        });

        return string.Join(" ", numbers);
    }

    private static int CalculateWeight(string number)
    {
        return number.Sum(digit => int.Parse(digit.ToString()));
    }
}