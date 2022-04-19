
const sliderItem = document.querySelectorAll('.slider_item');
const sliderCarusel = document.querySelector('.slider_carusel');
let ind = 0;

const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.nav_link');

const sliderTitle = document.querySelectorAll('.slider_title');

const secondBox = document.querySelector('.second_box');
const secondItemInvert = document.querySelector('.second_item_invert');

const dinamic = document.querySelector('.dinamic_box');

const itemsStuffBox = document.querySelector('.items_stuff_box');

const dots = document.querySelector('.dots');

const buttonWeUse = document.querySelector('.button_we_use');
const fakeLink = document.querySelector('.fake_link');
const weUseLink = document.querySelector('.we_use_link');

const buttonAbout = document.querySelector('.button_about');
const buttonGet = document.querySelector('.button_get');

const footerBox = document.querySelector('.footer_box');

const cursor = document.querySelector('.cursor');
let txt = 'solution_';
let i = 0;
let inner = document.getElementById('demo');


setInterval(run, 8000);

function changeImg(){
    if(ind > sliderItem.length -1){
        ind = 0;
    }else if(ind < 0){
        ind = sliderItem.length -1;
    };
    sliderCarusel.style.transform = `translateX(${-ind * 100}%)`;
    
    let caruselActive = document.querySelector('.slider_carusel');
    caruselActive.classList.toggle('active');
    let caruselActiveActive = document.querySelector('.slider_carusel.active');
    if(caruselActive){
        for(let itemActive of sliderItem){
            itemActive.classList.add('active')
            
        }
        if(caruselActiveActive){
            for(let itemActive of sliderItem){
                itemActive.classList.remove('active')
            }
        }
    }
}

// function run(){
//    ind++;
//     changeImg();
// };

nav.addEventListener('mouseover', function(event){
    if(event.target.closest('.nav_link')){
        let linkApart = (event.target.closest('.nav_link'));
        linkApart = linkApart.childNodes;
        linkApart = linkApart[1];
        linkApart.style.display = "block";
        
    }
});
nav.addEventListener('mouseout', function(event){
    if(event.target.closest('.nav_link')){
        let linkApart = (event.target.closest('.nav_link'));
        linkApart = linkApart.childNodes;
        linkApart = linkApart[1];
        linkApart.style.display = "none";
        
    }
});


secondBox.addEventListener('mouseover', function(event){
    if(event.target.closest('.second_item')){
        let apartItem = event.target.closest('.second_item');
        apartItem = apartItem.childNodes;
        let imgBox = apartItem[1];
        imgBox.children[0].style.transform = `scale(${1.2})`;
        let readMore = apartItem[5];
        readMore.children[1].style.transform = `translateX(${300}%)`;
        readMore.children[0].style.transform = `translateX(${80}%)`;
        let imgBoxSecond = apartItem[3].children[0].children[0];
        imgBoxSecond.style.transform = `translateY(${-20}px)`;
       
    }
})

secondBox.addEventListener('mouseout', function(event){
    if(event.target.closest('.second_item')){
        let apartItem = event.target.closest('.second_item');
        apartItem = apartItem.childNodes;
        let imgBox = apartItem[1];
        imgBox.children[0].style.transform = `scale(${1})`;
        let readMore = apartItem[5];
        readMore.children[1].style.transform = `translateX(${0}%)`;
        readMore.children[0].style.transform = `translateX(${-100}%)`;
        let imgBoxSecond = apartItem[3].children[0].children[0];
        imgBoxSecond.style.transform = `translateY(${0}px)`;
       
    }
})

secondItemInvert.addEventListener('mouseover', function(){
    let child = secondItemInvert.children;
    child[0].children[0].children[0].style.transform = `translateY(${-20}px)`;
    child[1].children[0].style.transform = `translateX(${80}%)`;
    child[1].children[1].style.transform = `translateX(${300}%)`;
    child[2].children[0].style.transform = `scale(${1.2})`;
    
})

secondItemInvert.addEventListener('mouseout', function(){
    let child = secondItemInvert.children;
    child[0].children[0].children[0].style.transform = `translateY(${0}px)`;
    child[1].children[0].style.transform = `translateX(${-100}%)`;
    child[1].children[1].style.transform = `translateX(${0}%)`;
    child[2].children[0].style.transform = `scale(${1})`;
    
})


dinamic.addEventListener('mouseover', function(event){
    if(event.target.closest('.dinamic_item')){
        let dinamicApart = event.target.closest('.dinamic_item');
        if(dinamicApart == dinamic.children[1]){
            showImg5 ();
        }
        if(dinamicApart == dinamic.children[2]){
            showImg3 ();
        }
        if(dinamicApart == dinamic.children[3]){
            showImg4 ();
        }
        if(dinamicApart == dinamic.children[4]){
            showImg2 ();
        }
        
    };
    
});


itemsStuffBox.addEventListener('mouseover', function(event){
    if(event.target.closest('.item_stuff')){
        let itemStuffApart = event.target.closest('.item_stuff');
        itemStuffApart.children[0].children[0].style.transform = `scale(${1.2})`;
        itemStuffApart.children[3].style.transform = `translateY(${0}%)`;
    };
});

