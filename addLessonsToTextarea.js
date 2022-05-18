function lesson1Test1() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести корінь числа\n' + 
        '    var a = 5;\n' + 
        '    var result;\n' + 
        '</script>'
        )
 }

 function lesson1Test2() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести квадрат числа\n' + 
        '    var a = 5;\n' + 
        '    var result;\n' + 
        '</script>'
        )
 }
 
 function lesson1Test3() {
    editor.setValue(
        '<script>\n' + 
        '//За допомогою Math вивести b в степені a\n' + 
        '    var a = 5;\n' + 
        '    var b = 2;\n' + 
        '    var result;\n' + 
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

 function lesson2() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою циклів for, while, do while\n' + 
        '    for ( ; ; ) {\n\n' + 
        '    }\n\n' + 
        '    while ( ) {\n\n' + 
        '    }\n\n' + 
        '    do {\n\n' + 
        '    } while ( );\n' + 
        '</script>'
        )
 }
 
 function lesson2Answer() {
    editor.setValue(
        '<script>\n' + 
        '//Вивести числа від 1 до 3 за допомогою циклів for, while, do while\n' + 
        '    for (var i = 0; i < 3; i++) {\n' + 
        '        alert(`for ${i+1}`);\n' + 
        '    }\n\n' + 
        '    var i1 = 0;\n' + 
        '    while (i1 < 3) {\n' + 
        '        i1++;\n' + 
        '        alert(`while ${i1}`);\n' + 
        '    }\n\n' + 
        '    var i2 = 0;\n' + 
        '    do {\n' + 
        '        i2++;\n' + 
        '        alert(`doWhile ${i2}`);\n' + 
        '    } while (i2 < 3);\n' + 
        '</script>'
        )
 }

 function lesson3() {
    editor.setValue(
        '<!--Вивести з inupt текст в textarea-->\n' +
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
