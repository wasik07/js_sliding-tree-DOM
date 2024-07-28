document.querySelector(".tree").querySelectorAll("ul").forEach(function(e){var n=document.createElement("span");n.innerHTML="".concat(e.previousSibling.textContent),e.previousSibling.replaceWith(n),e.previousSibling.onclick=function(t){t.target===n&&(e.hidden=!e.hidden)}});
//# sourceMappingURL=index.1cdbfe6b.js.map
