const videoId = "pQVidJHhDMc"; // ID de la vidéo YouTube
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('youtubeFrame');

function openVideoModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

function closeVideoModal() {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    iframe.src = '';
}

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeVideoModal();
    }
});