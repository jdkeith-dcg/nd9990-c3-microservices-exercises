
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteColor = process.env.JWT_SECRET;

  while(true) {
    console.log(`Microservices rock! Favorite Color = ${favoriteColor}`);
    await sleep(5000);
  }
}

main();
