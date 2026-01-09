var list_mani=document.querySelector(".list-selector")
var input=document.querySelector(".input")
function sambavam() {
    var list_item=document.createElement("li")
    list_item.className="list-group-item" 
    list_item.textContent=input.value
    

    var deleteBtn = document.createElement("button")
    deleteBtn.textContent="delete"
    deleteBtn.className="btn btn-danger btn-sm ms-2 float-end" 
    deleteBtn.onclick=function() {
        list_item.remove()
    }
    
    list_item.appendChild(deleteBtn)
    list_mani.append(list_item)
    input.value=""
}
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sambavam(); 
  }
});
