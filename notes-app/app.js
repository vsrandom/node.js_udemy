const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command : 'add',
    describe : 'Add a note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            demandOption : true,
            type : 'string',
            describe : 'Note Body'
        }
    },
    handler : function(argv){
        // console.log(argv)
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command  : 'remove',
    describe : 'Removing a Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command : 'read',
    describe : 'Reading a Note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'Listing the Notes',
    handler : function(){
        notes.listNotes();
    }
})

yargs.parse()
