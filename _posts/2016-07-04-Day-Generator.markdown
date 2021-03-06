---
layout: post
date:   2016-06-26 21:51:09 +0300
title: "Brushing up on Javascript "
categories: blog
---
{% for post in site.posts %}
		{% if post.day == '001' %}
<h2> Day Generator - <a href="{{ post.url | prepend: site.baseurl}}"> Day 002 </a></h2>
		{% endif %}
{% endfor %}

For the previous two projects, I tried to get my hands a little dirty with Javascript. Although, I'm familiar with JS, I wanted to review some of the syntax and what better way to do that than write some code.
<br> <br>
So the first project is extremely simple, it's almost embarressing. (However, something is always better than nothing). Using html, I added two buttons to the page: the first displays today's date, in the following format:
<br><br>
Day of Week, Month Day Year.
<br> <br>
In order to acheive this, all I did was use two arrays to store the number of days and months as strings.

{% highlight javascript %}

	var days = [];
	var months = [];

{% endhighlight %}

 I then used the 'new Date()' function to get a reference to the date variable and stored it in a variable called day.


{% highlight javascript %}

	var day = new Date();

{% endhighlight %}


 I then used 'day' to call on the functions getDay(),  getMonth(), getDate() and getFullYear() in order to get the information I needed. All the functions return integers, so I passed the result of getDay() and getMonth() into the arrays I created to display their string counterparts.

 {% highlight javascript %}

	today.innerHTML = "Today is " + days[day.getDay()] + ", " +
	months[day.getMonth()] + " " + day.getDate() + " " + day.getFullYear();

{% endhighlight %}

The result:

<div class="col">
              <ul class="list-inline intro-social-buttons text-center">
                       <img src="/images/currentdate.png" alt="Smiley face" align="middle" class="img-responsive" >
               </ul>
</div>

And that's pretty much it!

<br>
The second button just gets a random number and uses it to display a day within the array:

 {% highlight javascript %}

	// Math.Random returns a number between 0 and 1
	var random = Math.floor((Math.random() * (days.length-1)) + 1);
	_randomDay.innerHTML = "Here's a random day of the week: " + days[random];

{% endhighlight %}

The result:

<div class="col">
              <ul class="list-inline intro-social-buttons text-center">
                       <img src="/images/randomday.png" alt="Smiley face" align="middle" class="img-responsive" >
               </ul>
</div>

Finally, I added in a link to each of the associated blog posts for each project. It can be found 'fixed' at the bottom left corner of each project page. I got the idea after reading up on using the "position" property in CSS. The result is the following:

<div class="col">
              <ul class="list-inline intro-social-buttons text-center">
                       <img src="/images/blogpost.png" alt="Smiley face" align="middle" class="img-responsive" >
               </ul>
</div>

{% highlight css %}

.blogpost
{
	position: fixed;
	bottom: 8px;
	right: 18px;

	font-family: monospace;
	font-size: 30px;
	border: 10px;
	border-style: dashed;
}

{% endhighlight %}


Thank you for reading!
