const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["patient", "healthcare_provider"], // Your specified roles
      required: true,
    },
    gender: { type: String },
    age: { type: Number },
    location: { type: String },
    consentAccepted: { type: Boolean, default: false },

    // Patient-specific fields
    profile: {
      bloodGroup: String,
      heightCm: Number,
      weightKg: Number,
      allergies: [String],
      currentMedications: [String],
      existingConditions: [String],
      wellnessGoals: {
        dailyStepsTarget: Number,
        waterIntakeTargetLiters: Number,
        sleepHoursTarget: Number,
      },
    },

    // Doctor-specific fields
    professionalInfo: {
      specialization: String,
      licenseNumber: String,
      yearsOfExperience: Number,
      hospitalAffiliation: String,
      availableSlots: [
        {
          day: String,
          time: String,
        },
      ],
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to match password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
