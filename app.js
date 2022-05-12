// Инициализация CodeMirror
var doc = document.getElementById('code_result').contentWindow.document;
var html_value;
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    styleActiveLine: true,
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    tabSize: 4,
    mode: {
         name: "htmlmixed",
         globalVars: true
    },
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
});

// Запуск кода
function run() {
    html_value = editor.getValue();
    doc.open();
    doc.write(html_value);
    doc.close();
}

// Сохранение контента с textarea по кнопке 
function saveTextAsFile() {
    var textToWrite = editor.getValue();
    var textFileAsBlob = new Blob([textToWrite], {
      type: "text/plain;charset=utf-8"
    });
    var fileNameToSaveAs = "myfile.txt";
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
  }

// Сохранение контента с textarea по Ctr + S
CodeMirror.commands.save = function saveTextAsFile() {
    var textToWrite = editor.getValue();
    var textFileAsBlob = new Blob([textToWrite], {
      type: "text/plain;charset=utf-8"
    });
    var fileNameToSaveAs = "myfile.txt";
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
  } 
  
// Смена темы
  const btn = document.querySelector(".btn-theme")
  btn.addEventListener('click', function(){
      document.body.classList.toggle("light-theme"
      )
  })

  function toggle(el) {
    el.style.display = (el.style.display == 'none') ? '' : 'none'
    }