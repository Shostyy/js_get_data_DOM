var t=document.getElementsByClassName("population"),e=document.getElementsByClassName("total-population"),n=document.getElementsByClassName("average-population"),a=0,l=!0,o=!1,r=void 0;try{for(var u,i=t[Symbol.iterator]();!(l=(u=i.next()).done);l=!0){var m=u.value;a+=+m.outerText.replaceAll(",","")}}catch(t){o=!0,r=t}finally{try{l||null==i.return||i.return()}finally{if(o)throw r}}var s=a/t.length;e[0].textContent=a.toLocaleString("en-US"),n[0].textContent=s.toLocaleString("en-US");//# sourceMappingURL=index.ff7af606.js.map

//# sourceMappingURL=index.ff7af606.js.map
