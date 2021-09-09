let computerScore = 0;
        let humanScore = 0;
        let roundText = '';

        function computerPlay () {
            let options = new Array('Rock','Paper','Scissors');
            let alea = Math.floor(Math.random()*options.length);
            let optionSelected = options[alea];
            alert('Computer chooses '+optionSelected);
            return(optionSelected);
        }

        function round (playerSelection,computerSelection) {
            let a = playerSelection.toUpperCase();
            let b = computerSelection.toUpperCase();
            if (((a==='PAPER')&&(b==='ROCK'))||
                ((a==='ROCK')&&(b==='SCISSORS'))||
                ((a==='SCISSORS')&&(b==='PAPER'))
                ) {
                humanScore++;
                roundText = 'You Win! Because '+a+' beats '+b+'. Nice!';
                alert('You Win! Because '+a+' beats '+b+'. Nice!');
            } else if (a===b) {
                roundText = 'It\'s a tie';
                alert('It\'s a tie');
            } else if (((b==='PAPER')&&(a==='ROCK'))||
                    ((b==='ROCK')&&(a==='SCISSORS'))||
                    ((b==='SCISSORS')&&(a==='PAPER'))
                    ){
                computerScore++;
                roundText = 'You Lose! Because '+b+' beats '+a+'. Oh no :(';
                alert('You Lose! Because '+b+' beats '+a+'. Oh no :(');
            } else {
                alert('C\'mon dude, what are you doing?. Invalid round...');
                return('C\'mon dude, what are you doing?. Invalid round...');
            }
        }

        function finish () {
            return (computerScore === 5 || humanScore === 5 );
        }

        //Descarto esta parte para usar el DOM
        //  function game () {
        //      let text = '';
        //      for (let i=1; i<=5 ; i++){
        //          let playerSelection = prompt ('Rock, paper or scissors?');
        //          let computerSelection = computerPlay();
        //          alert('Computer selection: '+computerSelection);
        //          text += ('ROUND ' +i.toString()+': '+round(playerSelection,computerSelection))+'\n';
        //      }
        //      alert(text+'The final score is: HUMAN '+humanScore.toString()+' VS '+computerScore.toString()+' COMPUTER');
        //      return(text+'The final score is: HUMAN '+humanScore.toString()+' VS '+computerScore.toString()+' COMPUTER');
        //  }
        // game ();

        const rockBtn = document.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorsBtn = document.getElementById('scissors');

        rockBtn.addEventListener('click', () => click('rock'));
        paperBtn.addEventListener('click', () => click('paper'));
        scissorsBtn.addEventListener('click', () => click('scissors'));
        
        function click(playerSelection) {
            if (finish()) {
                return;
            }

            const computerSelection = computerPlay();
            round(playerSelection,computerSelection);

        }