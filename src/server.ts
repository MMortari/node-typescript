import app from './app'

const listenPort = 3333 || process.env.PORT
app.listen(listenPort, () => console.log(`Server listen on port ${listenPort}`))
