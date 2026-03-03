import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Location = {
    __kind__: "ghatkopar";
    ghatkopar: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "kurla";
    kurla: null;
};
export type Time = bigint;
export interface Application {
    id: bigint;
    drivingLicenseNumber: string;
    fullName: string;
    experience: DrivingExperience;
    phoneNumber: string;
    location: Location;
    createdAtNanos: Time;
}
export enum DrivingExperience {
    threePlusYears = "threePlusYears",
    zeroToOneYear = "zeroToOneYear",
    oneToThreeYears = "oneToThreeYears"
}
export interface backendInterface {
    getAllApplications(): Promise<Array<Application>>;
    getTotalApplications(): Promise<bigint>;
    submitApplication(fullName: string, phoneNumber: string, location: Location, drivingLicenseNumber: string, experience: DrivingExperience): Promise<void>;
}
