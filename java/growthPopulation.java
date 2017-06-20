class Arge {
    //Solution for "Growth in a Population"
    //https://www.codewars.com/kata/growth-of-a-population/train/java
    public static int nbYear(int p0, double percent, int aug, int p) {
        int year = 0;
        double pop = p0;
        while (pop < p) {
          pop += (aug + percent * pop / 100.00);
          year++;
        }
        return year;
    }
}
