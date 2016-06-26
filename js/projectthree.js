				
		var mScore = 0;

		var mQuestions = 
		[
			['How many vocal sounds does a cat have?', '100'],
			['How many teeth does an adult cat have?', '30'],
			['Cats greet one another using their: ______', 'Nose'],
			['A group of kittens is called a: _____', 'Kindle'],
			['A female cat is called a: ______', 'Queen'],
			['A cat lover is called a: ______ (hint: its greek)', 'Ailurophilia'],
			['What is the largest breed of cat?', 'Ragdoll'],
			['Cats don’t have sweat glands over their bodies like humans do. True or False?', 'True'],
			['How many bones does a cat have in its body?', '230'],
			['In what version of Cinderella is the the benevolent fairy godmother figure a cat?', 'Italian'],
			['How many whiskers does a cat have on each side of its face?', '12']
		];

		function Start() 
		{
			HideVideo();
			for(var i = 0; i < mQuestions.length; i++)
			{
				AskQuestion(mQuestions[i]);
			}
			
			PrintResult(); 
		}
				
		

		function AskQuestion(question)
		{
			var answer = prompt(question[0], " "); 
			if(answer != null && answer.toLowerCase() == question[1].toLowerCase() ) 
			{
				alert("Correct!");
				mScore++;
			} else
			{
				alert("Wrong answer! The correct answer is " + question[1]);
			}
		}
		
		function PrintResult () {
			
			var _result = document.getElementById("result")
			
			if(mScore == mQuestions.length)
			{
				_result.innerHTML = null;
				_result.innerHTML = "Congratulations! You got all the questions correct! Here, have a cat video. :D";
				ShowVideo();

			} else 
			{
				_result.innerHTML = null;
				_result.innerHTML = "You got " + mScore + " out of " + mQuestions.length + " correct. Sorry, no cat video for you. :(";
			}
			mScore = 0;
		}

		function ShowVideo()
		{
			document.getElementById("video").style.visibility = "visible";
		}

		function HideVideo()
		{
			document.getElementById("video").style.visibility = "hidden";
		}