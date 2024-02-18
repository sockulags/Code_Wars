using System;
using System.Numerics;

public class Fibonacci
{
    public static BigInteger fib(int n)
    {
        if (n == 0) return 0;
        if (n < 0)
        {
            BigInteger result = fib(-n);
            return n % 2 == 0 ? -result : result;
        }

        BigInteger[,] F = { { 1, 1 }, { 1, 0 } };
        F = Power(F, n - 1);
        return F[0, 0];
    }

    // Matrix exponentiation
    private static BigInteger[,] Power(BigInteger[,] F, int n)
    {
        if (n == 0 || n == 1)
            return F;
        BigInteger[,] M = { { 1, 1 }, { 1, 0 } };

        F = Power(F, n / 2);
        F = Multiply(F, F);

        if (n % 2 != 0)
            F = Multiply(F, M);

        return F;
    }

    
    private static BigInteger[,] Multiply(BigInteger[,] F1, BigInteger[,] F2)
    {
        BigInteger x = F1[0, 0] * F2[0, 0] + F1[0, 1] * F2[1, 0];
        BigInteger y = F1[0, 0] * F2[0, 1] + F1[0, 1] * F2[1, 1];
        BigInteger z = F1[1, 0] * F2[0, 0] + F1[1, 1] * F2[1, 0];
        BigInteger w = F1[1, 0] * F2[0, 1] + F1[1, 1] * F2[1, 1];

        F1[0, 0] = x;
        F1[0, 1] = y;
        F1[1, 0] = z;
        F1[1, 1] = w;

        return F1;
    }
}