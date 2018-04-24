var indexList = document.getElementById("indexList");
var textDiv = document.getElementById("textDiv");

$(document).ready(function(){

    $.getJSON("json.txt",function(data){

        $.each(data,function(key,val){

            $.each(val,function(key,val){

                var l1 = document.createElement("li");
                var ul1 = document.createElement("ul");
                l1.className = "list-group-item";
                ul1.className = "list-group";
                var grade = document.createTextNode(val.name);
                ul1.appendChild(grade);
                l1.appendChild(ul1);

                $.each(val.subjectList,function(key,val){

                    var l2 = document.createElement("li");
                    var ul2 = document.createElement("ul");
                    l2.className = "list-group-item";
                    ul2.className = "list-group";
                    var subject = document.createTextNode(val.name);
                    ul2.appendChild(subject);
                    l2.appendChild(ul2);

                    $.each(val.chapterList,function(key,val){
                        var l3 = document.createElement("li");
                        l3.className = "list-group-item";
                        l3.setAttribute("id",val.name);
                        var topic = document.createTextNode(val.name);
                        l3.appendChild(topic);

                        $.each(val.questionList,function(key,val){
                            var para = document.createElement("p");
                            para.className ="mt-4";
                            var h6 = document.createElement("h6");
                            var questionTextNode = document.createTextNode("Question: "+val.question);
                            var answerTextNode = document.createTextNode("Answer: "+val.answer);
                            h6.appendChild(questionTextNode);
                            para.appendChild(h6);
                            para.appendChild(answerTextNode);
                            textDiv.appendChild(para);
                        });

                        ul2.appendChild(l3);
                    });

                    ul1.appendChild(l2);
                });

                indexList.appendChild(l1);
            });
        });
    });
});