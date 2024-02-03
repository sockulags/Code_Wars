using System;
using System.Text;
using System.Text.RegularExpressions;

public class Kata
{
  public static string BreakCamelCase(string str)
  {
        //return WithRegex(str);
        return WithoutRegex(str);
  }
  
  public static string WithoutRegex(string str)
  {
        if (string.IsNullOrEmpty(str))
            return str;

        var result = new StringBuilder();
        foreach (char c in str)
        {
            if (char.IsUpper(c))
            {
                result.Append(' ');
            }
            result.Append(c);
        }
        return result.ToString();
  }
  
  
  public static string WithRegex(string str)
  {
    return Regex.Replace(str, "([A-Z])", " $1");
  }
}