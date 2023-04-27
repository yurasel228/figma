<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing</title>
  <link rel="shortcut icon" href="https://placekitten.com/96/139" type="image/x-icon">
</head>

<body>
    <header role="banner">
        <img src="images/logo.jpg" alt="Logo Figma Land">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div class="social-icons">
          <img src="images/instagram.jpg" alt="Instagram" height="3%" width="3%">
          <img src="images/facebook.jpg" alt="Facebook" height="3%" width="3%">
          <img src="images/twitericon.png" alt="Twitter" height="2.4%" width="2.4%">
        </div>
        <form action="/search" method="get">
          <input type="text" name="query" placeholder="Search...">
          <button type="submit">Search</button>
        </form>
      </header>
  <main>

    <section>
      <h1>The best products start with Figma</h1>
      <h4>Most calendars are designed for teams. Slate is designed for freelancers</h4>
      <button type="button">Try for free</button>
    </section>
    <section>
      <h2>Features</h2>
      <ul>
        <li>
          <img src="images/circle.png" alt="Variable Fonts">
          <h3>OpenType features Variable fonts</h3>
          <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
        </li>
        <li>
          <img src="images/draw.png" alt="Design with Real Data">
          <h3>Design with real data</h3>
          <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
        </li>
        <li>
          <img src="images/pnsel.png" alt="Fastest Way to Take Action">
          <h3>Fastest way to take action</h3>
          <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
        </li>
      </ul>
    </section>
    <section>
        <h2>Call to Action</h2>
        <form action="/" method="post">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <button type="submit">Subscribe</button>
        </form>
        <a href="#">Learn more</a>
    </section>
  </main>
  <footer>
    <div class="footer-nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div class="footer-social-icons">
        <img src="images/instagram.jpg" alt="Instagram" height="3%" width="3%">
        <img src="images/facebook.jpg" alt="Facebook" height="3%" width="3%">
        <img src="images/twitericon.png" alt="Twitter" height="2.4%" width="2.4%">
    </div>
    <div class="footer-legal\"><ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
    </div>
  </footer>
</body>
</html>
