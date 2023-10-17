function submit(){
    document.getElementById("error").innerHTML = ""; //resets error message
    let input = document.getElementById("input").value
    let error = document.getElementById("error")
    if(input == ""){
        error.innerHTML = "Empty Task cannot be submitted"
    }
    else{
        let tasklist = document.getElementById("tasklist");
        let li = document.createElement("li")
        li.textContent = input;   


        //make checkbox
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox"
        checkBox.className = "checkBox"
        li.appendChild(checkBox)
        checkBox.addEventListener("click", ()=>{
            if(checkBox.checked){
                li.style.textDecoration = "line-through"
                li.style.textDecorationColor = "white"
                li.style.textDecorationStyle = "double"
                li.style.color = "grey"
            }
            else{
                li.style.textDecoration = "none"
                li.style.color = "black"
            }
        })
        

        //make delete button
        let delbtn = document.createElement("span");
        delbtn.textContent = "X";
        delbtn.className = "delbtn";
        delbtn.addEventListener("click", e => {
            tasklist.removeChild(li);
        })
        li.appendChild(delbtn);

        //make edit button
        let editbtn = document.createElement("span")
        editbtn.textContent = "E"
        editbtn.className = "editbtn";
        editbtn.addEventListener("click", ()=>{
            li.removeChild(editbtn);
            li.removeChild(checkBox)
            li.removeChild(delbtn)

            let editinput = document.createElement("input")
            editinput.type = "text";
            editinput.className = "editinput"
            li.textContent = "";
            editinput.value = input;
            

            let newSubmit = document.createElement("BUTTON")
            newSubmit.type = "button"
            newSubmit.className = "newSubmit"
            newSubmit.textContent = "Save";
            li.appendChild(editinput);
            li.appendChild(newSubmit);

            newSubmit.addEventListener("click", ()=>{
                input = editinput.value;
                li.textContent = editinput.value;
                tasklist.appendChild(li);
                li.appendChild(checkBox);
                li.appendChild(delbtn);
                li.appendChild(editbtn);
            })
        })
        li.appendChild(editbtn)


        //keeps new tasks on top of list
        let pos = tasklist.firstElementChild;
        if(pos == null){
            tasklist.appendChild(li);
        }
        else{
            tasklist.insertBefore(li, pos)
        }
    }

    //resets the input bar
    document.getElementById("input").value = ""
}