
using System;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

class Program
{
    static int CountOddNumbers(int max)
    {
        return (max + 1) / 2;
    }
    //private static int CountOddNumbers(int min, int max)
    //{


    //static int CountOddNumbers(int max)
    //{
    //    int count = 0;
    //    for (int i = 1; i <= max; i++)
    //    {
    //        if (i % 2 != 0)
    //        {
    //            count++;
    //        }
    //    }
    //    return count;
    //}

    //    int totalCount = max - min + 1;
    //    int evenCount = totalCount / 2;
    //    int oddCount = totalCount - evenCount;
    //    return oddCount;
    //}

    private static void PrintLine(int num_spaces, int num_stars)
    {
        int j;
        for (j = 1; j <= num_spaces / 2; j++)
        {
            Console.Write(" ");
        }
        for (j = 1; j <= num_stars; j++)
        {
            Console.Write("*");
        }
        Console.WriteLine();

    }
    private static void TrianglePrint(int width, int height)
    {
        int  i,j,k, num_stars, num_spaces, middle_rows, extra_rows, const_rows, OddNumbers;
        Console.Write("\n");

        // Calculate the number of rows in the middle
        middle_rows = height- 2;
        OddNumbers = CountOddNumbers(width) - 2;

        extra_rows = middle_rows % OddNumbers;
        const_rows = middle_rows / OddNumbers;

        PrintLine(width - 1, 1);//Print min
        if (extra_rows != 0)//The number of rows in the middle does not divide exactly - print extra 3
        {
            for (j = 1; j <= extra_rows ; j++)// the extra to ***
            {
                PrintLine(width - 3, 3);
            }
        }

        // Print the  the constant part of the triangle
        for (i = 2; i <= OddNumbers+1; i++)
        {
            num_stars = 2 * i - 1;
            num_spaces = width - num_stars;
            for (k = 1; k <= const_rows; k++)// the const 
            {

                PrintLine(num_spaces, num_stars);
            }

        }
        PrintLine(0, width);//max


    }

 
    static void HandleRectangle()
    {
        Console.WriteLine("enter the height:\n");
        int height = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("enter the width:\n");
        int width = Convert.ToInt32(Console.ReadLine());
        if (height == width || Math.Abs(height - width) > 5)
            Console.WriteLine("the area of the reactangle is " + (height * width));
        else
            Console.WriteLine("the scope of the reactangle is " + 2 * height + 2 * width);

    }
    static void Handle_Triangle()
    {
        Console.WriteLine("enter the height:\n");
        int height = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("enter the width:\n");
        int width = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter 1 for The perimeter of the triangle \n" + "Enter 2 for printed Triangle\n");
        int innerOption = Convert.ToInt32(Console.ReadLine());
        if (innerOption == 1)
        {
            ////////////////////////////////////
            int edge = (int)Math.Sqrt(Math.Pow(height, 2) + Math.Pow(width / 2, 2));
            float scope = (2 * edge) + width;
             Console.WriteLine("The perimeter of the triangle is:"+scope);
        }
        if (innerOption == 2)
        {
            if ((width % 2 == 0) || (width > height * 2))
                Console.WriteLine(" The triangle can not be printed.\n");

            else TrianglePrint(width, height);

           
            // Console.WriteLine();
        }

    }
    enum Options { Rectangle = 1, Triangle, Exit };
    static void Main(System.String[] args)
    {
        bool Done = false;
        while (!Done)
        {
            Console.WriteLine();
            Console.WriteLine("Enter 1 for Rectangle\n" + "Enter 2 for Triangle\n" + "Enter 3 for Exit\n");
            int Chosen_option = Convert.ToInt32(Console.ReadLine());
            if (Chosen_option== 1 || Chosen_option == 2 || Chosen_option == 3)
             switch ((Options)Chosen_option)
            {
                case Options.Rectangle:
                        HandleRectangle();
                    break;
                case Options.Triangle:
                    Handle_Triangle();
                    break;
                case Options.Exit:
                    Done = true;
                    break;
            } 
           
            else
            {
                Console.WriteLine("The input is not a valid .Try agin.");
            }
           
        }

    }

}
