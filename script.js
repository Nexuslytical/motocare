// bike data
let bikes = [
  { id: "activa", name: "Honda Activa 6G", type: "scooter", mil: 47, oil: 4000, oilc: 400, air: 12000, airc: 200, drv: 15000, drvc: 1250, brk: 12000, brkc: 380, spk: 10000, spkc: 160, mkm: 0.45 },
    { id: "jupiter", name: "TVS Jupiter 110", type: "scooter", mil: 49, oil: 3500, oilc: 380, air: 10000, airc: 180, drv: 15000, drvc: 1200, brk: 12000, brkc: 350, spk: 10000, spkc: 160, mkm: 0.42 },
  { id: "access", name: "Suzuki Access 125", type: "scooter", mil: 46, oil: 4000, oilc: 420, air: 10000, airc: 220, drv: 15000, drvc: 1350, brk: 12000, brkc: 420, spk: 10000, spkc: 180, mkm: 0.45 },
   { id: "ntorq", name: "TVS Ntorq 125", type: "scooter", mil: 42, oil: 3500, oilc: 480, air: 10000, airc: 240, drv: 15000, drvc: 1450, brk: 10000, brkc: 480, spk: 10000, spkc: 180, mkm: 0.5 },
  { id: "burgman", name: "Suzuki Burgman 125", type: "scooter", mil: 45, oil: 4000, oilc: 440, air: 10000, airc: 230, drv: 15000, drvc: 1400, brk: 12000, brkc: 450, spk: 10000, spkc: 180, mkm: 0.48 },
    { id: "aerox", name: "Yamaha Aerox 155", type: "scooter", mil: 40, oil: 4000, oilc: 650, air: 10000, airc: 300, drv: 20000, drvc: 1800, brk: 10000, brkc: 650, spk: 10000, spkc: 220, mkm: 0.6 },

  { id: "splendor", name: "Hero Splendor+", type: "bike", mil: 62, oil: 3000, oilc: 380, air: 10000, airc: 190, drv: 500, drvc: 120, brk: 12000, brkc: 300, spk: 10000, spkc: 150, mkm: 0.35 },
  { id: "platina", name: "Bajaj Platina 110", type: "bike", mil: 65, oil: 3500, oilc: 400, air: 10000, airc: 190, drv: 500, drvc: 120, brk: 12000, brkc: 320, spk: 10000, spkc: 160, mkm: 0.35 },
   { id: "shine", name: "Honda Shine 125", type: "bike", mil: 55, oil: 4000, oilc: 450, air: 12000, airc: 220, drv: 500, drvc: 130, brk: 12000, brkc: 380, spk: 12000, spkc: 180, mkm: 0.4 },
    { id: "raider", name: "TVS Raider 125", type: "bike", mil: 56, oil: 4000, oilc: 480, air: 10000, airc: 230, drv: 500, drvc: 140, brk: 10000, brkc: 420, spk: 10000, spkc: 180, mkm: 0.42 },
  { id: "xtreme125", name: "Hero Xtreme 125R", type: "bike", mil: 54, oil: 4000, oilc: 520, air: 10000, airc: 240, drv: 500, drvc: 150, brk: 10000, brkc: 450, spk: 10000, spkc: 190, mkm: 0.45 },

  { id: "pulsar150", name: "Bajaj Pulsar 150", type: "bike", mil: 45, oil: 4000, oilc: 550, air: 10000, airc: 240, drv: 500, drvc: 150, brk: 10000, brkc: 400, spk: 10000, spkc: 200, mkm: 0.55 },
  { id: "apache160", name: "TVS Apache RTR 160 4V", type: "bike", mil: 44, oil: 4000, oilc: 750, air: 10000, airc: 260, drv: 500, drvc: 160, brk: 8000, brkc: 450, spk: 10000, spkc: 210, mkm: 0.6 },
    { id: "mt15", name: "Yamaha MT-15 V2", type: "bike", mil: 48, oil: 4000, oilc: 780, air: 10000, airc: 300, drv: 500, drvc: 200, brk: 8000, brkc: 950, spk: 10000, spkc: 240, mkm: 0.65 },
  { id: "r15v4", name: "Yamaha R15 V4", type: "bike", mil: 45, oil: 4000, oilc: 800, air: 10000, airc: 320, drv: 500, drvc: 200, brk: 8000, brkc: 1050, spk: 10000, spkc: 250, mkm: 0.7 },
  { id: "duke200", name: "KTM 200 Duke", type: "bike", mil: 35, oil: 5000, oilc: 1150, air: 10000, airc: 250, drv: 500, drvc: 220, brk: 8000, brkc: 850, spk: 10000, spkc: 260, mkm: 0.85 },
  { id: "pulsarn250", name: "Bajaj Pulsar N250", type: "bike", mil: 36, oil: 5000, oilc: 1100, air: 10000, airc: 280, drv: 500, drvc: 180, brk: 8000, brkc: 550, spk: 10000, spkc: 240, mkm: 0.75 },
    { id: "gixxer250", name: "Suzuki Gixxer SF 250", type: "bike", mil: 36, oil: 5000, oilc: 1150, air: 10000, airc: 350, drv: 500, drvc: 200, brk: 8000, brkc: 1100, spk: 10000, spkc: 235, mkm: 0.8 },

   { id: "classic350", name: "RE Classic 350", type: "bike", mil: 35, oil: 5000, oilc: 1250, air: 10000, airc: 380, drv: 500, drvc: 200, brk: 8000, brkc: 850, spk: 10000, spkc: 280, mkm: 0.9 },
  { id: "cb350", name: "Honda H'ness CB350", type: "bike", mil: 36, oil: 6000, oilc: 1450, air: 12000, airc: 220, drv: 500, drvc: 220, brk: 8000, brkc: 1100, spk: 12000, spkc: 320, mkm: 0.95 },
  { id: "speed400", name: "Triumph Speed 400", type: "bike", mil: 29, oil: 6000, oilc: 1650, air: 6000, airc: 350, drv: 500, drvc: 250, brk: 7000, brkc: 2600, spk: 12000, spkc: 450, mkm: 1.35 },
    { id: "duke390", name: "KTM 390 Duke", type: "bike", mil: 26, oil: 5000, oilc: 1850, air: 7500, airc: 320, drv: 500, drvc: 250, brk: 7000, brkc: 2500, spk: 10000, spkc: 480, mkm: 1.5 },
  { id: "himalayan450", name: "RE Himalayan 450", type: "bike", mil: 28, oil: 5000, oilc: 2400, air: 10000, airc: 450, drv: 500, drvc: 220, brk: 8000, brkc: 3000, spk: 10000, spkc: 450, mkm: 1.6 },
   { id: "rs457", name: "Aprilia RS 457", type: "bike", mil: 25, oil: 6000, oilc: 3050, air: 12000, airc: 1500, drv: 500, drvc: 300, brk: 7000, brkc: 4200, spk: 12000, spkc: 850, mkm: 2.2 }
];


