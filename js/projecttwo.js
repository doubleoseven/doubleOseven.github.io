

		var days = [];
		var months = [];
		days.push("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
		months.push("Jan", "Feb" ,"March" , "April",  "May","June",
		"July", "Aug", "Sept", "Oct", "Nov", "Dec");

		var day = new Date();
		function RandomDay()
		{
			// Math.Random returns a number between 0 and 1
			var random = Math.floor((Math.random() * (days.length-1)) + 1);
			var _randomDay = document.getElementById("randomday");
			_randomDay.innerHTML = "Here's a random day of the week: " + days[random];
		}

		function CurrentDay()
		{
			// This create data variable with which we can get the current day
			var today = document.getElementById("today");
			// today.innerHTML = day.getDay();
			today.innerHTML = "Today is " + days[day.getDay()] + ", " +
			months[day.getMonth()] + " " + day.getDate() + " " + day.getFullYear();
		}
