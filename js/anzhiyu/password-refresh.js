(()=>{function e(){document.querySelectorAll(".password-block").forEach(t=>{let n=t.querySelector(".password-input"),r=t.querySelector(".password-submit"),a=t.querySelector(".password-content");if(n&&r&&!n.hasAttribute("data-initialized")){let e=r.getAttribute("data-password");r.addEventListener("click",function(){n.value===e?(a.style.display="block",t.querySelector(".password-input-container").style.display="none"):(alert("密码错误"),n.value="")}),n.addEventListener("keypress",function(e){"Enter"===e.key&&r.click()}),n.setAttribute("data-initialized","true")}})}document.addEventListener("DOMContentLoaded",e),document.addEventListener("pjax:complete",e)})();