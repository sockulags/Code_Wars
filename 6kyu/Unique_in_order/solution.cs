using System;
using System.Collections.Generic;

public class Kata
{
    public static IEnumerable<T> UniqueInOrder<T>(IEnumerable<T> sequence)
    {
        List<T> result = new List<T>();

        foreach (T item in sequence)
        {
            if (result.Count == 0 || !EqualityComparer<T>.Default.Equals(result[result.Count - 1], item))
            {
                result.Add(item);
            }
        }

        return result;
    }
}