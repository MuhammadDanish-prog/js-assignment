var a=prompt("Enter the City Name")
var b="karachi";
if(a===b)
{
    alert("Welcome to city of lights ");
}


var a=prompt("Enter your Gender");
if(a==="male")
{
    alert("Good Morning Sir.")
}
else if(a==="female")
{
    alert("Good Morning Ma'am.");
}



var a=prompt("Enter Color Of Signal")
if(a==="red")
{
    alert("Must Stop");
}
else if(a==="yellow")
{
    alert("Ready To Move")
}
else if(a==="green")
{
    alert("Move Now")
}


var a=prompt("Enter a Fuel in litre")
if(a< 0.25)
{
alert("Please refill the fuel in your car")
}

var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }  

var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }  
else{
    alert("NOt true");
}
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }  
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  
e. if (true);{ alert("True"); } if (false){ alert("False"); }  
if("car" < "cat"){ alert("car is smaller than cat"); } 

var z=document.write("<h1>Marks Sheet</h1>")

var a=+prompt("Enter Your first subject obtained marks")
var b=+prompt("Enter Your second subject obtained marks")
var c=+prompt("Enter Your third subject obtained marks")
var f=300;
var e=document.write("<p>Total Marks :"+f+"</p>");
var g=a+b+c;
var h=document.write("<p>Obtained Marks :"+g+"</p>");
var d=(g/f)*100
var i=document.write("<p>Percentage :"+d+"</p>");
if(d>=80)
{
    document.write("<p>Grade:A-one</p>")
}
else if(d>=70)
{
    document.write("<p>Grade:A</p>")
}
else if(d>=60)
{
    document.write("<p>Grade:B</p>")
}
else if(d<60)
{
    document.write("<p>Grade:Fail</p>")
}
if(d>=80)
{
    document.write("Remarks:Excellent")
}
else if(d>=70)
{
    document.write("Remarks:Good")
}
else if(d>=60)
{
    document.write("Remarks:YOu need to improve")
}
else if(d<60)
{
    document.write("Remarks:Sorry")
}


var a=+prompt("Enter your secret number")
if(a===9)
{
    alert("Bingo! Correct answer");
}
else if(a===8 || a===10)
{
    alert("Close enough to the correct answer")
}

var a=+prompt("Enter a Number")
if(a%3==0)
{
    alert("Yes! it is divisible by 3")
}

var a=+prompt("Enter a number")
if(a%2==0)
{
    alert("Even")
}
else
{
    alert("odd")
}

var t=+prompt("Enter Today's Temperature")
if(t>40)
{
    alert("It is too hot outside.")
}
else if(t>30)
{
    alert("The Weather today is Normal.")
}
else if(t>20)
{
    alert("Today’s Weather is cool.")
}
else if(t>10)
{
    alert("OMG! Today’s weather is so Cool")
}

var a=+prompt("Enter The First Number")
var b=+prompt("Enter the Second Number")
var c=prompt("Enter the Operator")
if(c==="+")
{
alert(a+b)
}
else if(c==="-")
{
alert(a-b)
}
else if(c==="*")
{
alert(a*b)
}
else if(c==="/")
{
alert(a/b)
}
else if(c==="%")
{
alert(a%b)
}