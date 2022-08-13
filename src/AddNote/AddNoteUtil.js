function addNewNote(color,title,content,tag) {
    var existing = JSON.parse(localStorage.getItem("notebook"));
    var newData={
        "color": color,
        "tag":tag,
        "title": title,
        "content": content
      };
     existing.data.push(newData);
     localStorage.setItem("notebook",JSON.stringify(existing));
}
export default addNewNote;