let tips = [
  { cat: 'brakes', title: 'Squeaking sound when braking', fix: 'Brake pads or shoes may be dusty or worn out. Clean drum or check disc pad thickness.' },
  { cat: 'brakes', title: 'Brake lever feels too loose', fix: 'Adjust brake cable nut near rear wheel or check brake fluid level if disc brake.' },
    { cat: 'chain', title: 'Khat-khat noise from rear wheel', fix: 'Chain is loose or dry. Clean with chain cleaner and apply chain lube properly.' },
  { cat: 'chain', title: 'Jerky pickup at low speed', fix: 'Check chain slack (around 20 to 30 mm) and inspect rear sprocket teeth.' },
  { cat: 'engine', title: 'Sudden drop in mileage', fix: 'Dirty air filter, low tyre air or old spark plug can drop mileage quickly.' },
  { cat: 'engine', title: 'Engine heating more than normal', fix: 'Check engine oil level on dipstick and change oil if it looks very dark or burnt.' },
    { cat: 'tyres', title: 'Handle feels heavy on turns', fix: 'Front tyre air pressure is low. Keep around 25-29 PSI front and 32-36 PSI rear.' },
  { cat: 'tyres', title: 'Bike wobbling on straight road', fix: 'Check tyre tread wear, wheel alignment and bent rim or loose axle nut.' }
];


