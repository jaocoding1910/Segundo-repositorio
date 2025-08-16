 function mudarCorDeFundo() {

document.body.style.backgroundColor = "#2a818aff";
 }

 /* página inicial */
.hero {
  text-align: center;
  margin: 40px auto;
  max-width: 700px;
}

.btn {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 16px;
  background: #1e90ff;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
}

.btn:hover { background: #005fa3; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: 30px auto;
  padding: 0 12px;
}

.card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}

nav a:first-child { margin-left: 0; }
