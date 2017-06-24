//Solution for "No zeros for heros" 8 kyu
//https://www.codewars.com/kata/no-zeros-for-heros/train/java

public class NoBoring {
    public static int noBoringZeros(int n) {
        int val = n;
        while (val % 10 == 0) val /= 10;
        return val;
    }
}
