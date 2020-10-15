<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Dosis"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/css/portfolio_website/main.css" />
    <title>Contact Me | UI/UX Designer & Photographer</title>
  </head>
  <body>
    <!-- Header -->
    <header id="header-inner">
      <div class="container">
        <nav id="main-nav">
          <img src="img/logo.png" alt="My Portfolio" id="logo" />
          <ul>
            <li><a href="/portfolio-website/home" class="current">Home</a></li>
            <li><a href="/portfolio-website/about">About</a></li>
            <li><a href="/portfolio-website/work">Work</a></li>
            <li><a href="/portfolio-website/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Section A: Contact Form -->
    <section id="contact-a" class="text-center py-3">
      <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <div class="bottom-line"></div>
        <p class="lead">Here is how you can reach me</p>
        <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <div class="text-fields">
            <input
              type="text"
              class="text-input name-input"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              class="text-input subject-input"
              placeholder="Subject"
              name="subject"
            />
            <input
              type="email"
              class="text-input email-input"
              placeholder="Email Address"
              name="email"
            />
            <input
              type="text"
              class="text-input phone-input"
              placeholder="Phone Number"
              name="phone"
            />
            <textarea
              class="text-input message-input"
              placeholder="Enter Message"
              name="message"
            ></textarea>
            <div class="my-2">
              <div data-netlify-recaptcha="true"></div>
            </div>
          </div>
          <button type="submit" class="btn-dark">Submit</button>
        </form>
      </div>
    </section>

    <!-- Section B: Contact Info -->
    <section id="contact-b" class="py-3 bg-dark">
      <div class="container">
        <div class="contact-info">
          <div>
            <i class="fas fa-envelope fa-2x"></i>
            <h3>Email</h3>
            <p>john@something.com</p>
          </div>
          <div>
            <i class="fas fa-phone fa-2x"></i>
            <h3>Phone</h3>
            <p>(555) 555-5555</p>
          </div>
          <div>
            <i class="fas fa-address-card fa-2x"></i>
            <h3>Address</h3>
            <p>50 Main st, Boston MA</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section C: Tagline -->
    <section id="contact-c" class="bg-main py-4">
      <div class="container">
        <h1>Let's Start Your Next Project</h1>
      </div>
    </section>

    <!-- Footer -->
    <footer id="main-footer">
      <div class="footer-content container">
        <p>Copyright &copy; 2019. All Rights Reserved</p>
        <div class="social">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  </body>
</html>
