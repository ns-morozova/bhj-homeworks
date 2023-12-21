const tabs = document.getElementsByClassName('tab');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = (event) => {
        const tabActive = document.getElementsByClassName('tab_active')[0];
        const tabs = Array.from(document.getElementsByClassName('tab'));
        
        tabActive.classList.remove('tab_active');
        event.currentTarget.classList.add('tab_active');

        const contentActive = document.getElementsByClassName('tab__content_active')[0];
        contentActive.classList.remove('tab__content_active');

        let n = tabs.indexOf(event.currentTarget);
        const tabContent = document.getElementsByClassName('tab__content')[n];
        tabContent.classList.add('tab__content_active');
        
    }
}