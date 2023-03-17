import mongoose, {Schema} from "mongoose";

interface user {
  first_name: string;
  last_name: string;
  native_language?: string;
  email: string;
  premium_user?: boolean;
  photo: string;
}

export const userModel = new Schema<user>({
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: true,
  },
  native_language: String,
});

export default mongoose.model<user>("user", userModel);
