import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://namitgoyal485:dB4LzIh6SScgLxOq@hungryhive.kk1j4tq.mongodb.net/HungryHive').then(()=>console.log("DB Connected"));
}
