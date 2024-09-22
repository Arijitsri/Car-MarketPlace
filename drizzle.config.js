/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./Configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:vEb0dOZTXkR7@ep-ancient-cherry-a5248jwv.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };