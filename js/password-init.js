(()=>{function e(){document.querySelectorAll(".password-block").forEach(t=>{let n=t.querySelector(".password-input"),a=t.querySelector(".password-submit"),r=t.querySelector(".password-content");if(n&&a&&!n.hasAttribute("data-initialized")){let e=a.getAttribute("data-password");a.addEventListener("click",function(){n.value===e?(r.style.display="block",t.querySelector(".password-input-container").style.display="none"):(alert("密码错误"),n.value="")}),n.addEventListener("keypress",function(e){"Enter"===e.key&&a.click()}),n.setAttribute("data-initialized","true")}})}document.addEventListener("pjax:complete",e),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()})();