itemsStuffBox.addEventListener('mouseout', function(event){
    if(event.target.closest('.item_stuff')){
        let itemStuffApart = event.target.closest('.item_stuff');
        itemStuffApart.children[0].children[0].style.transform = `scale(${1})`;
        itemStuffApart.children[3].style.transform = `translateY(${100}%)`;
    };
});

dots.children[0].classList.add('active');
dots.parentElement.classList.remove('active');
dots.addEventListener('click', function(event){
    
    if(event.target.closest('.dot')){
        let dotApart = event.target.closest('.dot');
        let sliderBoxReplyes = document.querySelector('.slider_box_replyes');
        let dotsActive = dots.children;
        if(dotApart == dotsActive[0]){
            sliderBoxReplyes.children[0].style.display = "block";
            sliderBoxReplyes.children[1].style.display = "none";
            sliderBoxReplyes.children[2].style.display = "none";
            dots.children[0].classList.add('active');
            dots.children[1].classList.remove('active');
            dots.children[2].classList.remove('active');
            dots.parentElement.classList.add('active');
            setInterval(deleteClass, 4000);
        }
        if(dotApart == dotsActive[1]){
            sliderBoxReplyes.children[0].style.display = "none";
            sliderBoxReplyes.children[1].style.display = "block";
            sliderBoxReplyes.children[2].style.display = "none";
            dots.children[0].classList.remove('active');
            dots.children[1].classList.add('active');
            dots.children[2].classList.remove('active');
            dots.parentElement.classList.add('active');
            setInterval(deleteClass, 4000);
        }
        if(dotApart == dotsActive[2]){
            sliderBoxReplyes.children[0].style.display = "none";
            sliderBoxReplyes.children[1].style.display = "none";
            sliderBoxReplyes.children[2].style.display = "block";
            dots.children[0].classList.remove('active');
            dots.children[1].classList.remove('active');
            dots.children[2].classList.add('active');
            dots.parentElement.classList.add('active');
            setInterval(deleteClass, 1000);
        }
    }
});

buttonWeUse.addEventListener('mouseover', function(){
    fakeLink.style.transform = `translateY(${-23}px)`;
    weUseLink.style.transform = `translateY(${-23}px)`;
});

buttonWeUse.addEventListener('mouseout', function(){
    fakeLink.style.transform = `translateY(${0}px)`;
    weUseLink.style.transform = `translateY(${0}px)`;
});
inner.innerHTML = '';
setTimeout(typeWritter, 300);  

function typeWritter() {
    if(i < txt.length){
        increaseText();
        txt = 'solution';
        setTimeout(cursorFlash, 300);
        
    } else if( i == txt.length){
        i = 0;
        inner.innerHTML = '';
   }
    setTimeout(typeWritter, 300);  
};

function increaseText(){
    inner.innerHTML += txt.charAt(i);
    i++;
};

function cursorFlash() {
    cursor.classList.toggle('active');
}

buttonAbout.addEventListener('mouseover', function(){
    buttonAbout.children[0].style.width = "30px";
    buttonAbout.children[0].style.margin = "0px 10px 0px 0px";
    buttonAbout.parentElement.style.width = "32%";
});
buttonAbout.addEventListener('mouseout', function(){
    buttonAbout.children[0].style.width = "0px";
    buttonAbout.children[0].style.margin = "0px 0px 0px 0px";
    buttonAbout.parentElement.style.width = "30%";
});

buttonGet.addEventListener('mouseover', function(){
    buttonGet.children[0].children[1].style.transform = `translateY(${-30}px)`;
    buttonGet.children[0].children[0].style.transform = `translateY(${-30}px)`;
})

buttonGet.addEventListener('mouseout', function(){
    buttonGet.children[0].children[1].style.transform = `translateY(${0}px)`;
    buttonGet.children[0].children[0].style.transform = `translateY(${0}px)`;
})

footerBox.addEventListener('mouseover', function(event){
    if(event.target.closest('.item_links')){
        itemLink = event.target.closest('.item_links');
        itemLink.style.left = "10px";
        itemLink.style.position = "relative";
        console.log(itemLink.childNodes);
    }
});

footerBox.addEventListener('mouseout', function(event){
    if(event.target.closest('.item_links')){
        itemLink = event.target.closest('.item_links');
        itemLink.style.left = "0px";
        itemLink.style.position = "static";
    }
})

function deleteClass(){
    dots.parentElement.classList.remove('active');
};

function showImg2 (){
    dinamic.children[0].src = "../eyelashes/images/dinamic/pexels-andrea-piacquadio-3760262.jpg"
    dinamic.children[0].style.height = "100%"
};

function showImg3 (){
    dinamic.children[0].src = "../eyelashes/images/dinamic/pexels-andrea-piacquadio-3852252.jpg"
    dinamic.children[0].style.height = "100%";
};

function showImg4 (){
    dinamic.children[0].src = "../eyelashes/images/dinamic/pexels-cottonbro-3997981.jpg"
    dinamic.children[0].style.height = "110%";
};

function showImg5 (){
    dinamic.children[0].src = "../eyelashes/images/dinamic/pexels-andrea-piacquadio-3757942.jpg"
    dinamic.children[0].style.height = "150%";
};


