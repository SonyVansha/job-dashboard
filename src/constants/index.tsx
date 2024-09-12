"use strict JobformSchema";

import { EnumValues } from "zod"

export const JOBTYPES: EnumValues = [
    'Full Time',
    'Part Time',
    'Remote',
    'Internship',
]

export const JOB_LISTING_COLUMNS: string[] = [
    'Roles',
    'Status',
    'Date Posted',
    'Due Date',
    'Job Type',
    'Applicants',
    'Needs'
]

export const JOB_APPLICANT_COLUMNS: string[] = [
    'Name',
    'Applied Date',
]

// Data

export const JOB_APPLICANT_DATA = [
    {
        name: "John Doe",
        appliedDate: "17 Sep 2024"
    }
]

export const JOB_LISTING_DATA = [
    {
        roles: "Software Engginer",
        status: "Live",
        datePosted: "12 Sep 2024",
        dueDate: "13 Sep 2024",
        jobType: "Full-Time",
        applicants: 1,
        needs: 5
    }
];