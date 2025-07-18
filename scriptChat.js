const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-input');
const chatMessages = document.querySelector('.chat-messages');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (message) {
    // Create a new chat message element
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message', 'outgoing');
    chatMessage.innerHTML = `
      <span class="chat-message-time">${getCurrentTime()}</span>
      <span class="chat-message-text">${message}</span>
    `;

    // Add the new chat message to the chat window
    chatMessages.appendChild(chatMessage);

    // Clear the input field
    chatInput.value = '';
  }
});

function getCurrentTime() {
  // Return the current time as a string formatted as "HH:MM AM/PM"
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const amOrPm = now.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${amOrPm}`;
}
