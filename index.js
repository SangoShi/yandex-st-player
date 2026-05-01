const YANDEX_PLAYLIST_URL = "https://music.yandex.ru/iframe/#playlist/yamusic-top/5491"; 

function createYandexPlayer() {
    if (document.getElementById('st-yandex-container')) return;

    const container = document.createElement('div');
    container.id = 'st-yandex-container';
    
    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'st-yandex-toggle';
    toggleBtn.innerHTML = '🎵 Music';
    
    const widget = document.createElement('div');
    widget.id = 'st-yandex-widget';
    widget.classList.add('hidden');
    
    widget.innerHTML = `
        <iframe 
            frameborder="0" 
            style="border:none;width:100%;height:100%;" 
            width="100%" 
            height="100%" 
            src="${YANDEX_PLAYLIST_URL}">
        </iframe>
    `;
    
    toggleBtn.onclick = () => {
        widget.classList.toggle('hidden');
    };

    container.appendChild(toggleBtn);
    container.appendChild(widget);
    document.body.appendChild(container);
}

// Запускаем через 1 секунду после загрузки скрипта, 
// чтобы Таверна точно успела построить свой интерфейс
setTimeout(createYandexPlayer, 1000);