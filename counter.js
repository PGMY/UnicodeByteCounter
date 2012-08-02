// Apple iphone 申請字の Application Description　4000byteとやらの制限を数えたい　->　多分Unicodeみたい
// Unicode のバイト数を数える。
function CountLength(str) {
    var r = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ( c == 0x0D ){
            if ( str.charCodeAt(i+1) == 0x0A) {
                i++;
                r += 2;
            } else {
                r += 2;
            }
        } else if ( c == 0x0A ){               // ここ。　改行コードは２バイト　0x0Dが入ってきてないみたいなんだけどなんでだろう？　Formに追加時に0x0Aに置き換わるのかな？
            r += 2;
        } else if ( c >= 0x0 && c < 0x7f) {
            r += 1;
        } else if ( c >= 0x0080 && c < 0x07ff ) {
            r += 2;
        } else if ( c >= 0x0800 && c < 0xffff ){
            r += 3;
        } else {                    // ここははいってきてないみたい。いらない予定だけどとりあえず入れてある。　これ以上の大きさになることってあるのかな？
            r += 4;
        }
    }
    return r;
}

function countPreview() {
        var count = CountLength(document.getElementById('countText').value);
        var str ="";
        if ( parseInt(count) > 4000 ) str +='<font color="red">';
        str += count + "  byte なう。";
        if ( parseInt(count) > 4000 ) str +='</font>';
        document.getElementById('result').innerHTML = str;
      }


function test(){
    //alert(document.getElementById("countText").value);
//    var count = CountLength(document.form1.countText.value);
//    var str = 　count + "," + cr + "," + lf + "," + crlf;
//    alert(str);
    alert( CountLength(document.form1.countText.value) + "byte" );
    //document.getElementById("result").innerHTML = "test";
}