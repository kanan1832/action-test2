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
  console.log(process.env);
}
