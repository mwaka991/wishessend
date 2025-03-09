class Wish {
    constructor(type, message, image, music, userId) {
        this.type = type; // Type of wish (e.g., birthday, holiday)
        this.message = message; // The message or speech for the wish
        this.image = image; // URL or path to the attached image
        this.music = music; // URL or path to the attached music
        this.userId = userId; // ID of the user creating the wish
    }
}

module.exports = Wish;