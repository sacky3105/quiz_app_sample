const quiz = [
  {
    question: '橋下徹が卒業した大学は次のうちどれ？',
    answers: [
      '慶應義塾大学',
      '同志社大学',
      '早稲田大学',
      '関西学院大学'
    ],
    correct: '早稲田大学'
  }, {
    question: '消費税を導入した内閣総理大臣は、次のどの人ですか？',
    answers: [
      '中曽根康弘',
      '宮澤喜一',
      '小渕恵三',
      '竹下登'
    ],
    correct: '竹下登'
  }, {
    question: '次の大学のうち、東京六大学に該当しないのはどの大学ですか？',
    answers: [
      '東京大学',
      '慶應義塾大学',
      '法政大学',
      '青山学院大学'
    ],
    correct: '青山学院大学'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
  // 問題数がまだあれば実行
    setupQuiz();
  } else {
  // 問題数がなければこちらを実行
  window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
