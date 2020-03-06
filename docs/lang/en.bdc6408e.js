const e=new Date("2022-01-01"),t=new Date;let n=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth()+1;12===a&&(a=0,n+=1);let l=`${n}Y`;0!==a&&(l=`${l} ${a}M`),document.getElementById("experiences").setAttribute("data-total-duration",l);
//# sourceMappingURL=en.bdc6408e.js.map
