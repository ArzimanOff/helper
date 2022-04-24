let inputIn = document.querySelector('.input_box');
let chek_btn = document.querySelector('.check_btn');
let next_btn = document.querySelector('.next_btn');
let true_answer = document.querySelector('.correct_answer');


chek_btn.onclick = function(){
    let answer = +inputIn.value;
    let correct = +true_answer.value;
    if (answer == correct){
        let right_or_wrong = document.querySelector('#right_or_wrong_box');
        right_or_wrong.style.display = 'block';

        inputIn.style.border = '1px solid #14c05c';
        inputIn.style.color = '#14c05c';

        document.querySelector(".text_support").innerHTML="Верно, ты молодец!";
        document.querySelector(".text_support").style.color = '#14c05c';

        inputIn.readOnly = true;
    }
    else{
        let right_or_wrong = document.querySelector('#right_or_wrong_box');
        right_or_wrong.style.display = 'block';
        

        document.querySelector(".text_support").innerHTML="Неверно, может постараешься снова?";
        document.querySelector(".text_support").style.color = 'red';

        let input_box = document.querySelector('.input_box');
        input_box.style.border = '1px solid #FF6565';
        input_box.style.color = 'red';
    }

}


