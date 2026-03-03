import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubmitApplication } from "@/hooks/useQueries";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { DrivingExperience, type Location } from "../backend";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  "Daily Rental Model",
  "Commercial Vehicle Ready",
  "Insurance Included",
  "Servicing & Maintenance Covered",
  "Fast Onboarding",
  "Transparent Terms",
];

const documents = [
  "Commercial Driving License",
  "Aadhar Card",
  "PAN Card",
  "Mumbai Address Proof",
  "Passport Size Photograph",
];

export default function PartnerPage() {
  const { mutateAsync, isPending, isSuccess, isError } = useSubmitApplication();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [otherLocation, setOtherLocation] = useState("");
  const [drivingLicenseNumber, setDrivingLicenseNumber] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let locationObj: Location;
    if (locationValue === "kurla") {
      locationObj = { __kind__: "kurla", kurla: null };
    } else if (locationValue === "ghatkopar") {
      locationObj = { __kind__: "ghatkopar", ghatkopar: null };
    } else {
      locationObj = { __kind__: "other", other: otherLocation || "Other" };
    }

    const expMap: Record<string, DrivingExperience> = {
      "0-1": DrivingExperience.zeroToOneYear,
      "1-3": DrivingExperience.oneToThreeYears,
      "3+": DrivingExperience.threePlusYears,
    };

    await mutateAsync({
      fullName,
      phoneNumber,
      location: locationObj,
      drivingLicenseNumber,
      experience: expMap[experience] ?? DrivingExperience.zeroToOneYear,
    });
  };

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="section-gradient py-16">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-light font-semibold text-sm uppercase tracking-widest font-body">
              Join Our Fleet
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4 max-w-2xl mx-auto leading-tight">
              Partner with National Mobility
            </h1>
            <p className="text-white/75 text-lg font-body max-w-xl mx-auto">
              Start Earning on Uber, Ola &amp; Rapido with Full Support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy mb-2">
                  Everything You Need to Succeed
                </h2>
                <p className="text-muted-foreground font-body">
                  We've built a model that takes away all the operational
                  headaches so you can focus on what matters most — earning.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((b) => (
                  <motion.div
                    key={b}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-card"
                  >
                    <CheckCircle
                      size={20}
                      className="text-teal flex-shrink-0"
                    />
                    <span className="text-navy font-semibold font-body">
                      {b}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="bg-navy/5 border border-navy/10 rounded-xl p-5 mt-4">
                <p className="text-navy font-display font-bold text-sm mb-1">
                  Trusted Partner
                </p>
                <p className="text-muted-foreground text-sm font-body">
                  National Mobility is backed by the operational expertise of{" "}
                  <strong className="text-navy">Banu Tour and Travels</strong> —
                  years of fleet management experience at your service.
                </p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-extrabold text-navy mb-6">
                  Driver Application
                </h2>

                {isSuccess ? (
                  <motion.div
                    data-ocid="partner.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center">
                      <CheckCircle size={32} className="text-teal" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy">
                      Application Submitted!
                    </h3>
                    <p className="text-muted-foreground font-body text-sm max-w-xs">
                      Thank you for applying. Our team will contact you within
                      24 hours on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-teal text-sm inline-flex items-center gap-2"
                    >
                      Chat on WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {isError && (
                      <div
                        data-ocid="partner.error_state"
                        className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-3 text-sm font-body"
                      >
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or contact us on
                        WhatsApp.
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="fullName"
                        className="font-semibold font-body text-navy"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        data-ocid="partner.full_name.input"
                        className="font-body"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-semibold font-body text-navy"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        data-ocid="partner.phone.input"
                        className="font-body"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="location"
                        className="font-semibold font-body text-navy"
                      >
                        Preferred Location
                      </Label>
                      <Select
                        value={locationValue}
                        onValueChange={setLocationValue}
                        required
                      >
                        <SelectTrigger
                          id="location"
                          data-ocid="partner.location.select"
                          className="font-body"
                        >
                          <SelectValue placeholder="Select office location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kurla">Kurla</SelectItem>
                          <SelectItem value="ghatkopar">Ghatkopar</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {locationValue === "other" && (
                        <Input
                          type="text"
                          placeholder="Enter your location"
                          value={otherLocation}
                          onChange={(e) => setOtherLocation(e.target.value)}
                          className="mt-2 font-body"
                        />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="license"
                        className="font-semibold font-body text-navy"
                      >
                        Driving License Number
                      </Label>
                      <Input
                        id="license"
                        type="text"
                        placeholder="MH XX XXXXXXXXXXXX"
                        value={drivingLicenseNumber}
                        onChange={(e) =>
                          setDrivingLicenseNumber(e.target.value)
                        }
                        required
                        data-ocid="partner.license.input"
                        className="font-body"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="experience"
                        className="font-semibold font-body text-navy"
                      >
                        Ride-Hailing Experience
                      </Label>
                      <Select
                        value={experience}
                        onValueChange={setExperience}
                        required
                      >
                        <SelectTrigger
                          id="experience"
                          data-ocid="partner.experience.select"
                          className="font-body"
                        >
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0–1 Year</SelectItem>
                          <SelectItem value="1-3">1–3 Years</SelectItem>
                          <SelectItem value="3+">3+ Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {isPending && (
                      <div
                        data-ocid="partner.loading_state"
                        className="flex items-center gap-2 text-teal text-sm font-body"
                      >
                        <Loader2 size={16} className="animate-spin" />
                        Submitting your application...
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isPending}
                      data-ocid="partner.submit_button"
                      className="w-full btn-teal border-0 text-white font-bold text-base py-6 rounded-xl"
                    >
                      {isPending ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "🚗 Apply Now"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy">
              Documents Required
            </h2>
            <p className="text-muted-foreground font-body mt-2">
              Keep these documents ready for a smooth onboarding process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {documents.map((doc, idx) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-card"
              >
                <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-teal" />
                </div>
                <span className="text-navy font-semibold text-sm font-body">
                  {doc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
