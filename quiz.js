const questions = [
  {
    text: "Видишь, как Вася из розлива без каски бежит в зону склада. Что делаешь?",
    answers: [
      { label: "A", text: "Молча прохожу мимо. У каждого свои грабли и склад уже другая территория." },
      { label: "B", text: "Говорю: «Вася, каска — не аксессуар, а защита головы, пока она ещё думает!»" },
      { label: "C", text: "Останавливаю и объясняю, что на складе и коробка может прилететь — без предупреждения." },
      { label: "D", text: "Собираю команду, обсуждаем, почему такое происходит, и как сделать, чтобы беготни без СИЗ не было вообще." }
    ]
  },
  {
    text: "Как ты относишься к обсуждению опасных ситуаций на смене?",
    answers: [
      { label: "A", text: "Обхожу стороной. Меньше знаешь — крепче спишь." },
      { label: "B", text: "Если спросят — расскажу. Сам не лезу." },
      { label: "C", text: "Всегда делюсь: чем раньше обсудим, тем меньше проблем." },
      { label: "D", text: "Стараюсь организовать обсуждение сам — чтобы каждый высказался, и чтобы решения были от команды." }
    ]
  },
  {
    text: "Задание в зоне с рисками. Как действуешь?",
    answers: [
      { label: "A", text: "Быстро сделал — и свободен. Кто не рискует, тот не мужик." },
      { label: "B", text: "Спрошу у мастера, вдруг всё не так страшно." },
      { label: "C", text: "Пройду по чек-листу SAFE, осмотрюсь, доложу, сделаю." },
      { label: "D", text: "Соберу коллег, вместе пройдёмся, оценим риски, найдём безопасный способ. И сварим, и живы будем." }
    ]
  },
  {
    text: "На участке проводится SBO — поведенческий аудит безопасности. Твои действия?",
    answers: [
      { label: "A", text: "Прячусь за ЦКТ — пусть без меня наблюдают." },
      { label: "B", text: "Веду себя идеально, киваю, улыбаюсь — как будто всегда так работаю." },
      { label: "C", text: "Объясняю, как у нас тут принято, показываю порядок и порядок показываю." },
      { label: "D", text: "Обсуждаю с коллегами, что можно улучшить. Безопасность — это не спектакль, это ежедневная привычка." }
    ]
  },
  {
    text: "Новенький Петя не понял, зачем беруши. Ты:",
    answers: [
      { label: "A", text: "Молча жду, когда сам догадается." },
      { label: "B", text: "Подмигиваю: \"Петя, у нас тут не концерт — уши береги.\"" },
      { label: "C", text: "Провожу инструктаж, показываю, как правильно вставлять." },
      { label: "D", text: "Объясняю по-человечески, как слух теряют. Даю пример и вовлекаю в правила с первого дня." }
    ]
  },
  {
    text: "На утреннем совещании сразу перешли к производственным темам, хотя у тебя есть что обсудить по безопасности. Что делаешь?",
    answers: [
      { label: "A", text: "Молчу. Видимо, безопасность сегодня «не по расписанию»." },
      { label: "B", text: "Думаю, что позже подойду отдельно — не хочу перебивать." },
      { label: "C", text: "Поднимаю руку и вежливо говорю, что есть важный вопрос по безопасности." },
      { label: "D", text: "Предлагаю начать с безопасности как с приоритета — ведь от неё зависит и производство." }
    ]
  },
  {
    text: "Принимаешь смену, а на одной из машин не работает система безопасности. Что делаешь?",
    answers: [
      { label: "A", text: "Думаю: «Раз предыдущая смена работала — и мне сойдёт»." },
      { label: "B", text: "Отмечаю про себя, что надо бы сказать мастеру… позже." },
      { label: "C", text: "Сообщаю мастеру сразу, отказываюсь запускать машину до устранения." },
      { label: "D", text: "Останавливаю процесс, собираю команду, обсуждаем, как такое допустили, и фиксируем всё официально." }
    ]
  },
  {
    text: "Видишь, что твой коллега — водитель автопогрузчика — буквально борется со сном за рулём в ночную смену. Что делаешь?",
    answers: [
      { label: "A", text: "Думаю: «Ну, если доехал до паллеты — значит, держится»." },
      { label: "B", text: "Шепчу: «Держись, брат, осталось пару часов…»" },
      { label: "C", text: "Подхожу, предлагаю передохнуть, сообщаю мастеру." },
      { label: "D", text: "Немедленно останавливаю работу в зоне, зову ответственного, предлагаю решение: отдых, замена, пересмотр графика." }
    ]
  },
  {
    text: "Пришла «молния» по безопасности — серьёзный инцидент на другом заводе. Что ты делаешь?",
    answers: [
      { label: "A", text: "Пролистал и закрыл. Это ведь не у нас случилось." },
      { label: "B", text: "Прочитал заголовок, думаю: «Главное — у нас всё спокойно»." },
      { label: "C", text: "Внимательно изучаю, сравниваю с нашим участком, прикидываю риски." },
      { label: "D", text: "Обсуждаю с коллегами: «А у нас такое возможно?», инициирую меры — пусть чужие ошибки нас учат." }
    ]
  },
  {
    text: "Сработала пожарная сигнализация. Все понимают, что, скорее всего, ложная тревога, и никто не спешит эвакуироваться. Что ты делаешь?",
    answers: [
      { label: "A", text: "Остаюсь — зачем суетиться, если и так всё понятно." },
      { label: "B", text: "Сижу и жду команды сверху: «Если надо — скажут»." },
      { label: "C", text: "Встаю, выхожу, зову тех, кто рядом: «Алгоритм есть — выполняем»." },
      { label: "D", text: "Начинаю организованную эвакуацию участка, напоминаю, что тренировки и правила — не для галочки." }
    ]
  }
];

// Результаты
const results = {
  A: {
    title: "Ты — Осторожный прохожий",
    text: `Ты следуешь правилам: в каске, без лишних рисков. Но безопасность — не только за себя, а и за других.<br><br>
Замечаешь нарушение — спокойно скажи.<br><br>
Не проходи мимо: одна фраза может предотвратить беду.<br><br>
Поддерживай порядок вместе, а не жди, пока начальство разберётся.`,
    video: "Assets/Осторожный прохожий.mp4"
  },
  B: {
    title: "Ты — Тихий пример",
    text: `Ты всё делаешь по правилам, но молчишь — и потому тебя не слышат.<br><br>
Замечаешь риск — озвучь: «Перчатки нужны» или «Давайте безопаснее».<br><br>
Маленькие подсказки формируют культуру.<br><br>
Безопасность любит голос, а не тишину.<br><br>
Лучше сказать лишний раз, чем потом разбираться с травмами.`,
    video: "Assets/Тихий пример.mp4"
  },
  C: {
    title: "Ты — Порядочный контролёр",
    text: `У тебя идеальный порядок: каски, бумаги, контроль. Но порядок — это не страх, а уверенность.<br><br>
Будь не только строгим, но и вовлекающим: подставь плечо, а не только «стреляй взглядом».<br><br>
Спроси команду: «Что бы вы улучшили?» — дай людям голос.<br><br>
Строй доверие: пусть к тебе идут с вопросами без дрожи.<br><br>
Порядок важен, но порядок с людьми — ещё важнее.`,
    video: "Assets/Порядочный контролёр.mp4"
  },
  D: {
    title: "Ты — Настоящий лидер по безопасности",
    text: `Команда в порядке, риски под контролем — респект. Но рост — бесконечен:<br><br>
Делись лучшими практиками не только у себя, но и с соседними сменами.<br><br>
Подтягивай новичков — наставничество сегодня = поддержка завтра.<br><br>
Помни: безопасность — дорога без финиша; каждый день можно сделать чуть лучше.`,
    video: "Assets/Настоящий лидер по безопасности.mp4"
  }
};

const scoreMap = { A: 1, B: 2, C: 3, D: 4 };

let quizStarted = false; // состояние: стартовый экран/тест

