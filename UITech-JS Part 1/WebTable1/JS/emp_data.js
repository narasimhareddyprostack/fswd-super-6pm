let employees =[{"id":1,"name":"Florie","sal":"$8.24"},
{"id":2,"name":"Paolina","sal":"$9.84"},
{"id":3,"name":"Merrill","sal":"$7.00"},
{"id":4,"name":"Rosy","sal":"$2.15"},
{"id":5,"name":"Janis","sal":"$4.35"},
{"id":6,"name":"Marilyn","sal":"$0.93"},
{"id":7,"name":"Moll","sal":"$2.45"},
{"id":8,"name":"Zoe","sal":"$5.72"},
{"id":9,"name":"Gil","sal":"$9.92"},
{"id":10,"name":"Zara","sal":"$8.11"},
{"id":11,"name":"Neel","sal":"$9.35"},
{"id":12,"name":"Nelly","sal":"$8.43"},
{"id":13,"name":"Aldus","sal":"$0.64"},
{"id":14,"name":"Hasheem","sal":"$9.83"},
{"id":15,"name":"Allyce","sal":"$2.05"},
{"id":16,"name":"Wadsworth","sal":"$6.83"},
{"id":17,"name":"Tobin","sal":"$7.23"},
{"id":18,"name":"Cooper","sal":"$6.66"},
{"id":19,"name":"Nilson","sal":"$9.96"},
{"id":20,"name":"Tasha","sal":"$2.95"},
{"id":21,"name":"Tome","sal":"$3.44"},
{"id":22,"name":"Gayle","sal":"$9.84"},
{"id":23,"name":"Yancey","sal":"$3.04"},
{"id":24,"name":"Christopher","sal":"$7.57"},
{"id":25,"name":"Abner","sal":"$7.10"},
{"id":26,"name":"Carlotta","sal":"$1.41"},
{"id":27,"name":"Emmey","sal":"$6.62"},
{"id":28,"name":"Willie","sal":"$4.99"},
{"id":29,"name":"Moina","sal":"$0.02"},
{"id":30,"name":"Eva","sal":"$6.64"},
{"id":31,"name":"Latrena","sal":"$4.72"},
{"id":32,"name":"Kip","sal":"$9.66"},
{"id":33,"name":"Queenie","sal":"$6.47"},
{"id":34,"name":"Timoteo","sal":"$8.77"},
{"id":35,"name":"Karyl","sal":"$7.20"},
{"id":36,"name":"Ninon","sal":"$7.83"},
{"id":37,"name":"Fons","sal":"$9.75"},
{"id":38,"name":"Ewan","sal":"$3.08"},
{"id":39,"name":"Avery","sal":"$6.52"},
{"id":40,"name":"Alli","sal":"$2.93"},
{"id":41,"name":"Blane","sal":"$1.95"},
{"id":42,"name":"Helene","sal":"$6.17"},
{"id":43,"name":"Curr","sal":"$5.60"},
{"id":44,"name":"Melinde","sal":"$4.76"},
{"id":45,"name":"Vere","sal":"$7.80"},
{"id":46,"name":"Sue","sal":"$9.01"},
{"id":47,"name":"Julee","sal":"$7.36"},
{"id":48,"name":"Lindon","sal":"$8.98"},
{"id":49,"name":"Vince","sal":"$6.49"},
{"id":50,"name":"Desi","sal":"$6.06"}]

function add_Data() {
  let rows = "";
  for (emp of employees) {
    rows =
      rows +
      ` <tr>
             <td>${emp.id}</td>
             <td>${emp.name}</td>
             <td>${emp.sal}</td>
        </tr>`;
  }
  document.getElementById("rajni").innerHTML = rows;
}
