// Not verilerini temsil eden sınıf
var Note = /** @class */ (function () {
    function Note(id, content) {
        this.id = id;
        this.content = content;
    }
    return Note;
}());
// Notlar dizisi
var notes = [];
// HTML elementlerini al
var noteInput = document.getElementById('noteInput');
var noteList = document.getElementById('noteList');
// Not ekleme fonksiyonu
function addNote() {
    var content = noteInput.value.trim();
    if (content !== '') {
        var newNote = new Note(notes.length + 1, content);
        notes.push(newNote);
        displayNotes();
        noteInput.value = '';
    }
}
// Notları görüntüleme fonksiyonu
function displayNotes() {
    noteList.innerHTML = '';
    notes.forEach(function (note) {
        var listItem = document.createElement('li');
        listItem.innerText = note.content;
        listItem.setAttribute('data-note-id', note.id.toString());
        listItem.addEventListener('click', function () {
            deleteNote(note.id);
        });
        noteList.appendChild(listItem);
    });
}
// Not silme fonksiyonu
function deleteNote(noteId) {
    notes = notes.filter(function (note) { return note.id !== noteId; });
    displayNotes();
}
// Başlangıçta notları görüntüle
displayNotes();
