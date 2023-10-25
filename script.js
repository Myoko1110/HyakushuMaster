const poems = [
    {
        "higarana": [
            "あきのたの",
            "かりおのいおの",
            "とまをあらみ",
            "わがころもでは",
            "つゆにぬれつつ"
        ],
        "kanji": [
            "秋の田の",
            "かりほの庵の",
            "苫をあらみ",
            "我が衣手は",
            "露にぬれつつ"
        ]
    },
    {
        "higarana": [
            "はるすぎて",
            "なつきにけらし",
            "しろたえの",
            "ころもほすちょう",
            "あまのかぐやま"
        ],
        "kanji": [
            "春すぎて",
            "夏来にけらし",
            "白妙の",
            "衣ほすてふ",
            "天の香具山"
        ]
    },
    {
        "higarana": [
            "あしびきの",
            "やまどりのおの",
            "しだりおの",
            "ながながしよを",
            "ひとりかもねむ"
        ],
        "kanji": [
            "あしびきの",
            "山鳥の尾の",
            "しだり尾の",
            "ながながし夜を",
            "ひとりかも寝む"
        ]
    },
    {
        "higarana": [
            "たごのうらに",
            "うちいでてみれば",
            "しろたえの",
            "ふじのたかねに",
            "ゆきはふりつつ"
        ],
        "kanji": [
            "田子の浦に",
            "うちいでて見れば",
            "白妙の",
            "富士の高嶺に",
            "雪はふりつつ"
        ]
    },
    {
        "higarana": [
            "おくやまに",
            "もみじふみわけ",
            "なくしかの",
            "こえきくときぞ",
            "あきはかなしき"
        ],
        "kanji": [
            "奥山に",
            "もみじふみわけ",
            "なく鹿の",
            "声聞くときぞ",
            "秋はかなしき"
        ]
    },
    {
        "higarana": [
            "かささぎの",
            "わたせるはしに",
            "おくしもの",
            "しろきをみれば",
            "よぞふけにける"
        ],
        "kanji": [
            "かささぎの",
            "渡せる橋に",
            "おく霜の",
            "白きを見れば",
            "夜ぞふけにける"
        ]
    },
    {
        "higarana": [
            "あまのはら",
            "ふりさけみれば",
            "かすがなる",
            "みかさのやまに",
            "いでしつきかも"
        ],
        "kanji": [
            "天の原",
            "ふりさけ見れば",
            "春日なる",
            "三笠の山に",
            "いでし月かも"
        ]
    },
    {
        "higarana": [
            "わがいおは",
            "みやこのたつみ",
            "しかぞすむ",
            "よをうじやまと",
            "ひとはいうなり"
        ],
        "kanji": [
            "わが庵は",
            "都のたつみ",
            "しかぞすむ",
            "世をうじ山と",
            "人はいうなり"
        ]
    },
    {
        "higarana": [
            "はなのいろは",
            "うつりにけりな",
            "いたずらに",
            "わがみよにふる",
            "ながめせしまに"
        ],
        "kanji": [
            "花の色は",
            "うつりにけりな",
            "いたづらに",
            "わが身よにふる",
            "ながめせしまに"
        ]
    },
    {
        "higarana": [
            "これやこの",
            "ゆくもかえるも",
            "わかれては",
            "しるもしらぬも",
            "おうさかのせき"
        ],
        "kanji": [
            "これやこの",
            "行くも帰るも",
            "わかれては",
            "知るも知らぬも",
            "あふ坂の関"
        ]
    },
    {
        "higarana": [
            "わたのはら",
            "やそしまかけて",
            "こぎいでぬと",
            "ひとにはつげよ",
            "あまのつりぶね"
        ],
        "kanji": [
            "わたの原",
            "八十島かけて",
            "こぎいでぬと",
            "人には告げよ",
            "あまのつり舟"
        ]
    },
    {
        "higarana": [
            "あまつかぜ",
            "くものかよいじ",
            "ふきとじよ",
            "おとめのすがた",
            "しばしとどめん"
        ],
        "kanji": [
            "天つ風",
            "雲のかよい路",
            "吹きとぢよ",
            "をとめの姿",
            "しばしとどめむ"
        ]
    },
    {
        "higarana": [
            "つくばねの",
            "みねよりおつる",
            "みなのかわ",
            "こいぞつもりて",
            "ふちとなりぬる"
        ],
        "kanji": [
            "つくばねの",
            "峰よりおつる",
            "みなの川",
            "こひぞつもりて",
            "淵となりぬる"
        ]
    },
    {
        "higarana": [
            "みちのくの",
            "しのぶもじずり",
            "誰ゆえに",
            "乱れそめにし",
            "われならなくに"
        ],
        "kanji": [
            "みちのくの",
            "しのぶもぢずり",
            "誰ゆゑに",
            "乱れそめにし",
            "われならなくに"
        ]
    },
    {
        "higarana": [
            "きみがため",
            "はるののにいでて",
            "わかなつむ",
            "わがころもでに",
            "ゆきはふりつつ"
        ],
        "kanji": [
            "君がため",
            "春の野にいでて",
            "若菜つむ",
            "わが衣手に",
            "雪はふりつつ"
        ]
    },
    {
        "higarana": [
            "たちわかれ",
            "いなばのやまの",
            "みねにおうる",
            "まつとしきかば",
            "いまかえりこむ"
        ],
        "kanji": [
            "立ちわかれ",
            "いなばの山の",
            "峰に生ふる",
            "まつとし聞かば",
            "いま帰り来む"
        ]
    },
    {
        "higarana": [
            "ちはやぶる",
            "かみよもきかず",
            "たつたがわ",
            "からくれないに",
            "みずくくるとは"
        ],
        "kanji": [
            "ちはやぶる",
            "神代もきかず",
            "竜田川",
            "からくれなゐに",
            "水くくるとは"
        ]
    },
    {
        "higarana": [
            "すみのえの",
            "きしによるなみ",
            "よるさえや",
            "ゆめのかよいじ",
            "ひとめよくらん"
        ],
        "kanji": [
            "すみの江の",
            "岸による波",
            "よるさへや",
            "夢のかよひ路",
            "人めよくらむ"
        ]
    },
    {
        "higarana": [
            "なにはがた",
            "みじかきあしの",
            "ふしのまも",
            "あわでこのよを",
            "すぐしてよとや"
        ],
        "kanji": [
            "難波潟",
            "みじかき芦の",
            "ふしのまも",
            "あはでこの世を",
            "すぐしてよとや"
        ]
    },
    {
        "higarana": [
            "わびぬれば",
            "いまはたおなじ",
            "なにわなる",
            "みをつくしても",
            "あわんとぞおもう"
        ],
        "kanji": [
            "わびぬれば",
            "いまはたおなじ",
            "難波なる",
            "みをつくしても",
            "あわむとぞ思う"
        ]
    },
    {
        "higarana": [
            "",
            "",
            "",
            "",
            "あわんとぞおもう"
        ],
        "kanji": [
            "わびぬれば",
            "いまはたおなじ",
            "難波なる",
            "みをつくしても",
            "あわむとぞ思う"
        ]
    },
];

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
