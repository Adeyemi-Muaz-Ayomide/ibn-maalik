"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import PaystackPop from "@paystack/inline-js"; // top of file, safe now

const PLANS = {
  group: {
    label: "Group Classes",
    description:
      "Learn with other students in a structured and motivating environment.",
    monthly: 9999,
    semester: 24999,
  },

  private: {
    label: "Private Classes ✨",
    description:
      "1-on-1 personalized sessions, faster progress, direct teacher access, and flexible scheduling.",
    monthly: 19999,
    semester: 59999,
  },
};

const LEVELS = [
  "Level 1 - Foundations",
  "Level 2 - Reading & Tajweed",
  "Level 3 - Hifdh",
  "Level 4 - Muraja'ah",
];

export default function EnrollModal() {
  const [step, setStep] = useState(1);

  const [selectedType, setSelectedType] = useState("private");
  const [selectedPlan, setSelectedPlan] = useState("semester");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    level: "",
  });

  const currentPlan = PLANS[selectedType];

  const amount =
    selectedPlan === "monthly" ? currentPlan.monthly : currentPlan.semester;

  function updateField(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function validate() {
    const missing = [];
    if (!formData.name) missing.push("Full Name");
    if (!formData.email) missing.push("Email Address");
    if (!formData.country) missing.push("Country");
    if (!formData.level) missing.push("Current Level");

    if (missing.length) {
      setError(`Please complete: ${missing.join(", ")}.`);
      return false;
    }
    if (!formData.email.includes("@") || formData.email.indexOf("@") === 0) {
      setError("Email must include a valid @ sign.");
      return false;
    }
    if (!/^[0-9+]{7,15}$/.test(formData.phone)) {
      setError("WhatsApp number must be digits only.");
      return false;
    }
    setError("");
    return true;
  }

  async function handlePayment() {
    const { name, email, country, level, phone } = formData;
    // const { default: PaystackPop } = await import("@paystack/inline-js");

    if (!validate()) return;

    const { error } = await supabase.from("enrollments").insert([
      {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        level: formData.level,
        phone: formData.phone,
        class_type: selectedType,
        plan: selectedPlan,
        amount: amount,
        payment_status: "pending",
      },
    ]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    // alert("Enrollment submitted successfully!");

    const popup = new PaystackPop();

    popup.newTransaction({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,

      email,

      amount: amount * 100,

      currency: "NGN",

      reference: `IMI-${Date.now()}`,

      metadata: {
        custom_fields: [
          {
            display_name: "Student Name",
            variable_name: "student_name",
            value: name,
          },
          // {
          //   display_name: "Phone Number",
          //   variable_name: "phone",
          //   value: phone,
          // },
          {
            display_name: "Level",
            variable_name: "level",
            value: level,
          },
          {
            display_name: "Class Type",
            variable_name: "class_type",
            value: selectedType,
          },
        ],
      },

      onSuccess: async (transaction) => {
        alert("Payment successful 🎉");
        window.location.href =
          "https://wa.me/2347084605347?text=I%20just%20completed%20my%20payment";

        console.log(transaction);

        // OPTIONAL:
        // Update DB payment status here
      },

      onCancel: () => {
        alert("Transaction cancelled");
      },
    });
  }

  return (
    <div className="flex items-center justify-center p-10! backdrop-blur-sm">
      <div className="h-fit w-full max-w-3xl border border-white bg-[#f4f4f0] shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#2f3e35] bg-[#111c18] p-10!">
          <div>
            <h2 className="mb-1 text-xmd font-bold uppercase text-white">
              Application Portal
            </h2>

            <p className="text-xs text-[#7b8b83]">ID: ENR-2026-N</p>
          </div>

          <button className="text-white transition hover:text-white">✕</button>
        </div>

        {/* STEPS */}
        <div className="flex border-b border-[#2f3e35] bg-[#0d1512] text-xs font-bold tracking-wider uppercase p-5!">
          <div
            className={`flex-1 text-center text-sm ${
              step === 1 ? "text-white" : "text-[#7b8b83]"
            }`}
          >
            1. Stage
          </div>

          <div
            className={`flex-1 text-sm text-center ${
              step === 2 ? "text-white" : "text-[#7b8b83]"
            }`}
          >
            2. Tuition
          </div>

          <div
            className={`flex-1 text-sm text-center ${
              step === 3 ? "text-white" : "text-[#7b8b83]"
            }`}
          >
            3. Payment
          </div>
        </div>

        {/* CONTENT */}
        <div className=" px-8! py-6! md:p-10">
          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 className="mb-4! text-xl font-serif  uppercase text-black">
                CHOOSE YOUR LEARNING PATH
              </h3>

              {Object.entries(PLANS).map(([key, plan]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedType(key);
                    setStep(2);
                  }}
                  className={`group w-full cursor-pointer text-left transition mb-6! hover:border! hover:border-[#111c18]! ${
                    selectedType === key
                      ? "border-[#111c18] bg-white"
                      : "border-[#2f3e35] bg-white hover:border-[#111c18]"
                  }`}
                >
                  <div className="flex items-start justify-between ">
                    <div className="mb-10! p-5!">
                      <h4 className="mb-1! text-black text-xl font-serif  uppercase">
                        {plan.label}
                      </h4>

                      <p className="max-w-xl text-sm text-black">
                        {plan.description}
                      </p>
                    </div>

                    <div
                      className={`mt-2 h-6 w-6 border ${
                        selectedType === key
                          ? "border-[#111c18] bg-[#111c18]"
                          : "border-[#2f3e35]"
                      } flex items-center justify-center`}
                    >
                      <div
                        className={`h-2 w-2 ${
                          selectedType === key ? "bg-white" : "bg-transparent"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="">
              <div className="mb-6! flex items-center justify-between">
                <h3 className="text-xl font-serif  uppercase text-black">
                  Tuition Remittance
                </h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold cursor-pointer uppercase tracking-widest text-black hover:text-[#1a4d2e]"
                >
                  ← Return
                </button>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan("semester");
                  setStep(3);
                }}
                className={`w-full border p-6 text-left transition`}
              >
                <div className="flex flex-col mb-6! p-7!  bg-white justify-between md:flex-row md:items-center hover:border! hover:border-[#111c18]!">
                  <div>
                    <h4 className="text-xl text-black font-serif uppercase">
                      Full Semester Remittance
                    </h4>

                    <p className="font-mono text-xs uppercase tracking-widest text-[#7b8b83]">
                      12 Weeks • Best Value
                    </p>
                  </div>

                  <div className="text-xl text-[#1a4d2e]">
                    ₦{currentPlan.semester.toLocaleString()}
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setSelectedPlan("monthly");
                  setStep(3);
                }}
                className={`w-full border p-6 text-left transition `}
              >
                <div className="flex flex-col mb-10! p-7! bg-white justify-between md:flex-row md:items-center hover:border! hover:border-[#111c18]!">
                  <div>
                    <h4 className="text-xl text-black font-serif uppercase">
                      Monthly Installment
                    </h4>

                    <p className="font-mono text-xs uppercase tracking-widest text-[#7b8b83]">
                      4 Weeks • Standard
                    </p>
                  </div>

                  <div className="text-xl text-[#1a4d2e]">
                    ₦{currentPlan.monthly.toLocaleString()}
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif  uppercase text-black">
                  Applicant Ledger
                </h3>

                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-bold cursor-pointer uppercase tracking-widest text-black hover:text-[#1a4d2e]"
                >
                  ← Return{" "}
                </button>
              </div>

              {/* SUMMARY */}
              <div className="border mt-5! border-[#2f3e35] bg-[#111c18] text-sm">
                <div className="p-5! flex justify-between border-b border-dashed border-[#2f3e35] ">
                  <span className="uppercase text-white font-serif">
                    Course Designation:
                  </span>

                  <span className="font-bold capitalize font-serif text-white">
                    {currentPlan.label}
                  </span>
                </div>

                <div className="flex justify-between p-5!">
                  <span className="uppercase text-white font-serif">
                    Billing Cycle:
                  </span>

                  <span className="text-white">
                    {selectedPlan === "monthly"
                      ? `Monthly (₦${currentPlan.monthly.toLocaleString()})`
                      : `Semester (₦${currentPlan.semester.toLocaleString()})`}
                  </span>
                </div>
              </div>

              {/* FORM */}
              <div className=" mt-5! pt-5! border-t border-[#2f3e35]">
                <label className="text-black text-sm font-bold uppercase tracking-widest font-serif ">
                  Full Name
                </label>
                <input
                  placeholder="e.g. Abdullah Rahman"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="p-3! w-full border border-[#2f3e35] mt-2! placeholder:text-black/50 text-black outline-none transition focus:border-[#111c18]"
                />

                <div className="mt-5!">
                  <label className="text-black text-sm font-bold uppercase tracking-widest font-serif">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@domain.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="p-3! w-full border border-[#2f3e35] mt-2! placeholder:text-black/50 text-black outline-none transition focus:border-[#111c18]"
                  />
                </div>

                <div className="mt-5!">
                  <label className="text-black text-sm font-bold uppercase tracking-widest font-serif ">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+2341234567"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="p-3! w-full  border border-[#2f3e35] mt-2! placeholder:text-black/50 text-black outline-none transition focus:border-[#111c18]"
                  />
                </div>

                <div className="mt-5!">
                  <label className="text-black text-sm font-bold uppercase tracking-widest font-serif ">
                    Country
                  </label>
                  <input
                    placeholder="Nigeria"
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    className="p-3! w-full  border border-[#2f3e35] mt-2! placeholder:text-black/50 text-black outline-none transition focus:border-[#111c18]"
                  />
                </div>

                <div>
                  <label className="mt-5! block text-black text-sm font-bold uppercase tracking-widest font-serif">
                    Current Level
                  </label>

                  <select
                    value={formData.level}
                    onChange={(e) => updateField("level", e.target.value)}
                    className="w-full border border-[#2f3e35] mt-2! bg-white p-4! placeholder:text-black/50 text-black outline-none transition focus:border-[#111c18] cursor-pointer"
                  >
                    <option value="">Select level</option>

                    {LEVELS.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="border border-red-900 bg-[#1a0a0a] p-6! mb-4 mt-5!">
                  <p className="text-[#e8a0a0] text-md uppercase tracking-wide font-serif">
                    {error}
                  </p>
                </div>
              )}

              {/* BUTTON */}
              <button
                onClick={handlePayment}
                className="btn-primary mt-10! w-full flex items-center justify-center text-center font-serif! uppercase bg-[#111c18]!"
              >
                Authorize Payment
              </button>

              <div className="flex items-center justify-center gap-2 pt-5! text-[#7b8b83]">
                <span>🔒</span>

                <p className="text-xs uppercase">
                  Secured & Encrypted via Paystack
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
