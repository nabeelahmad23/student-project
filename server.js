import express from 'express'
const  app = express()
app.get('/',(req,res) => {
    res.send('Server is ready')
})
app.get('/jokes',(req,res) => {
 const jokes = [
    {
        id: 1,
        title: 'A joke',
        content: 'this is joke'
    },
    {
        id: 2,
        title: 'another joke',
        content: 'this is another joke'
    },
        {
        id: 3,
        title: 'third joke',
        content: 'this is third joke'
    },
        {
        id: 4,
        title: 'fourth joke',
        content: 'this is fourth joke'
    },
        {
        id: 5,
        title: 'fifth joke',
        content: 'this is fifth joke'
    },
 ]
 res.send(jokes)
})
const port = process.env.Port || 3000
app.listen(port,() => {
    console.log(`server is http://localhost: ${port}`);
    
})