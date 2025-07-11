:root {
  --blue: #1f5fbf;
  --light: #f5f7fa;
  --gray: #777;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--light);
  color: #222;
  scroll-behavior: smooth;
}

.intro {
  height: 100vh;
  background: linear-gradient(to right, #1f5fbf, #3c8ce7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
.intro h1 {
  font-size: 3em;
  animation: fadeIn 1s ease-in-out;
}
.intro p {
  font-size: 1.2em;
  margin-top: 10px;
}
.btn {
  margin-top: 30px;
  padding: 12px 24px;
  background: white;
  color: var(--blue);
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s ease;
}
.btn:hover {
  background: #e0e5ec;
}

.header {
  background: white;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
}
.logo {
  color: var(--blue);
  font-weight: bold;
}
.nav a {
  margin-left: 20px;
  color: var(--blue);
  text-decoration: none;
}
.nav a:hover {
  text-decoration: underline;
}

.section {
  padding: 80px 20px;
  max-width: 900px;
  margin: auto;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease;
}
.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.tags span {
  display: inline-block;
  background: #e0e5ec;
  padding: 6px 12px;
  border-radius: 16px;
  margin: 6px;
}

.timeline {
  border-left: 3px solid var(--blue);
  padding-left: 20px;
}
.timeline-item {
  position: relative;
  margin-bottom: 30px;
}
.timeline-item .dot {
  position: absolute;
  top: 0;
  left: -10px;
  width: 16px;
  height: 16px;
  background: var(--blue);
  border-radius: 50%;
}
.timeline-item .content h3 {
  margin-bottom: 5px;
}

.card-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}

.testimonial {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  text-align: center;
  max-width: 600px;
  margin: auto;
  font-style: italic;
}
.testimonial span {
  display: block;
  margin-top: 10px;
  color: var(--gray);
}

.footer {
  background: #e0e5ec;
  padding: 40px 20px;
  text-align: center;
}
.back-to-top {
  display: inline-block;
  margin-top: 15px;
  color: var(--blue);
  text-decoration: none;
}
.back-to-top:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
