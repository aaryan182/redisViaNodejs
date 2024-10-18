import { createClient } from "redis";

const client = createClient();

async function main() {
    await client.connect();
    while(1){
        const response = await client.brPop("problems", 0);
        console.log(response);
        // actually run the users code docker exec
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // send it to pub sub
        console.log("Processed users submissions");
    }
}

main();