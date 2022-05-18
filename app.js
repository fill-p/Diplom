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

// Перевірка правильності кода
function StringSearch() {
  var SearchTermTest1 = document.getElementById("textBox1.1").value;
  var SearchTermTest2Option1 = document.getElementById("textBox1.2.1").value;
  var SearchTermTest2Option2 = document.getElementById("textBox1.2.2").value;
  var SearchTermTest3Option1 = document.getElementById("textBox1.3.1").value;
  var SearchTermTest3Option2 = document.getElementById("textBox1.3.2").value;
  var SearchTermTest1Condition = document.getElementById("textBoxCondition1.1").value;
  var SearchTermTest2Condition = document.getElementById("textBoxCondition1.2").value;
  var SearchTermTest3Condition = document.getElementById("textBoxCondition1.3").value;
  var TextSearch = editor.getValue();

  if (SearchTermTest1Condition.length > 0 && TextSearch.indexOf(SearchTermTest1Condition) > -1) {
    if (SearchTermTest1.length > 0 && TextSearch.indexOf(SearchTermTest1) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test1').value = 'Тест 1: Корінь з допомогою Math - зараховано';
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test1').value = 'Тест 1: Корінь з допомогою Math - не зараховано';
    }
  } else if (SearchTermTest2Condition.length > 0 && TextSearch.indexOf(SearchTermTest2Condition) > -1 ) {
    if (SearchTermTest2Option1.length > 0 && TextSearch.indexOf(SearchTermTest2Option1) > -1 || TextSearch.indexOf(SearchTermTest2Option2) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test2').value = 'Тест 2: Квадрат числа з допомогою Math - зараховано';
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test2').value = 'Тест 2: Квадрат числа з допомогою Math - не зараховано';
    }
  } else if (SearchTermTest3Condition.length > 0 && TextSearch.indexOf(SearchTermTest3Condition) > -1) {
    if (SearchTermTest3Option1.length > 0 && TextSearch.indexOf(SearchTermTest3Option1) > -1 || TextSearch.indexOf(SearchTermTest3Option2) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test3').value = 'Тест 3: Число в степені числа з допомогою Math - зараховано';
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test3').value = 'Тест 3: Число в степені числа з допомогою Math - не зараховано';
    }
  } else {
    alert('Введений довільний код, або коду немає');
  }
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
