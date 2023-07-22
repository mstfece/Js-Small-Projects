// Not verilerini temsil eden sınıf
class Note {
    id: number;
    content: string;
  
    constructor(id: number, content: string) {
      this.id = id;
      this.content = content;
    }
  }
  
  // Notlar dizisi
  let notes: Note[] = [];
  
  // HTML elementlerini al
  const noteInput = document.getElementById('noteInput') as HTMLInputElement;
  const noteList = document.getElementById('noteList') as HTMLUListElement;
  
  // Not ekleme fonksiyonu
  function addNote() {
    const content = noteInput.value.trim();
    if (content !== '') {
      const newNote = new Note(notes.length + 1, content);
      notes.push(newNote);
      displayNotes();
      noteInput.value = '';
    }
  }
  
  // Notları görüntüleme fonksiyonu
  function displayNotes() {
    noteList.innerHTML = '';
    notes.forEach((note) => {
      const listItem = document.createElement('li');
      listItem.innerText = note.content;
      listItem.setAttribute('data-note-id', note.id.toString());
      listItem.addEventListener('click', () => {
        deleteNote(note.id);
      });
      noteList.appendChild(listItem);
    });
  }
  
  // Not silme fonksiyonu
  function deleteNote(noteId: number) {
    notes = notes.filter((note) => note.id !== noteId);
    displayNotes();
  }
  
  // Başlangıçta notları görüntüle
  displayNotes();
  