const express = require('express');
const app = express();
const { router } = require('./routers/api.js');

//app.use('/api', express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end(`
  <script>
  function f(){
    document.links[0].href = "/api?product="+document.getElementById("i").value;
  }
  </script>
  <h1>Welcome</h1>
  <input id="i" oninput="f()" />
  <a href="/api/">Get products</a>
  `);
});

app.use('/api', router);

app.listen(4000, () => {
  console.log('Server started.');
});
