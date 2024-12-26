<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxima the Goat Bot</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        header {
            background: #ffcc00;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 2em;
        }
        header img {
            width: 100px;
            margin-top: 10px;
            animation: bounce 1.5s infinite;
        }
        .content {
            margin: 20px;
            padding: 20px;
        }
        .feature, .command {
            opacity: 0;
            transform: translateY(50px);
            animation: fadeIn 1s forwards;
            margin: 10px 0;
        }
        .feature:nth-child(odd), .command:nth-child(odd) {
            animation-delay: 0.2s;
        }
        .feature:nth-child(even), .command:nth-child(even) {
            animation-delay: 0.4s;
        }
        @keyframes fadeIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        h2 {
            font-size: 1.8em;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<header>
    <div>Proxima the Goat Bot 🐐✨</div>
    <img src="https://i.imgur.com/Zma55DB.jpeg" alt="Proxima the Goat Bot">
</header>

<div class="content">
    <h2>Features 🎉</h2>
    <div class="feature">🐐 **Antispam**: Proxima can help keep your group free from spammers! 🚫</div>
    <div class="feature">💻 **Shell Commands**: Execute terminal commands right from your chat! 🖥️</div>
    <div class="feature">🎈 **Fun Interactions**: Chat with Proxima and enjoy some goat-tastic vibes! 🐐🎉</div>
    <div class="feature">🛠️ **Utility Commands**: Get quick and easy help with various commands for your server or group. ⚙️</div>

    <h2>How to Use Proxima 🧑‍💻</h2>
    <div class="command">1. **Install** Proxima with the `#cmd install` command.</div>
    <div class="command">2. Use the bot's various features, like `$`, `> shell` to run terminal commands.</div>
    <div class="command">3. Proxima will help you manage spam and other tasks with ease!</div>

    <h2>Commands 📜</h2>
    <div class="command">- **Shell Commands**: Use `>`, `$`, or `shell` to run terminal commands.</div>
    <div class="command">- **Antispam**: Proxima can automatically warn and kick users who spam in your group.</div>
    <div class="command">- **Help**: Type `{pn} help` to get the list of available commands.</div>

    <h2>License 🔑</h2>
    <div class="command">This project is licensed under the MIT License - see the LICENSE file for details.</div>

    <h2>Contact 📞</h2>
    <div class="command">Have questions or want to contribute? Feel free to reach out to the creator!</div>
    <div class="command">Email: **aayusha@example.com**</div>
</div>

</body>
</html>