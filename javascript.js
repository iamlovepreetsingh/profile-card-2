let showBtn = document.querySelector('.show-btn'),
    showBtnIcon = document.querySelector('.show-btn-icon'),
    achievements = document.querySelector('.achievements'),
    personalInfo = document.querySelector('.personal-info');


showBtn.addEventListener('click', (e) =>{
    if(showBtn.classList.contains('show-btn-active')){
        showBtn.classList.remove('show-btn-active');
        personalInfo.classList.remove('personal-info-active');
        achievements.classList.remove('achievements-active');
        showBtnIcon.classList.remove('fa-minus');
        showBtnIcon.classList.add('fa-plus');
    }else{
        showBtn.classList.add('show-btn-active');
        personalInfo.classList.add('personal-info-active');
        achievements.classList.add('achievements-active');
        showBtnIcon.classList.add('fa-minus');
        showBtnIcon.classList.remove('fa-plus');
    }
})
