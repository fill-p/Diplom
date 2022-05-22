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
  var SearchTermTest4Option1 = document.getElementById("textBox2.1.1").value;
  var SearchTermTest4Option2 = document.getElementById("textBox2.1.2").value;
  var SearchTermTest5Option1 = document.getElementById("textBox2.2.1").value;
  var SearchTermTest5Option2 = document.getElementById("textBox2.2.2").value;
  var SearchTermTest6Option1 = document.getElementById("textBox2.3.1").value;
  var SearchTermTest6Option2 = document.getElementById("textBox2.3.2").value;
  var SearchTermTestIterator = document.getElementById("textBoxIterator").value;
  var SearchTermTest7Option1 = document.getElementById("textBox3.1.1").value;
  var SearchTermTest7Option2 = document.getElementById("textBox3.1.2").value;
  var SearchTermTest7Option3 = document.getElementById("textBox3.1.3").value;
  var SearchTermTest7Option4 = document.getElementById("textBox3.1.4").value;
  var SearchTermTest8Option1 = document.getElementById("textBox3.2.1").value;
  var SearchTermTest8Option2 = document.getElementById("textBox3.2.2").value;
  var SearchTermTest1Condition = document.getElementById("textBoxCondition1.1").value;
  var SearchTermTest2Condition = document.getElementById("textBoxCondition1.2").value;
  var SearchTermTest3Condition = document.getElementById("textBoxCondition1.3").value;
  var SearchTermTest4Condition = document.getElementById("textBoxCondition2.1").value;
  var SearchTermTest5Condition = document.getElementById("textBoxCondition2.2").value;
  var SearchTermTest6Condition = document.getElementById("textBoxCondition2.3").value;
  var SearchTermTest7Condition = document.getElementById("textBoxCondition3.1").value;
  var SearchTermTest8Condition = document.getElementById("textBoxCondition3.2").value;
  var TextSearch = editor.getValue();
  var i = 0;

  if (SearchTermTest1Condition.length > 0 && TextSearch.indexOf(SearchTermTest1Condition) > -1) {
    if (SearchTermTest1.length > 0 && TextSearch.indexOf(SearchTermTest1) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test1').value = 'Завдання 1: Корінь з допомогою Math - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test1').value = 'Завдання 1: Корінь з допомогою Math - не зараховано';
    }
  } else if (SearchTermTest2Condition.length > 0 && TextSearch.indexOf(SearchTermTest2Condition) > -1 ) {
    if (SearchTermTest2Option1.length > 0 && TextSearch.indexOf(SearchTermTest2Option1) > -1 || TextSearch.indexOf(SearchTermTest2Option2) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test2').value = 'Завдання 2: Квадрат числа з допомогою Math - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test2').value = 'Завдання 2: Квадрат числа з допомогою Math - не зараховано';
    }
  } else if (SearchTermTest3Condition.length > 0 && TextSearch.indexOf(SearchTermTest3Condition) > -1) {
    if (SearchTermTest3Option1.length > 0 && TextSearch.indexOf(SearchTermTest3Option1) > -1 || TextSearch.indexOf(SearchTermTest3Option2) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test3').value = 'Завдання 3: Число в степені числа з допомогою Math - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test3').value = 'Завдання 3: Число в степені числа з допомогою Math - не зараховано';
    }
  } else if (SearchTermTest4Condition.length > 0 && TextSearch.indexOf(SearchTermTest4Condition) > -1) {
    if (SearchTermTest4Option1.length > 0 && TextSearch.indexOf(SearchTermTest4Option1) > -1 || TextSearch.indexOf(SearchTermTest4Option2) > -1) {
      swal("Вірно!", "", "success");
      document.getElementById('test4').value = 'Завдання 1: Цикл for - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test4').value = 'Завдання 1: Цикл for - не зараховано';
    }
  } else if (SearchTermTest5Condition.length > 0 && TextSearch.indexOf(SearchTermTest5Condition) > -1) {
    if (TextSearch.indexOf(SearchTermTestIterator) > -1 && (TextSearch.indexOf(SearchTermTest5Option1) > -1 || TextSearch.indexOf(SearchTermTest5Option2) > -1)) {
      swal("Вірно!", "", "success");
      document.getElementById('test5').value = 'Завдання 2: Цикл while - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test5').value = 'Завдання 2: Цикл while - не зараховано';
    }
  } else if (SearchTermTest6Condition.length > 0 && TextSearch.indexOf(SearchTermTest6Condition) > -1) {
    if (TextSearch.indexOf(SearchTermTestIterator) > -1 && (TextSearch.indexOf(SearchTermTest6Option1) > -1 || TextSearch.indexOf(SearchTermTest6Option2) > -1)) {
      swal("Вірно!", "", "success");
      document.getElementById('test6').value = 'Завдання 3: Цикл do while - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test6').value = 'Завдання 3: Цикл do while - не зараховано';
    }
  } else if (SearchTermTest7Condition.length > 0 && TextSearch.indexOf(SearchTermTest7Condition) > -1) {
    if ((TextSearch.indexOf(SearchTermTest7Option1) > -1 && TextSearch.indexOf(SearchTermTest7Option2) > -1) || (TextSearch.indexOf(SearchTermTest7Option3) > -1 && TextSearch.indexOf(SearchTermTest7Option4) > -1)) {
      swal("Вірно!", "", "success");
      document.getElementById('test7').value = 'Завдання 1: Зміна тексту в input - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test7').value = 'Завдання 1: Зміна тексту в input - не зараховано';
    }
  } else if (SearchTermTest8Condition.length > 0 && TextSearch.indexOf(SearchTermTest8Condition) > -1) {
    if ((TextSearch.indexOf(SearchTermTest7Option1) > -1 && TextSearch.indexOf(SearchTermTest8Option1) > -1) || (TextSearch.indexOf(SearchTermTest7Option3) > -1 && TextSearch.indexOf(SearchTermTest8Option2) > -1)) {
      swal("Вірно!", "", "success");
      document.getElementById('test8').value = 'Завдання 2: Зміна кольору в input - зараховано';
      i++;
    } else {
      swal("Не вірно!", "", "error");
      document.getElementById('test8').value = 'Завдання 2: Зміна кольору в input - не зараховано';
    }
  } else {
    alert('Введений довільний код, або коду немає');
  }
}

