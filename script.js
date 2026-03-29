const tools = [
  {name:"Quizlet", explanation:"כלי פשוט ומהיר שמאפשר ליצור כרטיסיות ושאלות מתוך טקסט לצורך תרגול ולמידה עצמית.", uses:["יצירת כרטיסיות מושגים","הכנה למבחן","חזרה על חומר"], audience:"מתאים למורים, תלמידים וללמידה עצמית", advantages:["קל מאוד לשימוש","מהיר","מתאים לתלמידים"], toolUrl:"https://quizlet.com", videoUrl:"https://www.youtube.com/embed/ds38vdgDDaA?si=cb5WSN9Z6hOgcYf9", presentationEmbedUrl:"https://www.canva.com/design/DAHFOwh82HM/Y69Uy831OroHVh4y2pJ4kg/view?embed", presentationOpenUrl:"https://www.canva.com/design/DAHFOwh82HM/Y69Uy831OroHVh4y2pJ4kg/view?utm_content=DAHFOwh82HM&utm_campaign=designshare&utm_medium=embeds&utm_source=link", presentationDownloadUrl:"Mastering_Quizlet.pdf.pdf"},
  {name:"MagicSchool AI", explanation:"כלי ייעודי למורים שמייצר שאלות, קוויזים ודפי עבודה מתוך תוכן.", uses:["יצירת שאלות הבנה","יצירת שאלות פתוחות","דפי עבודה"], audience:"מתאים למורים ולמפתחי למידה", advantages:["מותאם פדגוגית","שליטה ברמת קושי","מגוון סוגי שאלות"], toolUrl:"https://www.magicschool.ai", videoUrl:"https://www.youtube.com/embed/qTUnKrGelTs?si=-N8oI6nijnpa3KmB", presentationEmbedUrl:"https://www.canva.com/design/DAHFRYLpFHI/6eRIP05jCN8N0UXJ4BYIig/view?embed", presentationOpenUrl:"https://www.canva.com/design/DAHFRYLpFHI/6eRIP05jCN8N0UXJ4BYIig/view?utm_content=DAHFRYLpFHI&utm_campaign=designshare&utm_medium=embeds&utm_source=link", presentationDownloadUrl:"MagicSchool.pdf.pdf"},
  {name:"QuestionWell", explanation:"כלי שמייצר שאלות אמריקאיות מתוך טקסט ומאפשר ייצוא ישיר ל־Google Forms.", uses:["בניית מבחן","יצירת שאלון","בדיקת ידע"], audience:"מתאים למורים ולאנשי למידה המתמקדים בהערכה", advantages:["חוסך זמן","ממוקד הערכה","ייצוא מהיר"], toolUrl:"https://questionwell.org", videoUrl:"https://www.youtube.com/embed/jqe8yaa75t4?si=R6F0LwO75Y1uMgIj", presentationEmbedUrl:"https://www.canva.com/design/DAHFO6n_Hn0/AchABeDnlKjvkk8F84SfgQ/view?embed", presentationOpenUrl:"https://www.canva.com/design/DAHFO6n_Hn0/AchABeDnlKjvkk8F84SfgQ/view?utm_content=DAHFO6n_Hn0&utm_campaign=designshare&utm_medium=embeds&utm_source=link", presentationDownloadUrl:"QuestionWell.pdf.pdf"},
  {name:"Edpuzzle", explanation:"כלי שמאפשר להוסיף שאלות בתוך סרטונים וליצור למידה אינטראקטיבית.", uses:["עצירת סרטון ושאלה","בדיקת הבנה","פעילות כיתתית"], audience:"מתאים למורים המלמדים באמצעות וידאו ולכיתה", advantages:["חווייתי","מגביר מעורבות","מתאים לכיתה"], toolUrl:"https://edpuzzle.com", videoUrl:"https://www.youtube.com/embed/-0rBkWEZl9M?si=fq_QtcNrMF4_uBvF", presentationEmbedUrl:"https://www.canva.com/design/DAHFOxXDdyk/d6tBWqWy2yeJx0y31bZKlg/view?embed", presentationOpenUrl:"https://www.canva.com/design/DAHFOxXDdyk/d6tBWqWy2yeJx0y31bZKlg/view?utm_content=DAHFOxXDdyk&utm_campaign=designshare&utm_medium=embeds&utm_source=link", presentationDownloadUrl:"Edpuzzle.pdf.pdf"},
  {name:"Edcafe.ai", explanation:"כלי מבוסס בינה מלאכותית שמאפשר ליצור במהירות קוויזים, שאלונים ופעילויות למידה אינטראקטיביות מתוך טקסט, קבצים או נושא מוגדר.", uses:["יצירת שאלות אמריקאיות מתוך טקסט","בניית קוויז אינטראקטיבי לתלמידים"], audience:"מתאים למורים, מדריכים ומפתחי למידה", advantages:["מהיר וקל לשימוש","מתאים ליצירת פעילויות אינטראקטיביות","תומך במגוון סוגי שאלות"], toolUrl:"https://www.edcafe.ai", videoUrl:"https://www.youtube.com/embed/xbvYoX-KyGA?si=S44xqsKL2CkIKtBb", presentationEmbedUrl:"https://www.canva.com/design/DAHFPrYQlBA/dSupAuo2crSAXVJQKlnNHg/view?embed", presentationOpenUrl:"https://www.canva.com/design/DAHFPrYQlBA/dSupAuo2crSAXVJQKlnNHg/view?utm_content=DAHFPrYQlBA&utm_campaign=designshare&utm_medium=embeds&utm_source=link", presentationDownloadUrl:"Edcafe.pdf.pdf"}
];

