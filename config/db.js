import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://sujitha:suji123@ac-0wlvbvn-shard-00-00.g2bgmio.mongodb.net:27017,ac-0wlvbvn-shard-00-01.g2bgmio.mongodb.net:27017,ac-0wlvbvn-shard-00-02.g2bgmio.mongodb.net:27017/?ssl=true&replicaSet=atlas-n24ll1-shard-0&authSource=admin&appName=Cluster0mongodb+srv://sujitha:suji123@cluster0.g2bgmio.mongodb.net/?appName=Cluster0",
    )
    .then(() => console.log("db connected"));
};
