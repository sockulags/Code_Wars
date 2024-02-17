using System;
using System.Collections.Generic;

public static class SnailSolution
{
    public static int[] Snail(int[][] array)
    {
        if (array.Length == 0 || array[0].Length == 0) return new int[] { }; // Check for empty array

        List<int> result = new List<int>();
        int n = array.Length;
        int startRow = 0, endRow = n - 1;
        int startCol = 0, endCol = n - 1;

        while (startRow <= endRow && startCol <= endCol)
        {
            // Top row
            for (int i = startCol; i <= endCol; i++)
            {
                result.Add(array[startRow][i]);
            }
            startRow++;

            // Right column
            for (int i = startRow; i <= endRow; i++)
            {
                result.Add(array[i][endCol]);
            }
            endCol--;

            // Bottom row
            if (startRow <= endRow)
            {
                for (int i = endCol; i >= startCol; i--)
                {
                    result.Add(array[endRow][i]);
                }
                endRow--;
            }

            // Left column
            if (startCol <= endCol)
            {
                for (int i = endRow; i >= startRow; i--)
                {
                    result.Add(array[i][startCol]);
                }
                startCol++;
            }
        }

        return result.ToArray();
    }
}
