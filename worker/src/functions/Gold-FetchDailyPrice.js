const { app } = require("@azure/functions");
const { createClient } = require("@supabase/supabase-js");

app.timer("Gold-FetchDailyPrice", {
  schedule: "0 30 0 * * *", // 6:00 AM IST = 00:30 UTC
  handler: async (myTimer, context) => {
    const timestamp = new Date().toISOString();
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    try {
      // Fetch gold price from Gold API
      const goldApiResponse = await fetch("https://www.goldapi.io/api/XAU/INR", {
        method: "GET",
        headers: {
          "x-access-token": process.env.GOLD_API_TOKEN,
        },
      });

      if (!goldApiResponse.ok) {
        throw new Error(`Gold API error: ${goldApiResponse.status} ${goldApiResponse.statusText}`);
      }

      const goldData = await goldApiResponse.json();
      
      // Extract 24k gold price (price per gram)
      const price24k = goldData._gram_24k;

      // Initialize Supabase client
      const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_KEY
      );

      // Store in Supabase
      const { error } = await supabase
        .from("GoldPrices")
        .insert({
          date: today,
          price: price24k,
        });

      if (error) {
        throw new Error(`Supabase error: ${error.message}`);
      }

      context.log("Gold price fetched and stored successfully", {
        functionName: "Gold-FetchDailyPrice",
        timestamp: timestamp,
        date: today,
        price24k: price24k,
        currency: "INR",
        unit: "per gram",
        status: "Success",
      });

    } catch (error) {
      context.log("Gold price fetch failed", {
        functionName: "Gold-FetchDailyPrice",
        timestamp: timestamp,
        date: today,
        status: "Failed",
        error: error.message,
      });

      throw error; // Re-throw to mark function execution as failed
    }
  },
});
