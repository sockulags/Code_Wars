using System.Collections.Generic;

public class Kata
{
  public static string Correct(string text)
  {
    List<char> sb = new List<char>();
    foreach(char c in text){
      switch(c){
          case '5': sb.Add('S'); break;
          case '0': sb.Add('O'); break;
          case '1': sb.Add('I'); break;
          default: sb.Add(c); break;
      }
    }
    
    return new string(sb.ToArray());
  }
}