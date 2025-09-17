// middlewares/validate.js
const { z } = require("zod");
const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody; //? overwrite with validated + transformed data
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      // Collect all issues
      const errors = err.issues.map((issue) => ({
        // todo path: issue.path.join("."), // e.g. "password"
        message: issue.message, //* e.g . "Password must be at least 6 characters"
      }));

      //? Send one response
      return res.status(400).json({
        msg: "Validation error",
        errors,
      });
    }

    //! fallback for unexpected errors
    console.error("Unexpected error:", err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

module.exports = validate;
