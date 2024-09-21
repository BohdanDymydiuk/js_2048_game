!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=new(function(){var t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.cells=t,this.initialCells=t.map(function(t){return e(t)}),this.isGameStarted=!1,this.score=0}return t=[{key:"moveLeft",value:function(){var t=this,r=this.cells.map(function(t){return e(t)});if(!0===this.isGameStarted){var n=0;this.cells.forEach(function(e){for(var r,i,a,s=0;s<e.length-1;s++)e[s]&&e[s]===e[s+1]&&(r=[e[s]*=2,0],e[s]=r[0],e[s+1]=r[1],t.score+=e[s],n+=1);for(var o=1;o<e.length;o++)for(var l=o;l>0;l--){if(0===e[l-1]){i=[e[l],e[l-1]],e[l-1]=i[0],e[l]=i[1];continue}if(e[l-1]===e[l]&&n<2){a=[e[l-1]*=2,0],e[l-1]=a[0],e[l]=a[1],t.score+=e[l-1],n+=1;break}}}),!0===this.isBoardChanged(this.cells,r)&&this.addStartingValue()}}},{key:"moveRight",value:function(){var t=this,r=this.cells.map(function(t){return e(t)});if(!0===this.isGameStarted){var n=0;this.cells.forEach(function(e){for(var r,i,a,s=e.length-1;s>0;s--)e[s]&&e[s]===e[s-1]&&(r=[e[s]*=2,0],e[s]=r[0],e[s-1]=r[1],t.score+=e[s],n+=1);for(var o=e.length-2;o>=0;o--)for(var l=o;l<e.length-1;l++){if(0===e[l+1]){i=[e[l],e[l+1]],e[l+1]=i[0],e[l]=i[1];continue}if(e[l+1]===e[l]&&n<2){a=[e[l+1]*=2,0],e[l+1]=a[0],e[l]=a[1],t.score+=e[l+1],n+=1;break}}}),!0===this.isBoardChanged(this.cells,r)&&this.addStartingValue()}}},{key:"moveUp",value:function(){var t=this,r=this.cells,n=r.map(function(t){return e(t)});if(!0===this.isGameStarted){for(var i=this,a=function(e){var n=0;r.forEach(function(i,a){a<r.length-1&&r[a][e]&&r[a+1][e]===r[a][e]&&(r[a][e]*=2,r[a+1][e]=0,t.score+=r[a][e],n+=1)});for(var a=1;a<r.length;a++)for(var s=a;s>0;s--){if(0===r[s-1][e]){r[s-1][e]=r[s][e],r[s][e]=0;continue}if(r[s-1][e]===r[s][e]&&n<1){r[s-1][e]*=2,r[s][e]=0,n+=1,i.score+=r[s-1][e];break}}},s=0;s<r[0].length;s++)a(s);!0===this.isBoardChanged(r,n)&&this.addStartingValue()}}},{key:"moveDown",value:function(){var t=this.cells,r=t.map(function(t){return e(t)});if(!0===this.isGameStarted){for(var n=0;n<t[0].length;n++){for(var i=0,a=t.length-1;a>=0;a--)a>0&&t[a][n]&&t[a-1][n]===t[a][n]&&(t[a][n]*=2,t[a-1][n]=0,this.score+=t[a][n],i+=1);for(var s=t.length-2;s>=0;s--)for(var o=s;o<t.length-1;o++){if(0===t[o+1][n]){t[o+1][n]=t[o][n],t[o][n]=0;continue}if(t[o+1][n]===t[o][n]&&i<1){t[o+1][n]*=2,t[o][n]=0,this.score+=t[o+1][n],i+=1;break}}}!0===this.isBoardChanged(t,r)&&this.addStartingValue()}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.cells}},{key:"getStatus",value:function(){var t=this,e=this.cells.some(function(e,r){return e.some(function(n,i){return r<t.cells.length-1&&(n===e[i+1]||n===t.cells[r+1][i])||r===t.cells.length-1&&n===e[i+1]})});return this.cells.some(function(t){return t.some(function(t){return 2048===t})})?"win":this.cells.every(function(t){return t.every(function(t){return 0!==t})})&&!1===e?"lose":!1===this.isGameStarted?"idle":!0===this.isGameStarted?"playing":void 0}},{key:"start",value:function(){var t=this.getStartRow(),e=this.getStartCell(t),r=this.getStartRow(),n=this.getStartCell(r);if(t===r&&e===n)return this.start();var i=this.getStartValue(),a=this.getStartValue();this.cells[t][e]=i,this.cells[r][n]=a,this.isGameStarted=!0}},{key:"restart",value:function(){var t=this;this.cells.forEach(function(e,r){return e.forEach(function(n,i){e[i]=t.initialCells[r][i]})}),this.isGameStarted=!1,this.score=0}},{key:"addStartingValue",value:function(){var t=this.getStartRow(),e=this.getStartCell(t),r=this.getStartValue();this.cells[t][e]=r}},{key:"getStartRow",value:function(){var t=Math.floor(Math.random()*this.cells.length);return this.cells[t].every(function(t){return 0!==t})?this.getStartRow():t}},{key:"getStartCell",value:function(t){var e=Math.floor(Math.random()*this.cells[t].length);return 0===this.cells[t][e]?e:this.getStartCell(t)}},{key:"getStartValue",value:function(){return .9>=Math.random()?2:4}},{key:"isBoardChanged",value:function(t,e){return t.some(function(t,r){return t.some(function(t,n){return t!==e[r][n]})})}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(r.prototype,t),r}()),n=document.querySelectorAll(".field-cell"),i=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),s=document.querySelector(".message-start"),o=document.querySelector(".game-score"),l=document.querySelector(".button");function c(){r.cells.forEach(function(t,e){return t.forEach(function(r,i){var a=i+e*t.length;0===r?n[a].innerHTML="":n[a].innerHTML=r,""===n[a].innerHTML?n[a].className="field-cell":n[a].className="field-cell field-cell--".concat(n[a].innerHTML)})}),o.innerHTML=r.score}l.addEventListener("click",function(){l.classList.toggle("start"),l.classList.toggle("restart");var t=l.classList[1];l.classList.contains("restart")&&(r.start(),s.classList.add("hidden")),l.classList.contains("start")&&(r.restart(),i.classList.add("hidden"),a.classList.add("hidden"),s.classList.remove("hidden")),l.innerHTML=t[0].toUpperCase()+t.slice(1),c()}),window.addEventListener("keydown",function(t){if(l.classList.contains("restart")){switch(t.key){case"ArrowLeft":r.moveLeft();break;case"ArrowUp":r.moveUp();break;case"ArrowRight":r.moveRight();break;case"ArrowDown":r.moveDown()}c(),"win"===r.getStatus()&&i.classList.remove("hidden"),"lose"===r.getStatus()&&a.classList.remove("hidden")}})}();
//# sourceMappingURL=index.995fb46d.js.map
