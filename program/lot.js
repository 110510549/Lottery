var entry = "\n";

function trim(str) {
   while (str.substr(0, str.length) == entry) {
       str = str.substr(0, str.length-1);
   }
   while (str.substr(0, 1) == entry) {
       str = str.substr(1, str.length);
   }
   return str;
}
function doAllot(f) {
   var ary = new Array();
   var lst = trim(f.lst.value);
   var i = 0;
   while (lst.indexOf(entry) > 0) {
       p = lst.indexOf(entry);
       ary[i++] = lst.substr(0, p);
       lst = lst.substr(p + 1, lst.length);
   }
   ary[i] = lst;
   var result = "";
   var len = ary.length - 1;
   var count = Math.min(Math.max(1, f.count.value), ary.length);
   for(i = 0; i < count; i++) {
       var choice = Math.round(Math.random() * len);
       result += (i + 1) + ' ' + ary[choice] + entry;
       ary[choice] = ary[len];
       len--;
   }
   f.count.value = count;
   f.result.value = result;
   return false;
}
function stAll() {
   document.getElementById("result").select();
}