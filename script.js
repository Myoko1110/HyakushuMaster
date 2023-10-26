let poems;

let request = new XMLHttpRequest();
request.open('GET', 'https://api.aoikujira.com/hyakunin/get2.php?fmt=json');
request.responseType = 'json';
request.send();
 
// JSONデータをJavaScriptオブジェクトに変換
request.onload = function () {
  let data = request.response;
  poems = JSON.parse(JSON.stringify(data));
  console.log(poems)
}

let poemIndex;
let poem;
let poemNumber = 0;

let correct = [];
let incorrect = [];

$(function(){
    $("#start").on("click", function(){
        viewQuestion();
    });

    $("#answer").on("click", function (){
        answerProgress();
    });

    $(".next").on("click", function (){
        $("#correct").css("display", "none");
        $("#incorrect").css("display", "none");
        viewQuestion();
    });

    $("#return").on("click", function (){
        $("#result").css("display", "none");
        $("#main").css("display", "");
    })
});

function answerProgress(){
    $("#question").css("display", "none");

    let answer = $("#field").val();
    if (poem.higarana[poemIndex] === answer){
        $("#correct").css("display", "");
        correct.push(poemNumber);
    }else{
        $("#incorrect").css("display", "");
        $(".answer-your span").text(answer);
        incorrect.push(poemNumber)
    }

    $(".answer-poem").each(function (){
        answer = "";

        let html = "";
        for (let i = 0; i < 5; i++){
            if (i === poemIndex){
                if (i === 0) {
                    html += "<strong>" + poem.kanji[i] + "</strong>";
                }else if (i === 2){
                    html += " <strong>" + poem.kanji[i] + "</strong><br>";
                }else{
                    html += " <strong>" + poem.kanji[i] + "</strong>";
                }
            }else if (i === 0) {
                html += poem.kanji[i]
            }else if (i === 2){
                html += " " + poem.kanji[i] + "<br>";
            }else{
                html += " " + poem.kanji[i];
            }
        }

        $(this).html(html);
    });
    poemNumber++;
}

function viewQuestion(){
    poemIndex = Math.floor(Math.random() * 5)
    poem = poems[poemNumber];

    if (poem == null){
        result();
        return;
    }

    poem = format(poemNumber);
    


    $("#main").css("display", "none");
    $("#question").css("display", "");

    $(".question-box").empty();
    let html = "<h1>";
    for (let i = 0; i < 5; i++){
        if (i === poemIndex){
            html += "<span><input type='text' id='field'></span>"
        }else{
            html += "<span>" + poem.kanji[i] + "</span>"
        }

        if (i === 2){
            html += "<br>"
        }
    }
    html += "</h1>"
    $(".question-box").append(html);

    $("#field").keypress(function (e){
        if(e.key === "Enter") {
            answerProgress();
        }
    });
}

function result(){
    $("#result").css("display", "");
    $(".result-length.correct").text(correct.length);
    $(".result-length.incorrect").text(incorrect.length);

    poemNumber = 0;
}

function format(index){
    kami = poems[index].kami.split(" ")
    simo = poems[index].simo.split(" ")
 
    k = [];
    for (i in kami){
        k.push(i);
    }
    for (i in simo){
        k.push(i);
    }
    kami = poems[index]["kami-kana"].split(" ")
    simo = poems[index]["simo-kana"].split(" ")
 
    h = [];
    for (i in kami){
        h.push(i);
    }
    for (i in simo){
        h.push(i);
    }

    return {hiragana: h, kanji: k};
}

window.onkeydown = function (e){
    if (e.key === "Enter"){
        if ($("#correct").css("display") === "flex" || $("#incorrect").css("display") === "flex"){
            $("#correct").css("display", "none");
            $("#incorrect").css("display", "none");
            viewQuestion();
        }
    }
}
