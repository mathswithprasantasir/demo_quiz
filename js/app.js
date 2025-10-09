// script.js

const $ = sel => document.querySelector(sel);
let state = {
  lang: "en",
  mode: "practice",
  current: 0,
  answers: [],
  startTime: null
};

function fmtTime(s) {
  return String(Math.floor(s/60)).padStart(2,"0") + ":" + String(s%60).padStart(2,"0");
}

function init() {
  state.current = 0;
  state.answers = questions.map(() => ({selected:null, correct:null, marked:false}));
  $("#qTotal").innerText = questions.length;
  renderQuestion();
  renderNav();
  state.startTime = Date.now();
  setInterval(()=> {
    $("#timeSpent").innerText = "Time: " + fmtTime(Math.floor((Date.now()-state.startTime)/1000));
  },1000);
}

function renderQuestion() {
  const item = questions[state.current];
  const q = item[state.lang];
  $("#qIndex").innerText = state.current + 1;
  $("#questionBox").innerHTML = `<div class="small">${item.id}.</div><div>${q.q}</div>`;
  const list = $("#optionsList");
  list.innerHTML = "";
  q.opts.forEach((o,idx)=>{
    const div = document.createElement("div");
    div.className = "option";
    div.dataset.idx = idx;
    div.innerHTML = o;
    div.addEventListener("click", ()=> selectOption(idx));
    list.appendChild(div);
  });
  updateUI();
  if(window.MathJax && window.MathJax.typesetPromise) MathJax.typesetPromise();
}

function selectOption(idx) {
  const ans = questions[state.current][state.lang].ans;
  state.answers[state.current].selected = idx;
  state.answers[state.current].correct = (idx === ans);
  state.answers[state.current].time = Math.floor((Date.now()-state.startTime)/1000);
  showRationale();
  updateUI();
  updateScore();
}

function updateUI() {
  document.querySelectorAll(".option").forEach((el,i)=>{
    el.classList.remove("selected","correct","wrong");
    const cur = state.answers[state.current];
    if(cur.selected === i) el.classList.add("selected");
    if(cur.correct === true && i === questions[state.current][state.lang].ans) el.classList.add("correct");
    if(cur.correct === false && i === cur.selected) el.classList.add("wrong");
  });
}

function showRationale() {
  const box = $("#rationaleBox");
  const q = questions[state.current][state.lang];
  const ansText = q.opts[q.ans];
  const cur = state.answers[state.current];
  if(cur.correct === true) {
    box.style.display = "block";
    box.innerHTML = `<b>Correct!</b> You chose the right answer.`;
  } else if(cur.correct === false) {
    box.style.display = "block";
    box.innerHTML = `<b>Correct answer:</b> ${ansText}<hr>${q.rationale}`;
  } else {
    box.style.display = "none";
  }
}

function updateScore() {
  const correct = state.answers.filter(a=>a.correct===true).length;
  const wrong = state.answers.filter(a=>a.correct===false).length;
  const attempted = state.answers.filter(a=>a.selected!==null).length;
  const score = correct * 1 - (state.mode === "exam" ? wrong * 0.33 : 0);
  $("#scoreNum").innerText = score.toFixed(2);
  $("#correctCount").innerText = correct;
  $("#incorrectCount").innerText = wrong;
  $("#accuracy").innerText = attempted ? Math.round((correct/attempted)*100) + "%" : "0%";
}

function prevQ(){ if(state.current>0){ state.current--; renderQuestion(); renderNav(); } }
function nextQ(){ if(state.current < questions.length-1){ state.current++; renderQuestion(); renderNav(); } }
function clearSel(){ state.answers[state.current] = {selected:null, correct:null, marked:false}; renderQuestion(); updateScore(); }
function markNext(){ state.answers[state.current].marked = true; nextQ(); }

function renderNav() {
  const grid = $("#navGrid");
  grid.innerHTML = "";
  questions.forEach((_,i)=>{
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.innerText = i+1;
    if(i === state.current) btn.classList.add("active");
    const a = state.answers[i];
    if(a.correct === true) { btn.style.background = "#e6ffef"; }
    if(a.correct === false) { btn.style.background = "#fff2f2"; }
    btn.addEventListener("click", ()=>{ state.current = i; renderQuestion(); renderNav(); });
    grid.appendChild(btn);
  });
}

// Controls wiring
$("#nextBtn").addEventListener("click", ()=> nextQ());
$("#prevBtn").addEventListener("click", ()=> prevQ());
$("#clearBtn").addEventListener("click", ()=> clearSel());
$("#markBtn").addEventListener("click", ()=> markNext());
$("#restartBtn").addEventListener("click", ()=> { if(confirm("Restart quiz?")) init(); });
$("#modeSelect").addEventListener("change", e => { state.mode = e.target.value; updateScore(); });

document.querySelectorAll('input[name="lang"]').forEach(r => r.addEventListener("change", e => {
  state.lang = e.target.value;
  renderQuestion();
  showRationale();
}));

window.onload = init;