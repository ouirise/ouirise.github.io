import { z } from "zod";

export const MessageSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message too short"),
});
