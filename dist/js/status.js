"use strict";function extendStatusPage(){Utils.loadCSS("css/status.css"),Utils.loadScript("js/status-rte.js");const a=document.getElementById("status-table"),b=document.querySelector("form[action=\"/status\"]");_extendStatusTable(b,a,["7%","12%","9%","24%","9%","9%","12%","9%","9%"],["7%","12%","17%","20%","auto","auto","12%","9%","9%"],[])}function extendRejudgePage(){Utils.loadCSS("css/status.css");const a=document.getElementById("rejudge-table"),b=a.parentNode;Config.getProblems(c=>{_extendStatusTable(b,a,["8%","8%","8%","8%","7%","14%","8%","7%","14%","9%","9%"],["auto","auto","auto","8%","7%","auto","8%","7%","auto","auto","auto"],c)})}function _createRadioForm(a,b){Config.load(Constants.CONFIG_SHOW_STATUS_PID,c=>{const d=Utils.createRadioElement("\uBB38\uC81C \uBC88\uD638",()=>{Config.save(Constants.CONFIG_SHOW_STATUS_PID,!0,b)},!!c),e=Utils.createRadioElement("\uBB38\uC81C \uC81C\uBAA9",()=>{Config.save(Constants.CONFIG_SHOW_STATUS_PID,!1,b)},!c);a.insertBefore(e,a.firstChild),a.insertBefore(d,a.firstChild),b&&"function"==typeof b&&setTimeout(()=>b(!!c),10)})}function _extendStatusTable(a,b,c,d,f){const g=b.querySelectorAll("th"),h=b.querySelectorAll("a[href^=\"/problem/\"]");g.forEach((a,b)=>{a.style.width=c[b]});const i=getMyUsername();b.querySelectorAll("a[href^=\"/user/\"]").forEach(a=>{i==a.innerText&&a.closest("tr").setAttribute("class","result-mine")}),h.forEach(a=>{a.getAttribute("data-original-id")==null&&a.setAttribute("data-original-id",a.innerText),a.getAttribute("data-original-title")==null&&a.setAttribute("data-original-title",f[a.innerText])}),_createRadioForm(a,function(a){h.forEach(b=>{if(a)b.innerText=b.getAttribute("data-original-id");else{const a=b.getAttribute("data-original-title");b.innerText=20<a.length?a.substr(0,17)+"\u2026":a}}),g.forEach((a,b)=>{a.style.width=d[b]})})}