// ============================================================
//  ПРЕДЗАГРУЗЧИК ВИДЕО ДЛЯ АНИМАЦИЙ
// ============================================================

// Хранилище для blob URL загруженных видео
const videoBlobCache = {};

/**
 * Загрузка видео через fetch и создание blob URL
 * @param {string} src - путь к видеофайлу
 * @returns {Promise<string|null>} - blob URL или null при ошибке
 */
async function loadVideoAsBlob(src) {
    // Убираем #t=0.001 для корректной загрузки
    const cleanSrc = src.split('#')[0];
    
    // Если уже есть blob URL - возвращаем его
    if (videoBlobCache[cleanSrc]) {
        console.log('📦 Видео уже в кеше: ' + cleanSrc);
        return videoBlobCache[cleanSrc];
    }

    try {
        console.log('📥 Загрузка видео: ' + cleanSrc);
        const response = await fetch(cleanSrc);
        
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        videoBlobCache[cleanSrc] = blobUrl;
        console.log('✅ Видео загружено: ' + cleanSrc);
        return blobUrl;
    } catch (error) {
        console.error('❌ Ошибка загрузки видео ' + cleanSrc + ':', error);
        return null;
    }
}

/**
 * Последовательная предзагрузка списка видео
 * @param {Array<string>} videoList - массив путей к видеофайлам
 * @param {Function} onProgress - callback прогресса (current, total)
 * @param {Function} onComplete - callback завершения
 */
async function preloadVideosSequentially(videoList, onProgress, onComplete) {
    const totalVideos = videoList.length;
    let loadedCount = 0;
    
    console.log('🎬 Начало предзагрузки ' + totalVideos + ' видео');
    
    if (onProgress) {
        onProgress(0, totalVideos);
    }
    
    for (let i = 0; i < videoList.length; i++) {
        const cleanSrc = videoList[i].split('#')[0];
        await loadVideoAsBlob(cleanSrc);
        loadedCount++;
        
        if (onProgress) {
            onProgress(loadedCount, totalVideos);
        }
        
        // Небольшая пауза между загрузками для стабильности
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    console.log('✅ Все видео загружены (' + loadedCount + '/' + totalVideos + ')');
    
    if (onComplete) {
        onComplete();
    }
}

/**
 * Получить blob URL для видео (если загружено) или оригинальный src
 * @param {string} src - путь к видеофайлу
 * @returns {string} - blob URL или оригинальный src
 */
function getVideoSrc(src) {
    const cleanSrc = src.split('#')[0];
    const blobUrl = videoBlobCache[cleanSrc];
    
    if (blobUrl) {
        console.log('📦 Используем кешированное видео: ' + cleanSrc);
        return blobUrl;
    } else {
        console.log('⚠ Видео не в кеше, используем прямую ссылку: ' + cleanSrc);
        return src;
    }
}

/**
 * Применить blob URL к видео-элементу
 * @param {HTMLVideoElement} videoElement - элемент video
 * @param {string} src - путь к видеофайлу
 */
function applyVideoSource(videoElement, src) {
    const videoSrc = getVideoSrc(src);
    videoElement.src = videoSrc;
}

// Очистка blob URL при уходе со страницы
window.addEventListener('beforeunload', () => {
    Object.values(videoBlobCache).forEach(blobUrl => {
        URL.revokeObjectURL(blobUrl);
    });
    console.log('🧹 Blob URL очищены');
});