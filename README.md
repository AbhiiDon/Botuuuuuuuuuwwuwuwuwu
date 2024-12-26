<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxima the Goat Bot</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1d1f27;
            color: #e0e0e0;
            overflow-x: hidden;
        }
        header {
            background: linear-gradient(135deg, #ffcc00, #ff6600);
            color: white;
            padding: 40px;
            text-align: center;
            font-size: 2.5em;
            box-shadow: 0 0 20px rgba(255, 204, 0, 0.8);
        }
        header img {
            width: 120px;
            margin-top: 10px;
            animation: glow 1.5s ease-in-out infinite alternate;
        }
        .content {
            margin: 20px;
            padding: 20px;
        }
        .feature, .command {
            margin: 10px 0;
            padding: 10px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .feature:hover, .command:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        }
        .feature {
            font-size: 1.2em;
            color: #ffcc00;
        }
        .command {
            font-size: 1.1em;
            color: #66ccff;
        }
        h2 {
            font-size: 2em;
            margin-top: 30px;
            color: #ff6600;
        }
        /* Glowing Effect */
        @keyframes glow {
            0% {
                text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 15px #ff6600, 0 0 20px #ff6600;
            }
            50% {
                text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ff6600, 0 0 40px #ff6600;
            }
            100% {
                text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 15px #ff6600, 0 0 20px #ff6600;
            }
        }
    </style>
</head>
<body>

<header>
    <div>Proxima the Goat Bot 🐐✨</div>
    <img src="https://i.imgur.com/abc123.jpg" alt="Proxima the Goat Bot">
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