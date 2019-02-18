# Detective Game

## Requirements
1. User can receive clues after winning mini-games
2. User can pick a next location from map page
3. User can play a mini-game after picking correct locatin
4. Time Score reduces by 1 on game win/loss
5. Time Score reduces by 1 if wrong location is chosen on map page
6. User loses game if Time Score decreases to 0
7. User can enter name and choose Detective avatar
8. App displays persistent Time Score
9. App features the following pages: Home, Map, Game, Clue, End, About Us
10. App uses images and audio

## Story Structure

Characters:
1. Player
2. Main villain
3. Murder victim
4. Kidnap victim
5. Clue masters
    - one per game

Locations:
1. Underground casino
2. Abandoned warehouse
3. Zoo
4. Bar
5. Meatpacking district
6. Penthouse
7. Elevator
8. Barbershop
9. Construction site
10. Police station
11. Museum
12. Theatre

Prologue:
1. You discover a dead body inside your office and a note from the murderer saying you have 7 days to rescue the kidnapped child of the murder victim. The note is your first clue. Written on a cocktail napkin (the name of the bar is printed on it).
2. Enter name
3. Choose Detective avatar

Act 1:
1. You go to the map page and pick the first location based on the first clue. The first correct location is the bar. You are directed downstairs to the underground casino. A man downstairs says he saw the villain but will only tell you after you beat him in a game.
2. You face mini-game 1, Dice Roll Game. In order to win, you must correctly bet whether the sum of your roll of two dice will be higher or lower than the sum of the clue master's roll of two dice. If you win, you receive the second clue: the clue master tells you that the villain mentioned needing a shave. 
3. If you don't win the game, you lose one day and have to replay the game.

Act 2:
1. You go to the map page and pick the second location based on the second clue. The second correct location is the barbershop. The barber says the villian did come in for a shave, but he wont tell you more about them unless you help him finish the crossword puzzle.
2. You face mini-game 2, cross word puzzle. In order to win, you must correctly guess the word based on the prompt. 
3. If you win, you receive the third clue: the barber tells you that hes always talking about his view of the *blank*. 
4. If you don't, you lose one day and have to replay the game.

Act 3:
1. You go to the map page and pick a third location based on the third clue. The third correct location is the penthouse. When you arrive at the appartment door, its locked, but the victim knows the first 3 numbers in a series and tells you. you have to guess the next number to unlock the door.
2. You face mini-game 3, locked door. You given three numbers and have to guess the fourth based on a sequence (or a number we've given the user in a previous location). If you win, the door opens and you are knocked out and wake up in the final location. If you lose, you lose one day and to replay the game.

Act 4:
1. You are in the final location, the abandoned warehouse. The villain gives his speech while you free yourself from your restraints.
2. You face mini-game 4, shootout. To win you must click on the moving image of the villain within a certain amount of time. If you win, you incapacitate the villain and free the victum. If you lose, the murderer kills you.
3. You receive end message and can click to visit the credits.

Credits:
1. This page is our About Page, using CSS to produce a scrolling credits 


## Stretch Goals
1. Mute button!
2. Add real-time countdown to mini-games
3. App changes behavior based on character select
4. CSS animations
5. Dress in character for presentation
6. Clue notebook that slides out from side
7. Tweet your score/win
8. Boss battle requires user interaction (like a mouse click)
