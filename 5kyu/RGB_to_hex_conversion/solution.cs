public class Kata
{
  public static string Rgb(int r, int g, int b) 
  {
        // Ensure that the values are within the valid range (0-255)
        r = r < 0 ? 0 : r > 255 ? 255 : r;
        g = g < 0 ? 0 : g > 255 ? 255 : g;
        b = b < 0 ? 0 : b > 255 ? 255 : b;
    
        // Convert decimal values to hexadecimal and format as a 6-character string
        return $"{r:X2}{g:X2}{b:X2}";
  }
}