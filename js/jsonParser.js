var indexList = document.getElementById("indexList");
var textDiv = document.getElementById("textDiv");
var questionAnswers = [];
var count = 0;

$(document).ready(function(){

    $.getJSON("json.txt",function(data){

        $.each(data,function(key,val){

            $.each(val,function(key,val){

                var l1 = document.createElement("li");
                var ul1 = document.createElement("ul");
                l1.className = "bg-light list-group-item grade";
                ul1.className = "list-group";
                var grade = document.createTextNode(val.name);
                ul1.appendChild(grade);
                l1.appendChild(ul1);

                $.each(val.subjectList,function(key,val){

                    var l2 = document.createElement("li");
                    var ul2 = document.createElement("ul");
                    l2.className = "list-group-item subject";
                    ul2.className = "list-group";
                    var subject = document.createTextNode(val.name);
                    ul2.appendChild(subject);
                    l2.appendChild(ul2);
                    l2.style.display = "none";

                    $.each(val.chapterList,function(key,val) {

                        var l3 = document.createElement("li");
                        l3.className = "bg-light list-group-item topic";
                        l3.setAttribute("id",count);
                        ++count;
                        var topic = document.createTextNode(val.name);
                        l3.appendChild(topic);
                        l3.style.display = "none";
                        var temp =[];

                        $.each(val.questionList,function(key,val){

                            temp.push("<p class=\"mt-4\"><h6>Question:  "+val.question+"</h6><br>Answer:  "+val.answer+"</p>");

                        });

                        questionAnswers.push(temp);
                        ul2.appendChild(l3);

                    });

                    ul1.appendChild(l2);
                });

                indexList.appendChild(l1);
            });
        });
    });

    $(document).on("click","li.topic",function (event) {

        var id = $(this).attr('id');
        var text = "";
        for(var i=0; i<questionAnswers[id].length; i++)
            text += questionAnswers[id][i];
        textDiv.innerHTML = text;
        event.stopPropagation();

    });

    $(document).on("click","li.grade",function (event) {

        $("li.subject").toggle('slow');
        $("li.topic").hide();
        event.stopPropagation();

    });

    $(document).on("click","li.subject",function (event) {

        $("li.topic").toggle('slow');
        event.stopPropagation();

    });
});