let logs = [
  { dt: "2026-09-12", bk: "Honda Activa 6G", km: 4100, wk: "Engine oil change and washing", ct: 520 },
  { dt: "2026-10-28", bk: "Hero Splendor+", km: 9200, wk: "Oil change, chain tight, brake check", ct: 680 }
];



// filter bikes
function clearseg() {
  document.getElementById("segall").className = "fbtn";
  document.getElementById("segsc").className = "fbtn";
  document.getElementById("segcm").className = "fbtn";
  document.getElementById("segmd").className = "fbtn";
  document.getElementById("segbg").className = "fbtn";
}

function filterbikes(seg) {
  let arr = document.getElementsByClassName("bcard");
  for (let i = 0; i < arr.length; i++) {
    if (seg == "all") {
      arr[i].style.display = "block";
    } else if (arr[i].className.includes(seg)) {
      arr[i].style.display = "block";
    } else {
      arr[i].style.display = "none";
    }
  }
}

document.getElementById("segall").onclick = function() {
  clearseg();
  document.getElementById("segall").className = "fbtn activebtn";
  filterbikes("all");
}

document.getElementById("segsc").onclick = function() {
    clearseg();
    document.getElementById("segsc").className = "fbtn activebtn";
    filterbikes("seg-sc");
}

document.getElementById("segcm").onclick = function() {
  clearseg();
  document.getElementById("segcm").className = "fbtn activebtn";
  filterbikes("seg-cm");
}

document.getElementById("segmd").onclick = function() {
  clearseg();
  document.getElementById("segmd").className = "fbtn activebtn";
  filterbikes("seg-md");
}

document.getElementById("segbg").onclick = function() {
    clearseg();
    document.getElementById("segbg").className = "fbtn activebtn";
    filterbikes("seg-bg");
}



// service part
let chkbtn = document.getElementById("chkbtn");

