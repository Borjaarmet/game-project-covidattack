# Game project
# CORONAVIRUS ATTACK
El objetivo del juego es tratar de coger todos los rollos de papel higienico, teniendo en cuenta que,lel enemigo(el virus)e  no puede tocarte ya que te infectaria y moririas acabando asi la partida.

La pantalla seria una imagen como de un camino en movimiento en el cual irian apareciendo rollos de papel higienico, mascarillas y el enemigo(el virus).

El jugador estara representado por una imagen de un personaje cuya funcion sera atrapar los rollos y evitar entrar en contacto con el virus.

El movimiento del jugador sera horizontal con lo que se utilizaran las flechas de izq y der para mover al jugador.

El juego terminara cuando el jugador coja todos los rollos o por lo contrario entre en contacto con el virus.

Los diferentes items que iran apareciendo afectaran de una manera u otra:
- __rollos de papel__ : Cada rollo atrapado contara uno en el marcador hasta coger X numero.
- __virus__ : Al entrar en contacto con el enemigo la partida se acaba inmediatamente.
- __mascarillas__ : Cuando consigues atrapar una mascarilla, la proxima vez que entres en contacto con el virus tendras una vida extra.
- __vacunas__ : Al conseguir atrapar una vacuna dispondras de 3 disparos para matar a los enemigos.

* * *
## MVP
### Tecnica
HTML5 __Canvas__, __¿DOM?__ , __Javascript__, __CSS__
### Pantallas del juego
* __Splash Screen__
* __Game Screen__
* __Game succesfull screen__
* __SGame over screen__
### Splash Screen
* Backgound image
* Title
* button (start game)
* ¿Setup?
    * Music: On/off
    * Sound effects: On/off

* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Title GAME OVER
  * Play again button
* __Game succesfull screen__
  * Title YOU ARE SAVED
  * message
***
  ### Game
* Crear las pantallas
* Crear al jugador
* Crear el enemigo
* Crear los rollos, mascarillas y vacunas que apareceran
* Mover el jugador
  * Apretando la flecha izquierda o la flecha derecha para moverse a ambos lados.

* Check collision
  * En el caso de tocar con los rollos se sumaran al marcador.
  * En caso de tocar con las mascarillas tendras una vida extra.
  * En caso de coger la vacuna dispondras de tres disparos.
  * Por ultimo en caso de contactar con el virus y no llevar mascarilla GAME OVER.
* * *

## Data structure
__main.js__
````
createSplashScreen();
createGameScreen();
createWinScreen();
createGameOverScreen();
destroyStartScreen();
destroyGameScreen();
destroyWinScreen();
destroyGameOverScreen();

});

 
````
__Game.js__
````
Game.drawBoard();
Game.drawPlayer();
Game.generateEnemy();
Game.generateRolls();
Game.generateMasks();
Game.generatesVaccines();
Game.gameOver();

````
__Player.js__
````
class Player(){
  this.width;
  this.height;
  this.image;
  this.health;
  this.score;
 };
 Player.move();
 Player.checkCollision();
 Player.extraLife();
 Player.score();


````
__Items.js__
````
class Items(){
  this.width;
  this.height;
  this.image

    class Enemy extends Items{
        constructor(width,height,image,kill)
        super(width,heigth,image)
        this.kill
    }
    class Rolls extends Items{
        constructor(width,height,image,score)
        super(width,heigth,image)
        this.score
    }
    class Masks extends Items{
        constructor(width,height,image,health)
        super(width,heigth,image)
        this.health
    }
    class Vaccine extends Items{
        constructor(width,height,image,shoots)
        super(width,heigth,image)
        this.shoots
    }
}




````

  
