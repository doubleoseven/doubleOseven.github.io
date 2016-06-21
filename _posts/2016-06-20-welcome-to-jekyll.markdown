---
layout: post
title:  "180 day projects - Setting up this website"
date:   2016-06-20 23:51:09 +0300
categories: 
---
Due to my lack of dedication in a lot of things in life, I’ve decided to start the 180 day project as an attempt to challenge myself and improve my coding and creativity skills. I had the idea after coming across this [blog](http://athougcodesatnight.tumblr.com/tagged/180dayproject) over here. (Thank you Athoug for the brilliant idea! :D)

So my first project isn’t really a challenge per se, however I thought it was be cool if I set up a webpage to display the projects using something like Jekyll. Jekyll allows you to customise your webpage while providing you with a base which prevents me from having to do everything from scratch.

If you've never heard of Jekyll here's some information about it: 
<br>
- Jekyll is a static site generator written in Ruby by a guy called Tom Preson - Warner who also happens to be Github’s cofounder. 
<br>
- It is distributed under an open source licence <br>
- It is the engine behind Github pages, a GitHub feature that allows you to host websites based on your GitHub repositories. <br>
- It supports front-end frameworks such as Bootstrap <br> <br>

So the first step was to setup Github pages  (because long story short: Github pages uses Jekyll) using my github account, which I had already done sometime in the past, however I had to clean stuff that was already in there so I that could start with a brand new Jekyll project.

<div class="col">
              <ul class="list-inline intro-social-buttons text-center">
                       <img src="/images/new.png" alt="Smiley face" align="middle" class="img-responsive" > 
               </ul>
</div>

Once I had a brand new project, I ran the jekyll server using the “jekyll serve” command at the terminal. This only works assuming you have Jekyll already installed. 

<div class="col">
              <ul class="list-inline intro-social-buttons text-center">
                       <img src="/images/terminal.png" alt="Smiley face" align="middle" class="img-responsive" > 
               </ul>
</div>

I then navigated to http://127.0.0.1:4000/ to view the generated website. 


<div class="col">
              <ul class="list-inline intro-social-buttons text-center">
                       <img src="/images/newwebsite.png" alt="Smiley face" align="middle" class="img-responsive" > 
               </ul>
</div>


The next step was to start messing around with the CSS of the page to make it look pretty - at that moment in time, it just looked blegh. So first I made a background in illustrator using a rounded rectangle and gradients. (cause who doesn’t like gradients). Then I tried looking at how the Jekyll project was set up so that I could change the styling as I liked and add my own layouts and blog posts. 

While doing so, I came across something called SASS which apparently stands for Syntactically Awesome Style Sheets.  Sass allows you to use variables, nesting, inheritance and other awesome features while writing CSS. Messing around with that to change how stuff looked was pretty fun.

Here's some css code I used:

{% highlight css %}
	<!--  To make the image rounded -->
	border-style: dotted;
	border-radius: 50px;
	overflow: hidden;
	border-width: thick;
{% endhighlight %}


{% highlight css %}
	<!--  To position the heading -->
	float: left;
	position: absolute;
	top: 35px;

{% endhighlight %}


It turns out Jekyll is also pretty cool when it comes to it’s layouts. How it basically works is by having a default layout and then all other layouts inherit from the default. This means your “posts page” can look totally different from your “about me” page while still looking like it’s from the same webpage. Pretty sweet. 

Anyways, majority of my time was spent just trying to make this webpage look the way I wanted it to. And I’m probably going to go through with tweaks later on. If you want to look at the source code for this website in it’s entiretly, I’ve made it available as open source on my [github page](https://github.com/doubleoseven?tab=repositories). 
