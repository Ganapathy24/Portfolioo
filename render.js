function render(event,topic){
    var i,tabcontent,tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for(i = 0;i<tabcontent.length;i++)
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(topic).style.display = "block";
      event.currentTarget.className += " active"; 
    }
    
document.getElementById("default").click();

function renderCertificates(event,platform){
    var i,tabcontent,tablinks;
    tabcontent = document.getElementsByClassName('certificate');

    for(i=0;i<tabcontent.length;i++)
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btns");
    for(i = 0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
    }
    for(i=1;i<=8;i++){
    document.getElementById(platform+""+i).style.display = "block";
    }
      event.currentTarget.className += " active";
}
document.getElementById('def').click();
function renderIntern(event,platform){
    var i,tabcontent,tablinks;
    tabcontent = document.getElementsByClassName('intern');

    for(i=0;i<tabcontent.length;i++)
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btns");
    for(i = 0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
    }
    document.getElementById(platform).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("deff").click();