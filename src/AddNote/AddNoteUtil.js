const findNewId = (data) =>{
  let maxId = 0;
  data.map(currentItem=>{
    if(currentItem.id > maxId){
      maxId=currentItem.id;
    }
  })

  return maxId+1;

}
function addNewNote(color,title,content,tag) {
    var existing = JSON.parse(localStorage.getItem("notebook"));
    var newId = findNewId(existing.data);
    var newData={
        "id":newId,
        "color": color,
        "tag":tag,
        "title": title,
        "content": content
      };
     existing.data.push(newData);
     localStorage.setItem("notebook",JSON.stringify(existing));
}
export const getAllTags = () =>{
  var existing = JSON.parse(localStorage.getItem("notebook"));
  return existing.tags;

}
export default addNewNote;