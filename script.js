document.addEventListener('DOMContentLoaded', async function() {
    const chatSession = await window.ai.createTextSession();
    document.getElementById('user-input').addEventListener('keypress', async function(e) {
        if(e.key === 'Enter') {
            /**
             * Represents the user input value.
             * @type {string}
             */
            let userInput = document.getElementById('user-input').value;
            if(userInput.trim() !== "") {
                addMessage(userInput, 'user-message');
                document.getElementById('user-input').value = '';
                const result = await chatSession.prompt(userInput)
                    addMessage(result);
            }
        }
    } );

    document.getElementById('send-btn').addEventListener('click',async function() {
        /**
         * Represents the user input value.
         * @type {string}
         */
        let userInput = document.getElementById('user-input').value;
        if(userInput.trim() !== "") {
            addMessage(userInput, 'user-message');
            document.getElementById('user-input').value = '';
            const result = await chatSession.prompt(userInput)
                addMessage(result);
        }
    });
    
    /**
     * Adds a new message to the output container.
     * @param {string} message - The message to be added.
     * @param {string} className - The class name to be applied to the new message element.
     * @returns {Promise<void>} - A promise that resolves once the message is added.
     */
    async function addMessage(message, className) {
        let output = document.getElementById('output');
        let newMessage = document.createElement('div');
        newMessage.className = `message ${className}`;
        newMessage.textContent = message;
        output.appendChild(newMessage);
        output.scrollTop = output.scrollHeight; 
    }
});


