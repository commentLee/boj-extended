(function(){window.addEventListener("DOMContentLoaded",function(){Config.load("theme",function(a){applyTheme(null,a)})})})();function extendTheme(){const a=document.createElement("li"),b=document.createElement("a");b.innerText="\uD14C\uB9C8 \uBD88\uB7EC\uC624\uB294 \uC911...",a.appendChild(b),b.addEventListener("click",function(a){a.preventDefault();const c=document.body.parentNode.getAttribute("theme"),d="dark"==c?"light":"dark";Config.save("theme",d,function(a){applyTheme(b,a)})}),addElementToBar(a),Config.load("theme",function(a){applyTheme(b,a)})}function applyTheme(a,b){document.body.parentNode.setAttribute("theme",b),a&&(a.innerText="dark"==b?"\uBC1D\uC740 \uD14C\uB9C8":"\uC5B4\uB450\uC6B4 \uD14C\uB9C8")}