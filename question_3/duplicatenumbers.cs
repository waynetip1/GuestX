using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace duplicate_numbers
{
    class Program
    {
        static void Main(string[] args)
        {// wrap code in while loop so user can restart the program
            bool running = true;
            while (running)
            {
                //set app vars           
                int numItems = 0;
                int i;
                string appName = "Number Duplicate Finder";
                string appVersion = "1.0.0";
                string appAuthor = "Wayne Tipton";
                // change text color
                Console.ForegroundColor = ConsoleColor.Green;
                //write out app info
                Console.WriteLine("{0}: Version {1} by {2}", appName, appVersion, appAuthor);
                // reset text color
                Console.ResetColor();
                
                // Get user input                
                Console.WriteLine("How many numbers are in the series?");
                string strItems = Console.ReadLine();
                //assiggn and convert user string to number
                numItems = Convert.ToInt32(strItems);

                //initialize array
                int[] arr = new int[numItems];
                Console.WriteLine("Enter {0} Numbers:", numItems);
                
                //loop through to get array inputs
                for (i = 0; i < numItems; i++)
                {
                    Console.Write("Number - {0}:", i+1);
                    // convert user input string to number and store in array
                    arr[i] = Convert.ToInt32(Console.ReadLine());
                }
                //output the user array back to the console.
                Console.Write("Elements in array are:  ");
                for (i = 0; i < numItems; i++)
                {
                    Console.Write("{0} ", arr[i]);
                }
                Console.Write("\n");
                //create dictionary to keep track of array values
                var dict = new Dictionary<int, int>();
                // create loop to cycle through each array element
                foreach (var value in arr)
                {//if value is in already in the dictionay increment value
                    if (dict.ContainsKey(value)) 
                        dict[value]++;
                    // otherwise just add the value and initlize value to 1
                    else
                        dict[value] = 1;
                }
                // loop through the key value pairs
                foreach (KeyValuePair<int, int> pair in dict)
                    // find the pair values that are duplicated more than 1 time
                    if (pair.Value > 1)
                    {
                        Console.WriteLine("Value {0} was duplicated {1} times.", pair.Key, pair.Value);
                    }
                //show the key values that are not duplicated
                    else
                    {
                        Console.WriteLine("{0} Was not duplicated.", pair.Key);
                    }
                // prompt user to enter another series of numbers
                Console.WriteLine("Want to enter another series of numbers? Enter[Y or N]");
                // make the user input upper case
                string answer = Console.ReadLine().ToUpper();
                // control the while loop to start over or quit
                if (answer == "Y")
                {
                    continue;
                }
                else if (answer == "N")
                {
                    running = false;
                }
                else
                {
                    return;
                }
            }


        }
    }
}