let current = 0;
let answers = [];

function renderQuestion() {
  const q = questions[current];
  let html = `<div class="question">${q.text}</div>
  <div class="answers">`;
  q.answers.forEach((a, i) => {
    html += `<button class="answer-btn" onclick="selectAnswer('${a.label}', this)">${a.text}</button>`;
  });
  html += `</div>
  <div class="question-actions">
    <button class="next-btn" id="prevBtn" onclick="prevQuestion()"${current === 0 ? ' disabled' : ''}>Назад</button>
    ${
      current < questions.length - 1
        ? `<button class="next-btn" id="nextBtn" disabled onclick="nextQuestion()">Далее</button>`
        : `<button class="next-btn" id="nextBtn" disabled onclick="showResult()">Узнать результат</button>`
    }
  </div>`;
  document.getElementById('quiz-container').innerHTML = html;
  // Восстанавливаем выбранный ответ, если он был
  if (answers[current]) {
    const btns = document.querySelectorAll('.answer-btn');
    btns["ABCD".indexOf(answers[current])].classList.add('selected');
    document.getElementById('nextBtn').disabled = false;
  }
}

function selectAnswer(label, btn) {
  answers[current] = label;
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  current++;
  renderQuestion();
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function showResult() {
  // Подсчёт среднего балла
  let totalScore = 0;
  answers.forEach(l => { totalScore += scoreMap[l]; });
  const avg = totalScore / answers.length;
  const rounded = Math.round(avg);

  let resultLabel;
  if (rounded === 4) {
    resultLabel = 'D';
  } else if (rounded === 3) {
    resultLabel = 'C';
  } else if (rounded === 2) {
    resultLabel = 'B';
  } else {
    resultLabel = 'A';
  }
  const result = results[resultLabel];

  document.getElementById('quiz-container').innerHTML = `
    <div class="result-title">${result.title}</div>
    <div class="result-text">${result.text}</div>
    <div class="result-actions">
      <a href="Assets/Кодекс лидера по безопасности.pdf" class="download-btn" download>Скачать Кодекс Лидера Безопасности</a>
      <button class="next-btn" onclick="showRecommendation('${result.video}')">Рекомендации Аркадия</button>
    </div>
    <div style="margin-top:1.2em;color:#888;font-size:1em;">Ваш средний балл: <b>${avg.toFixed(2)}</b></div>
    <button class="next-btn restart-btn" onclick="restartQuiz()">Пройти тест ещё раз</button>
  `;
}

function showRecommendation(videoSrc) {
  const modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn" onclick="this.parentElement.parentElement.remove()">×</button>
      <video src="${videoSrc}" controls autoplay></video>
    </div>
  `;
  document.body.appendChild(modal);
}

function restartQuiz() {
  quizStarted = false;
  renderIntro();
}

function renderIntro() {
  document.getElementById('quiz-container').innerHTML = `
    <div class="intro-block" style="text-align:center; padding:3em 1em;">
      <h2 style="color:#012169;">Добро пожаловать в тест!</h2>
      <p style="margin:1.2em 0 2.2em;font-size:1.15em;">Перед прохождением посмотрите короткую инструкцию.</p>
      <button class="next-btn" style="margin-bottom:2em;" onclick="showInstruction()">Смотреть инструкцию</button>
      <br>
      <button class="download-btn" onclick="startQuiz()">Начать тест</button>
    </div>
  `;
}

function showInstruction() {
  // Модальное окно с видео
  const modal = document.createElement('div');
  modal.className = 'modal-bg';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn" onclick="this.parentElement.parentElement.remove()">×</button>
      <video src="Assets/Test Intro.mp4" controls autoplay></video>
      <div style="text-align:center;">
        <button class="next-btn" onclick="modalClose(this)">Начать тест</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function modalClose(btn) {
  btn.closest('.modal-bg').remove();
  startQuiz();
}

function startQuiz() {
  quizStarted = true;
  current = 0;
  answers = [];
  renderQuestion();
}

// Запуск
window.onload = () => renderIntro();