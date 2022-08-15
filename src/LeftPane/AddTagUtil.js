export default function addTag(newTag){
    var exsistingdata = localStorage.getItem("notebook");
    exsistingdata=JSON.parse(exsistingdata);
    
    
    if(newTag!='All' && (!exsistingdata.tags.includes(newTag))){
        exsistingdata.tags.push(newTag);
        localStorage.setItem("notebook",JSON.stringify(exsistingdata));
    }
}