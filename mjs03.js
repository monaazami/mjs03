var questions = [
    {
        prompt: "What color is banana? \n(a)Yellow \n(b)Red \n(c)Orange ",
        answer:"a"
    },
    {
        prompt: "What color is apple? \n(a)Yellow \n(b)Red & Green \n(c)Brown ",
        answer:"b"
    },
    {
        prompt: "What color is strawberry? \n(a)Yellow \n(b)Red \n(c)Blue ",
        answer:"b"
    }
]
var score=0;

for(var i=0;i<questions.length;i++){
    var response=window.prompt(questions[i].prompt);
    //console.log(response);
    if(response==questions[i].answer){
        alert("Weldone, that is right!");
        score=score+1;
    } else alert("Oooops,sorry that is wrong!");
}
alert("Your score is "+ score+"/"+questions.length+".");