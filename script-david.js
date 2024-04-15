const http = require('node:http')
const fs = require('node:fs')

let text = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>logica-programacion-3</title>
  <script src="/calculo.js"></script>
</head>
<body>
  <label for="factorial">Ingrese el número para calcular el factorial:</label>
  <input type="text" id="factorial" name="factorial">
  <button onclick="calculo()">Calcular</button>
</body>
</html>`

  const createIndexHTML = () => {
    fs.unlink('./archivo.html', (err) => {
      if (err) throw err
      console.log('Eliminado')
    })
    fs.appendFile('./archivo.html', text, (err) => {
      if (err) throw err
      console.log('Creado')
    })
  } 

  createIndexHTML();

  const readIndex = (req, res) => {
    fs.readFile('./archivo.html', (err, data) => {
      if(err) {
        createIndexHTML()
        return readIndex(req, res)
      }
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write(data)
      return res.end()
    })
  }

const server = http.createServer((req, res) => {
  readIndex(req, res);
  if (req.url === '/calculo.js') {
    const filePath = path.join(__dirname, 'calculo.js');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end(`Error cargando archivo: ${err}`);
      }

      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      return res.end();
    });
  }

})

server.listen(0, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${server.address().port}`)
})