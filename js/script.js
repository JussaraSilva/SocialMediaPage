//SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Alterna entre a setinha e o ícone de "X"
    if (sidebar.classList.contains('active')) {
        menuIcon.classList.replace('fa-circle-chevron-left', 'fa-circle-chevron-right');
    } else {
        menuIcon.classList.replace('fa-circle-chevron-right', 'fa-circle-chevron-left');
    }
});


//MESSAGES



//Messages

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');






// Função para remover a classe 'active' de todos os itens
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

// Adicionar evento de clique a cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem(); // Remover a classe 'active' de todos os itens
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    
    })
})

//=======Messages =======================================//
//searches chats 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })

}


//search chat
messageSearch.addEventListener('keyup', searchMessage)

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


/// Theme Customizer Functions


//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }

}


themeModal.addEventListener('click', closeThemeModal); 

theme.addEventListener('click', openThemeModal);





//===================Fonts ========================================//
//remove active class from spans of font size selectors

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');

    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');

    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left', '-12rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
    }
    /// change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
    
})

//Remove classlist active

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


let primaryHue; // Variável declarada fora do escopo do event listener

/// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {

        //Remove classlist active
        changeActiveColorClass();
    

        if(color.classList.contains('color-1')){
            primaryHue = 252;


        }else if (color.classList.contains('color-2')){
            primaryHue = 52;

        }else if (color.classList.contains('color-3')){
            primaryHue = 352;

        }else if (color.classList.contains('color-4')){
            primaryHue = 152;

        }else if (color.classList.contains('color-5')){
            primaryHue = 202;

        }
        color.classList.add('active');
        

        root.style.setProperty('--primary-color-hue', primaryHue);
        
    })

})

// Change Background Color

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG = () => {

root.style.setProperty('--light-color-lightness',lightColorLightness);
root.style.setProperty('--white-color-lightness',whiteColorLightness);
root.style.setProperty('--dark-color-lightness', darkColorLightness);

}

Bg1.addEventListener('click', () =>{

    //add active class 
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();

});


Bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class 
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();

})

Bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class 
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBG();

})


