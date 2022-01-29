document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 125,
    loop: false,
    nextStringDelay: 750,
    deleteSpeed: 150,
    cursor: true,
    })
    .type('<span class="nickname">Aloofaloof(_aycelia)</span>')
    .delete(".nickname")
    .type('streamer, osu player and cool boy :)')
    .go();
})