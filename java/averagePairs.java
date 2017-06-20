//Solution for "Averages of numbers" 7 kyu
//https://www.codewars.com/kata/averages-of-numbers/train/java

public class Kata
{
  public static double[] averages(int[] numbers)
  {
    if (numbers == null || numbers.length <= 1) return new double[0];
    double[] av = new double[numbers.length-1];
    for (int i=0; i<av.length; i++) av[i] = (numbers[i] + numbers[i+1]) * 0.5;
    return av;
  }
}
