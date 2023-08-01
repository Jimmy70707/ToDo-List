const box = document.getElementById("box");
const List = document.getElementById("List");

function addTask(){
    if(box.value === ''){
        alert("You Must Write Something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = box.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    box.value = "";
     saveData();

}

List.addEventListener("click" , function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    
    }
}, false);

function saveData(){
    localStorage.setItem("Data" , List.innerHTML);
}

function showTasks(){
    List.innerHTML = localStorage.getItem("Data");
}
showTasks();