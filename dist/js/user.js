"use strict";function extendUserPage(){function a(a,b,c){a.forEach(a=>{c?a.setAttribute(b,!0):a.removeAttribute(b)})}Utils.loadCSS("css/user.css");const b=document.querySelectorAll(".panel-body"),c=document.createElement("div"),d=document.createElement("input");d.setAttribute("type","checkbox"),d.setAttribute("id","show-pid"),d.addEventListener("change",c=>{Config.save("show-pid",c.target.checked),a(b,"show-id",c.target.checked)});const e=document.createElement("input");e.setAttribute("type","checkbox"),d.setAttribute("id","show-pname"),e.addEventListener("change",c=>{Config.save("show-pname",c.target.checked),a(b,"show-name",c.target.checked)});const f=document.createElement("label");f.setAttribute("for","show-pid"),f.innerText="\uBB38\uC81C \uBC88\uD638";const g=document.createElement("label");g.setAttribute("for","show-pname"),g.innerText="\uBB38\uC81C \uC81C\uBAA9",c.setAttribute("class","problem-toggles"),c.appendChild(d),c.appendChild(f),c.appendChild(e),c.appendChild(g);const h=document.querySelector(".col-md-9");h.insertBefore(c,h.firstChild),h.insertBefore(createVsForm(function(){const{pathname:a}=window.location;return a.replace("/user/","")||""}()),c),Config.getProblems(c=>{b.forEach(a=>{const b=document.createElement("div"),d=a.querySelectorAll("a[href]"),e=document.createElement("div");d.forEach((f,g)=>{const h=f.innerText,i=c[h]||"*New Problem",j=f.cloneNode();j.innerHTML="<span class=\"pid\">"+h+"</span> <span class=\"pname\">"+i+"</span>",b.appendChild(j);const k=g+1===d.length,l=100;if(g==l||k){const c=k?g<l?0:1:0;if(b.setAttribute("class","pgroup pg-"+c),e.appendChild(b.cloneNode(!0)),b.innerHTML="",k&&(setTimeout(()=>{a.innerHTML=e.innerHTML},10),g>=l)){const b=document.createElement("div");b.setAttribute("class","panel-footer");const c=document.createElement("a");c.setAttribute("class","btn-display-all"),c.innerText="\uBAA8\uB450 \uBCF4\uAE30",c.addEventListener("click",b=>{b.preventDefault(),a.querySelectorAll(".pgroup").forEach(a=>{a.style.display="inline"}),b.target.remove()}),b.appendChild(c),a.parentElement.appendChild(b)}}})}),Config.load("show-pid",c=>{c=!(null!==c&&c!==void 0)||c,d.checked=c,a(b,"show-id",c)}),Config.load("show-pname",c=>{e.checked=c,a(b,"show-name",c)})})}