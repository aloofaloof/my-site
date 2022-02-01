document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 125,
    loop: true,
    nextStringDelay: 750,
    deleteSpeed: 150,
    cursor: true,
    })
    .type('<span class="name">Донат</span>')
    .delete(".name")
    .type('Donate')
    .go();
})