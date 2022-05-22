function lesson1Test1() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести корінь числа\n' + 
        '    var a = 5;\n' + 
        '    var result;\n\n' +
        '    result = ...\n' +  
        '</script>'
        )
 }

 function lesson1Test1Answer() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести корінь числа\n' + 
        '    var a = 5;\n' + 
        '    var result;\n\n' + 
        '    result = Math.sqrt(a);\n' + 
        '    alert(`Sqrt = ${result}`);\n\n' + 
        '</script>'
        )
 }

 function lesson1Test2() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести квадрат числа\n' + 
        '    var a = 5;\n' + 
        '    var result;\n\n' +
        '    result = ...\n' +  
        '</script>'
        )
 }

 function lesson1Test2Answer() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести квадрат числа\n' + 
        '    var a = 5;\n' + 
        '    var result;\n\n' + 
        '    result = Math.pow(a, 2);\n' + 
        '    alert(`Pow2 = ${result}`);\n\n' + 
        '</script>'
        )
 }
 
 function lesson1Test3() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести b в степені a\n' + 
        '    var a = 5;\n' + 
        '    var b = 2;\n' + 
        '    var result;\n\n' +
        '    result = ...\n' +  
        '</script>'
        )
 }

 function lesson1Test3Answer() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести b в степені a\n' + 
        '    var a = 5;\n' + 
        '    var b = 2;\n' + 
        '    var result;\n\n' + 
        '    result = Math.pow(b, a);\n' + 
        '    alert(`PowBA = ${result}`);\n' + 
        '</script>'
        )
 }

 function lesson2Test1() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою цикла for\n' + 
        '    for (...) {\n' +
        '       alert(i);\n' + 
        '    }\n\n' + 
        '</script>'
        )
 }

 function lesson2Test1Answer() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою цикла for\n' + 
        '    for (var i = 1; i < 4; i++) {\n' + 
        '        alert(i);\n' + 
        '    }\n\n' + 
        '</script>'
        )
 }

 function lesson2Test2() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою циклa while\n' + 
        '    var i = 0;\n' + 
        '    while (...) {\n' +
        '        ...\n' + 
        '        alert(i);\n' + 
        '    }\n\n' + 
        '</script>'
        )
 }

 function lesson2Test2Answer() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою циклa while\n' + 
        '    var i = 0;\n' + 
        '    while (i < 3) {\n' + 
        '        i++;\n' + 
        '        alert(i);\n' + 
        '    }\n\n' + 
        '</script>'
        )
 }

 function lesson2Test3() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою циклa do while\n' +
        '    var i = 0;\n' +  
        '    do {\n' +
        '        ...\n' + 
        '        alert(i);\n' + 
        '    } while (...);\n' + 
        '</script>'
        )
 }
 
 function lesson2Test3Answer() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою циклa do while\n' + 
        '    var i = 0;\n' + 
        '    do {\n' + 
        '        i++;\n' + 
        '        alert(i);\n' + 
        '    } while (i < 3);\n' + 
        '</script>'
        )
 }

 function lesson3Test1() {
    editor.setValue(
        '<!--Змінити текст в inupt з допомогою id натисканням на кнопку-->\n' +
        '<button onclick="buttonClick()">Натисни на мене</button>\n' + 
        '<input type="text" id="inputBlock" value="Hello">\n' + 
        '<script>\n' + 
        'function buttonClick() {\n' +
        '    var input = ...\n' + 
        '    input. ...\n' +
        '}\n' + 
        '</script>'
        )
 }

 function lesson3Test1Answer() {
    editor.setValue(
        '<!--Змінити текст в inupt з допомогою id натисканням на кнопку-->\n' +
        '<button onclick="buttonClick()">Натисни на мене</button>\n' + 
        '<input type="text" id="inputBlock" value="Hello">\n' + 
        '<script>\n' + 
        'function buttonClick() {\n' +
        '    var input = document.getElementById("inputBlock");\n' + 
        '    input.value = "New Text";\n' +
        '}\n' + 
        '</script>'
        )
 }

 function lesson3Test2() {
    editor.setValue(
        '<!--Змінити колір тексу в inupt з допомогою id натисканням на кнопку-->\n' +
        '<button onclick="buttonClick()">Натисни на мене</button>\n' + 
        '<input type="text" id="inputBlock" value="Hello">\n' + 
        '<script>\n' + 
        'function buttonClick() {\n' +
        '    var input = ...\n' + 
        '    input. ...\n' +
        '}\n' + 
        '</script>'
        )
 }

 function lesson3Test2Answer() {
    editor.setValue(
        '<!--Змінити колір тексу в inupt з допомогою id натисканням на кнопку-->\n' +
        '<button onclick="buttonClick()">Натисни на мене</button>\n' + 
        '<input type="text" id="inputBlock" value="Hello">\n' + 
        '<script>\n' + 
        'function buttonClick() {\n' +
        '    var input = document.getElementById("inputBlock");\n' + 
        '    input.style.color = "red";\n' +
        '}\n' + 
        '</script>'
        )
 }

 function lesson3() {
    editor.setValue(
        '<!--Змінити текст в inupt з допомогою кнопки-->\n' +
        '<input type="text">\n' + 
        '<input type="button" value="to Textarea" onclick="txtValue()">\n' + 
        '<br><textarea></textarea>\n' + 
        '<script>\n' + 
        'function txtValue(){\n\n' + 
        '}\n' + 
        '</script>'
        )
 }
    
 function lesson3Answer() {
    editor.setValue(
        '<!--Вивести з inupt текст в textarea-->\n' +
        '<input type="text">\n' + 
        '<input type="button" value="to Textarea" onclick="txtValue()">\n' + 
        '<br><textarea></textarea>\n' + 
        '<script>\n' + 
        'function txtValue(){\n' + 
        '   var str = document.getElementsByTagName("input")[0].value;\n' +
        '   textarea = document.getElementsByTagName("textarea")[0], i=0;\n' +
        '   (function() {\n' +
        '       if(i<str.length) {\n' +
        '           textarea.value += str[i]\n' +
        '           i++\n' +
        '           setTimeout(arguments.callee, 100)\n' +
        '       };\n' + 
        '   }())\n' +
        '}\n' + 
        '</script>'
        )
 }
