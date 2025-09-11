const { z } = require("zod");

const registerSchema = z.object({
  username: z
    .string({ required_error: "User Name is required" })
    .trim()
    .min(3, { message: "Name must be of atleast 3 charters" })
    .max(255, { message: "Name must be not more than 255  charters " }),
  email: z
    .string({ required_error: "Email  is required" })
    .email({ message: "Invalid Email Address" })
    .trim()
    .min(3, { message: "email must be of atleast 3 charters" })
    .max(255, { message: "email must be not more than 255  charters " }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password at least of 6 character" })
    .max(255, { message: "password must be not more than 255  charters " }),

  // confirmPassword: z.string().min(6),
});
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match",
//   path: ["confirmPassword"],
// });

module.exports = registerSchema;
