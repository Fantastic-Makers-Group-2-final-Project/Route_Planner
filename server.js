const app = require('./client/src/App');
app.listen(process.env.PORT || 5678, () => {
  console.log('example app listening on port 5678')
})
