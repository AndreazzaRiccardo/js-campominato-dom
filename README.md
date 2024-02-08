### EXERCISE:

Generate a square game grid where each cell contains a number between 1 and 100.
The computer must generate 16 random numbers in the same range of the chosen difficulty: bombs.
The numbers in the bomb list cannot be duplicated.
[23, 65, 1, 4,78,15,.... ];
Then the user clicks on a cell: if the number is present in the list of generated numbers - we stepped on a bomb - the cell turns red and the game ends, otherwise the clicked cell turns blue and the user can continue to click on the other cells.
The game ends when the player clicks on a bomb or reaches the maximum possible number of numbers.
At the end of the game the software must communicate the score, that is, the number of times the user clicked on a cell that was not a bomb.
**BONUS:**
1 - The user indicates a difficulty level according to which a square game grid is generated, in which each cell contains a number among those included in a range:
with difficulty 1 => between 1 and 100
with difficulty 2 => between 1 and 81
with difficulty 3 => between 1 and 49
**2- when you click on a bomb and finish the game, avoid that you can click on other cells
****3- when you click on a bomb and the game ends, the software discovers all the hidden bombs

### FUNCTIONS:
1. I define a function to generate cell elements in my HTML:

        -I create my element div;
        -give it a predefined class in css;
        -give it a size on the basis of the difficulty chosen;
        -I insert inside the element its index number created with the for loop;
        -return my item so complete;

2. I define a function that will contain the game logic at the click of each cell:

-I create a constant that identifies the number within the cell I click;

        -the setting of nested conditions:
                SE (the bombs array includes the number clicked) {
                        -print a defeat message;
                        -invoke the endgame function;
                } OTHERWISE {
                        -colour the cell blue;
                        IF (the length of the array of cells clicked is less than the total of cells minus bombs) {
                                pushes the value inside the array;
                        }OTHERWISE{
                                -print the victory message;
                                -invoke the endgame function
                        }
                }

3. I define a function to create a random number between 1 and a maximum number;

4. I define a function that can return an array of 16 random numbers between 1 and the size of the grid, based on the difficulty selected:

        -create a constant empty array;
        -create a while loop:
                -until the length of my array is less than 16 {
                        -generate a random number;
                }
                -IF my random number is not already present in the array, insert it into the array;
        -as return value I have my full array;

5. I define a function containing the events to be developed in case the game ends:
With a cycle for:

        -create a constant matched to each individual cell;
        -remove the eventlistener from each cell;
        -I tell him that if his value was included in the array bombs, he must turn red;

**DATA**
1. I define a constant matched to my play button;
2. I define a constant associated with the select element of the difficulty;
3. I define a constant matched to the container of my future cells;
4. I define a constant that is linked to the div that will contain the various messages concerning the development of the game;
5. I define a global variable to be used within my gameplay function, containing the array bombs;
6. I define a global variable in which I will push the values contained in the cells already clicked;

### DEVELOPMENT:

1. Knowing that the triggering event of the game is the play of the button, I immediately assign an eventlistener to my button, where then I will enter all the logic;
2. I clean up all my html elements, so that every play will reset everything;
3. I create 3 switches, one for each difficulty, containing as values the number of cells to be generated and their size;
4. I create a for cycle that will use the variables of my switch to generate a grid based on the difficulty selected, which will be structured as follows:

        -I invoke my function to create cells by inserting the index of each cell and the gendeness it will have; 
        -assign to each cell so created my click function, containing the game logic;
        -I hang all the cells thus created, on my grid;
5. I generate bombs by invoking the appropriate function and giving them the maximum value of the generated grid;


![Screenshot 2024-02-08 182635](https://github.com/AndreazzaRiccardo/js-campominato-dom/assets/136316597/b0e65c63-6a28-47e0-ad8f-f6e3917d7626)
