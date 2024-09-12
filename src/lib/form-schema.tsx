"use client";

import { z } from "zod";
import { JOBTYPES } from "@/constants";

export const JobformSchema = z.object({
  // Company Name and Job Title form fields
  roles: z
    .string({ required_error: "Job Title is required" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
    
  // select Job Type for input radio and use enum to validate the input
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "You need to add at least one skill" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
    // Add more fields to the form schema
    responsibility: z
    .string({ required_error: "Job Responsibility is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
    whoYouAre: z
    .string({ required_error: "Job Who Ypu Are is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
    niceToHaves: z
    .string({ required_error: "Job Nice To Haves is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
    benefits: z.object({
        benefits: z.string(),
        description: z.string(),
    }).array().nonempty({ message: "You need to add at least one benefit" }),
});
