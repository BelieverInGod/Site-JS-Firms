// window.addEventListener('DOMContetntLoaded', () => {

    

    const header = document.querySelector(".header")
    const links = document.querySelector(".nav_link")
    const linksAll = document.querySelectorAll(".nav_link")
    const imageOut = document.querySelector(".image-out")
    const text = document.getElementsByClassName("top1"),
          removeImg = document.querySelectorAll('data-img');

    //       const parentText = document.querySelector('.Container__slider'),
    //       sliderContent = document.querySelectorAll('.slider');
      
    //   function hideText() {
    //       sliderContent.forEach((text, i ) =>  {
    //           text.style.display = "none"
    //           }
    //        );
    //     };      

    function addImage(name) {
        let img = document.createElement('img');
        img.setAttribute('data-img', img)
        img.src = name + '.jpg';
        imageOut.append(img);
    }


    for(let [index,linksItem] of linksAll.entries()) {
        console.log(linksItem,index)

        linksItem.addEventListener("click", function() {
            console.log(linksItem.text)

            if("click") {

                let anotherItems = [...linksAll];
                anotherItems.splice(index, 1);
                for(let anotherItem of anotherItems) {
                    anotherItem.classList.remove('affect');
                }
                linksItem.classList.add('affect');
                
                
                for ( let oldImg of removeImg) {
                if(oldImg.getAttribute('data-img')) {
                       oldImg.remove()
                   }
                }
                addImage(linksItem.text)

                // sliderContent.forEach((text) =>  {
                //     if (linksItem.text === 'Nike' && text.getAttribute('#nike__text')) {
                //         text.style.display = "block"
                //     }
                // });
        }
    })
}   

//text content history


// hideText()


    //timer


    const deadline = '2022-12-13';

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24 ),
            minutes = Math.floor(t / (1000 * 60 ) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }      
    };

    function getZero(num) {
        if(num < 10) {
            return `0${num}`
        }else{
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
            const timeInterval = setInterval(updateClock, 1000)    

            updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
            if(t.total <= 0) {
                clearInterval(timeInterval);
            } 
        };
    };
    setClock('.timer', deadline)

    //close window text yeloow

    addEventListener('click', (event) => {
        const btnClose = document.querySelector(".closeTextBg"),
            btnParent = document.querySelector(".textForBg"),
            textbg = document.querySelector('.textBg');
        
        const target = event.target;
        
        if(target && target.classList.contains('closeTextBg')) {
            btnParent.classList.add('closeTextBgUse')
            btnParent.remove('textForBg')
            textbg.remove('textBg')
        }


        // menu main 
        const menuBtn = document.querySelector('.main__list'),
            allBtnMenu = document.querySelectorAll ('.Second__list')

        menuBtn.addEventListener('click', (e) => {

                const target = e.target
                if(target && target === menuBtn){
                    
                    allBtnMenu.forEach(item => {
                        if(item.classList.contains('show')){
                        item.classList.remove('show');
                        item.classList.add('hide')
                    } else {
                        item.classList.add('show')
                        item.classList.remove('hide')
                    }
                    }) 
                }
        });


    })


//  });