function grade1() {
  var i = 0;
  var select1 = document.getElementById("test1");
  var select2 = document.getElementById("test2");
  var select3 = document.getElementById("test3");
  var answer1 = select1.value;
  var answer2 = select2.value;
  var answer3 = select3.value;

  if (answer1 == "Завдання 1: Корінь з допомогою Math - зараховано") {
    i++;
  }
  if (answer2 == "Завдання 2: Квадрат числа з допомогою Math - зараховано") {
    i++;
  }
  if (answer3 == "Завдання 3: Число в степені числа з допомогою Math - зараховано") {
    i++;
  }
  
  document.getElementById("gradeBtn1").value = `Оцінка: ${i}/3`;
  }

function grade2() {
    var i = 0;
    var select1 = document.getElementById("test4");
    var select2 = document.getElementById("test5");
    var select3 = document.getElementById("test6");
    var answer1 = select1.value;
    var answer2 = select2.value;
    var answer3 = select3.value;
  
    if (answer1 == "Завдання 1: Цикл for - зараховано") {
      i++;
    }
    if (answer2 == "Завдання 2: Цикл while - зараховано") {
      i++;
    }
    if (answer3 == "Завдання 3: Цикл do while - зараховано") {
      i++;
    }
    
    document.getElementById("gradeBtn2").value = `Оцінка: ${i}/3`;
  }

function grade3() {
    var i = 0;
    var select1 = document.getElementById("test7");
    var select2 = document.getElementById("test8");
    var answer1 = select1.value;
    var answer2 = select2.value;

    if (answer1 == "Завдання 1: Зміна тексту в input - зараховано") {
      i++;
    }
    if (answer2 == "Завдання 2: Зміна кольору в input - зараховано") {
      i++;
    }
    
    document.getElementById("gradeBtn3").value = `Оцінка: ${i}/2`;
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