chkbtn.onclick = function() {
  let sel = document.getElementById("bname").value;
    let km = Number(document.getElementById("odo").value);
  let last = Number(document.getElementById("lastodo").value);
  let err = document.getElementById("serr");
  let cards = document.getElementById("scards");
  let tb = document.getElementById("stbody");
  let bill = document.getElementById("totbill")

  err.innerText = "";

  if (document.getElementById("odo").value == "" || km < 0 || km > 500000) {
    err.innerText = "Please enter a valid current odometer reading.";
    return;
  }

  if (document.getElementById("lastodo").value == "") {
      last = 0;
  }

  if (last < 0 || last > km) {
    err.innerText = "Last service km cannot be negative or more than current odometer.";
    return;
  }

  let b = null;
  for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].id == sel) {
        b = bikes[i];
      }
  }


  let run = km - last;
  let ostat = "";
  let ocls = "";
  if (run >= b.oil) {
    ostat = "DUE NOW";
    ocls = "duebox";
  } else if (b.oil - run <= 500) {
    ostat = "UPCOMING";
    ocls = "soonbox";
  } else {
    ostat = "SAFE";
    ocls = "safebox";
  }


  let nextair = b.air;
  while (nextair < km) {
    nextair = nextair + b.air;
  }
  let aleft = nextair - km;
  let astat = "";
  let acls = "";
    if (km >= b.air && aleft == 0) {
      astat = "DUE NOW";
      acls = "duebox";
    } else if (aleft <= 800 && km > 0) {
      astat = "UPCOMING";
      acls = "soonbox";
    } else {
      astat = "SAFE";
      acls = "safebox";
    }


  let dname = "Chain Clean & Lube";
  let dlim = 150;
  if (b.type == "scooter") {
    dname = "CVT Belt & Rollers";
    dlim = 1000;
  }

  let nextdrv = b.drv;
  while (nextdrv < km) {
    nextdrv = nextdrv + b.drv;
  }
  let dleft = nextdrv - km;
  let dstat = "";
  let dcls = "";
  if (km >= b.drv && dleft == 0) {
    dstat = "DUE NOW";
    dcls = "duebox";
  } else if (dleft <= dlim && km > 0) {
    dstat = "UPCOMING";
    dcls = "soonbox";
  } else {
    dstat = "SAFE";
    dcls = "safebox";
  }


  let nextbrk = b.brk;
  while (nextbrk < km) {
      nextbrk = nextbrk + b.brk;
  }
  let bleft = nextbrk - km;
  let bstat = "";
  let bcls = "";
  if (km >= b.brk && bleft == 0) {
    bstat = "DUE NOW";
    bcls = "duebox";
  } else if (bleft <= 700 && km > 0) {
    bstat = "UPCOMING";
    bcls = "soonbox";
  } else {
    bstat = "SAFE";
    bcls = "safebox";
  }


  let nextspk = b.spk;
  while (nextspk < km) {
    nextspk = nextspk + b.spk;
  }
  let sleft = nextspk - km;
  let sstat = "";
  let scls = "";
  if (km >= b.spk && sleft == 0) {
      sstat = "DUE NOW";
      scls = "duebox";
  } else if (sleft <= 800 && km > 0) {
      sstat = "UPCOMING";
      scls = "soonbox";
  } else {
      sstat = "SAFE";
      scls = "safebox";
  }


  let chtml = "";
  chtml = chtml + '<div class="scard ' + ocls + '"><h4>Engine Oil</h4><p>Status: <b>' + ostat + '</b></p><p>Driven since oil change: ' + run + ' km</p></div>';
  chtml = chtml + '<div class="scard ' + acls + '"><h4>Air Filter</h4><p>Status: <b>' + astat + '</b></p><p>Next check in: ' + aleft + ' km</p></div>';
  chtml = chtml + '<div class="scard ' + dcls + '"><h4>' + dname + '</h4><p>Status: <b>' + dstat + '</b></p><p>Next check in: ' + dleft + ' km</p></div>';
  chtml = chtml + '<div class="scard ' + bcls + '"><h4>Brake Pads / Shoes</h4><p>Status: <b>' + bstat + '</b></p><p>Next check in: ' + bleft + ' km</p></div>';
  chtml = chtml + '<div class="scard ' + scls + '"><h4>Spark Plug</h4><p>Status: <b>' + sstat + '</b></p><p>Next check in: ' + sleft + ' km</p></div>';
  cards.innerHTML = chtml;


  let thtml = "";
  let duecost = 0;

  thtml = thtml + "<tr><td>Engine Oil</td><td>" + b.oil + "</td><td>" + ostat + "</td><td>Rs " + b.oilc + "</td></tr>";
  if (ostat == "DUE NOW" || ostat == "UPCOMING") { duecost = duecost + b.oilc; }

  thtml = thtml + "<tr><td>Air Filter</td><td>" + b.air + "</td><td>" + astat + "</td><td>Rs " + b.airc + "</td></tr>";
  if (astat == "DUE NOW" || astat == "UPCOMING") { duecost = duecost + b.airc; }

  thtml = thtml + "<tr><td>" + dname + "</td><td>" + b.drv + "</td><td>" + dstat + "</td><td>Rs " + b.drvc + "</td></tr>";
  if (dstat == "DUE NOW" || dstat == "UPCOMING") { duecost = duecost + b.drvc; }

  thtml = thtml + "<tr><td>Brake Pads / Shoes</td><td>" + b.brk + "</td><td>" + bstat + "</td><td>Rs " + b.brkc + "</td></tr>";
  if (bstat == "DUE NOW" || bstat == "UPCOMING") { duecost = duecost + b.brkc; }

  thtml = thtml + "<tr><td>Spark Plug</td><td>" + b.spk + "</td><td>" + sstat + "</td><td>Rs " + b.spkc + "</td></tr>";
  if (sstat == "DUE NOW" || sstat == "UPCOMING") { duecost = duecost + b.spkc; }

  tb.innerHTML = thtml;
  bill.innerText = "Estimated Cost for Due / Upcoming Work (" + b.name + "): Rs " + duecost;
};



