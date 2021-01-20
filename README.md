# AsincronismoConJS
Curso de asincronismo con Javascript.

Javascript es un lenguaje de programación asíncrono y no bloqueante. Tiene un manejador de eventos (EventLoop) implementado en un único hilo para las interfaces de entrada / salida (I/O).

**Async / Await** es recomendable a utilizar en vez de promesas ya que conseguimos que nuestro código sea síncrono.

### Callbacks

***Ventajas:***

- Es simple
- Una función que llama a otra función
- Son universales y funcionan en cualquier navegador

***Desventajas:***

- Composición complicada
- Callback Hell
- Manejo de errores tedioso ya que no se pueden manejar excepciones

### Promesas
***Ventajas:*** 

- Facilmente enlazables con then
- Código más intuitivo
- Permite trabajar con asincronismo 
  
***Desventajas:***

- No maneja excepciones, solo un catch final.
- Propenso a errores si no retornamos la siguiente llamada
- Necesita un traspilador para poder usarse en algunos navegadores.
  
### Asyn - Await
***Ventajas:*** 

- Se pueden manejar excepciones mediante try-cath
- Mejor legibilidad del código 

***Desventajas:***
- Necesita un traspilador para poder usarse en algunos navegadores.

### Instalación de dependencias
-  npm install xmlhttprequest --save