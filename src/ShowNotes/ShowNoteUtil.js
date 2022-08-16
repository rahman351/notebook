
 export const deleteNote = ( id) =>{
    var existing= JSON.parse(localStorage.getItem("notebook"));
    var newData = existing.data.filter(currentdata => currentdata.id!= id);
    existing.data=newData;
    localStorage.setItem("notebook",JSON.stringify(existing));

    window.location.href="/";

}