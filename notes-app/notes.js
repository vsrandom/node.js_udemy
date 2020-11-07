const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function(){
//     return "Your Notes..."
// }

const addNote = function(t,b){
    let notes = loadNotes();
    let chkNotes = notes.filter(el=>{
        return el.title === t
    })
    if(chkNotes.length > 0) console.log(`Note with title : ${t} already taken`)
    else{
        notes.push({
            title : t,
            body : b
        })
        saveNotes(notes);
        console.log("New note added !")
    }
}

const removeNote = (t)=>{
    const notes = loadNotes();
    const newNotesArray  = notes.filter(el=>{
        return el.title !== t
    })
    saveNotes(newNotesArray);
    console.log(`Note with title ${t} removed !`)
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.green.inverse("Your Notes"))
    notes.forEach(el=>{
        console.log(el.title)
    })
}

const readNote = (title)=>{
    const notes = loadNotes();
    const findNote = notes.find(el=>el.title===title)
    if(!findNote) console.log(chalk.red.inverse("Note not found !"))
    else console.log(chalk.green(findNote.body))
}

const saveNotes = (notesArray)=>{
    fs.writeFileSync('notes.json',JSON.stringify(notesArray));
}

const loadNotes = ()=>{
    try{
        let dataJson = fs.readFileSync('notes.json');
        dataJson = dataJson.toString(); 
        return JSON.parse(dataJson) 
    } catch(err){
        return []
    }
}

module.exports = {
    // getNotes  : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}