// petrol calc
let fbike = document.getElementById("fbike");
fbike.addEventListener("change", function() {
    let v = fbike.value;
    if (v == "custom") {
      return;
    }

  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].id == v) {
      document.getElementById("mil").value = bikes[i].mil;
    }
  }
});


let fbtn = document.getElementById("fbtn");
fbtn.addEventListener("click", function() {
  let d = Number(document.getElementById("dist").value);
  let dy = Number(document.getElementById("days").value);
  let m = Number(document.getElementById("mil").value);
  let p = Number(document.getElementById("price").value);
  let err = document.getElementById("ferr");
  let out = document.getElementById("fout");

  err.innerText = ""

  if (d <= 0 || isNaN(d)) {
    err.innerText = "Enter valid daily distance.";
    return;
  }
  if (dy <= 0 || dy > 31 || isNaN(dy)) {
    err.innerText = "Riding days should be between 1 and 31.";
    return;
  }
  if (m < 5 || isNaN(m)) {
    err.innerText = "Enter valid mileage (at least 5 km/l).";
    return;
  }
  if (p <= 0 || isNaN(p)) {
    err.innerText = "Enter valid petrol price.";
    return;
  }

  let mkm = 0.50;
  let sb = fbike.value;
  for (let i = 0; i < bikes.length; i++) {
      if (bikes[i].id == sb) {
        mkm = bikes[i].mkm;
      }
  }

  let totkm = d * dy;
  let lit = totkm / m;
  let fcost = lit * p;
  let mcost = totkm * mkm;
  let total = fcost + mcost;
  let yr = total * 12;

  let cab = totkm * 12;
  let save = cab - total;

  let ans = '<div class="fres">';
  ans = ans + "<p><b>Monthly Distance:</b> " + totkm + " km</p>";
  ans = ans + "<p><b>Petrol Needed:</b> " + lit.toFixed(1) + " litres</p>";
  ans = ans + "<p><b>Monthly Fuel Cost:</b> Rs " + Math.round(fcost) + "</p>";
  ans = ans + "<p><b>Approx Maintenance Reserve:</b> Rs " + Math.round(mcost) + "</p>";
  ans = ans + "<p><b>Total Monthly Cost:</b> Rs " + Math.round(total) + "</p>";
  ans = ans + "<p><b>Estimated Yearly Cost:</b> Rs " + Math.round(yr) + "</p>";
  if (save > 0) {
      ans = ans + "<p><b>Approx Savings vs Auto/Cab (Rs 12/km):</b> Rs " + Math.round(save) + " / month</p>";
  }
  ans = ans + "</div>";

  out.innerHTML = ans;
});



// diy + form
let cur = "all";

function showdiy() {
  let box = document.getElementById("diylist");
  let q = document.getElementById("srch").value.toLowerCase().trim();
  let html = "";
  let cnt = 0;

  for (let i = 0; i < tips.length; i++) {
    let t = tips[i];
    let ok1 = false;

    if (cur == "all") {
      ok1 = true;
    } else if (t.cat == cur) {
      ok1 = true;
    }

    let txt = (t.title + " " + t.fix).toLowerCase();
    let ok2 = false;
    if (q == "") {
        ok2 = true;
    } else if (txt.includes(q)) {
        ok2 = true;
    }

    if (ok1 && ok2) {
      cnt = cnt + 1;
      html = html + '<article class="dcard">';
      html = html + '<span class="dcat">' + t.cat.toUpperCase() + '</span>';
      html = html + '<h4>' + t.title + '</h4>';
      html = html + '<p>' + t.fix + '</p>';
      html = html + '</article>';
    }
  }

  if (cnt == 0) {
    html = "<p>No matching DIY tip found. Try another word.</p>";
  }

  box.innerHTML = html;
}