const container = document.getElementById("toolSections");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const frame = document.getElementById("presentationFrame");
const fallback = document.getElementById("fallback");
const openExternal = document.getElementById("openExternal");
const downloadPresentation = document.getElementById("downloadPresentation");
const closeModalBtn = document.getElementById("closeModal");
const backToPage = document.getElementById("backToPage");

function renderTools(){
  container.innerHTML = tools.map((tool,index)=>`
    <article class="tool-panel" id="tool-${index+1}">
      <div class="tool-content">
        <h3>${tool.name}</h3>
        <p>${tool.explanation}</p>
        <div class="panel-box">
          <div class="panel-title">שימושים</div>
          <ul class="list">${tool.uses.map(i=>`<li>${i}</li>`).join("")}</ul>
        </div>
        <div class="panel-box">
          <div class="panel-title">למי מתאים</div>
          <p>${tool.audience}</p>
        </div>
        <div class="panel-box">
          <div class="panel-title">יתרונות</div>
          <ul class="list">${tool.advantages.map(i=>`<li>${i}</li>`).join("")}</ul>
        </div>
        <div class="actions">
          <button class="btn btn-pink" data-presentation="${index}">מצגת הסברה</button>
          <a class="btn btn-soft" href="${tool.toolUrl}" target="_blank" rel="noopener">מעבר לכלי</a>
        </div>
      </div>
      <div class="tool-video">
        <iframe src="${tool.videoUrl}" title="סרטון הדרכה - ${tool.name}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-presentation]").forEach(btn=>{
    btn.addEventListener("click", ()=>openPresentation(Number(btn.dataset.presentation)));
  });
}

function openPresentation(index){
  const tool = tools[index];
  modalTitle.textContent = `מצגת הסברה – ${tool.name}`;
  frame.src = tool.presentationEmbedUrl;
  openExternal.href = tool.presentationOpenUrl;
  fallback.classList.add("hidden");
  if(tool.presentationDownloadUrl){
    downloadPresentation.href = tool.presentationDownloadUrl;
    downloadPresentation.setAttribute("download", "");
  } else {
    downloadPresentation.href = "#";
    downloadPresentation.removeAttribute("download");
  }
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  frame.src = "";
  document.body.style.overflow = "";
}

frame.addEventListener("error", ()=>fallback.classList.remove("hidden"));
closeModalBtn.addEventListener("click", closeModal);
backToPage.addEventListener("click", closeModal);
modal.addEventListener("click", e=>{ if(e.target.dataset.close==="true") closeModal(); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape" && modal.classList.contains("show")) closeModal(); });

renderTools();
