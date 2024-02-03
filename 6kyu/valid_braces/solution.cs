using System;
using System.Collections.Generic;

public class Brace
{
    public static bool validBraces(string braces)
    {
        Stack<char> stack = new Stack<char>();

        foreach (char c in braces)
        {
            if (c == '(' || c == '[' || c == '{')
            {
                stack.Push(c);
            }
            else if (c == ')' || c == ']' || c == '}')
            {
                if (stack.Count == 0)
                {
                    return false; 
                }

                char top = stack.Pop();

                if (c == ')' && top != '(')
                {
                    return false; 
                }
                else if (c == ']' && top != '[')
                {
                    return false; 
                }
                else if (c == '}' && top != '{')
                {
                    return false; 
                }
            }
        }

        return stack.Count == 0;
    }
}