function clearact() {
  document.getElementById("allbtn").className = "fbtn";
  document.getElementById("brkbtn").className = "fbtn";
  document.getElementById("chnbtn").className = "fbtn";
  document.getElementById("engbtn").className = "fbtn";
  document.getElementById("tyrbtn").className = "fbtn";
}

document.getElementById("allbtn").onclick = function() {
  cur = "all";
  clearact();
  document.getElementById("allbtn").className = "fbtn activebtn";
  showdiy();
}

document.getElementById("brkbtn").onclick = function() {
    cur = "brakes";
    clearact();
    document.getElementById("brkbtn").className = "fbtn activebtn";
    showdiy();
}

document.getElementById("chnbtn").onclick = function() {
  cur = "chain";
  clearact();
  document.getElementById("chnbtn").className = "fbtn activebtn";
  showdiy();
}

document.getElementById("engbtn").onclick = function() {
  cur = "engine";
  clearact();
  document.getElementById("engbtn").className = "fbtn activebtn";
  showdiy();
}

document.getElementById("tyrbtn").onclick = function() {
    cur = "tyres";
    clearact();
    document.getElementById("tyrbtn").className = "fbtn activebtn";
    showdiy();
}

document.getElementById("srch").addEventListener("input", function() {
  showdiy();
});

showdiy();


function showlogs() {
  let tb = document.getElementById("logbody");
  let sum = document.getElementById("logsum");
  let html = "";
  let tot = 0;

  if (logs.length == 0) {
      tb.innerHTML = '<tr><td colspan="6">No service records yet.</td></tr>';
      sum.innerText = "Total Records: 0 | Total Spent: Rs 0";
      return;
  }

  for (let i = 0; i < logs.length; i++) {
    let r = logs[i];
    tot = tot + r.ct;

    html = html + "<tr>";
    html = html + "<td>" + r.dt + "</td>";
    html = html + "<td>" + r.bk + "</td>";
    html = html + "<td>" + r.km + " km</td>";
    html = html + "<td>" + r.wk + "</td>";
    html = html + "<td>Rs " + r.ct + "</td>";
    html = html + '<td><button type="button" class="delbtn" onclick="dellog(' + i + ')">Delete</button></td>';
    html = html + "</tr>";
  }

  tb.innerHTML = html;
  sum.innerText = "Total Records: " + logs.length + " | Total Spent: Rs " + tot;
}

function dellog(idx) {
  let temp = [];
  for (let i = 0; i < logs.length; i++) {
    if (i != idx) {
      temp.push(logs[i]);
    }
  }
  logs = temp;
  showlogs();
}


let lf = document.getElementById("logform");
lf.addEventListener("submit", function(e) {
  e.preventDefault();

  let dt = document.getElementById("ldate").value;
  let bk = document.getElementById("lbike").value;
    let km = Number(document.getElementById("lkm").value);
  let wk = document.getElementById("lwork").value.trim();
  let ct = Number(document.getElementById("lcost").value);
  let msg = document.getElementById("lmsg");

  msg.className = "errtxt";
  msg.innerText = "";

  if (dt == "") {
    msg.innerText = "Please select a service date.";
    return;
  }
  if (document.getElementById("lkm").value == "" || km <= 0) {
    msg.innerText = "Please enter valid odometer reading.";
    return;
  }
  if (wk.length < 3) {
    msg.innerText = "Write at least 3 characters for work done.";
    return;
  }
  if (document.getElementById("lcost").value == "" || ct < 0) {
    msg.innerText = "Cost cannot be empty or negative.";
    return;
  }

  let obj = {
    dt: dt,
    bk: bk,
    km: km,
    wk: wk,
    ct: ct
  };

  logs.push(obj);
  showlogs();

  msg.className = "oktxt";
  msg.innerText = "Record added to table!";
  lf.reset();
});

showlogs();
