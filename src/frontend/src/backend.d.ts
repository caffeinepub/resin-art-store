import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    customerName: string;
    contact: string;
    message: string;
    timestamp: Time;
    productInterest: string;
}
export type Time = bigint;
export interface backendInterface {
    listInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(customerName: string, contact: string, productInterest: string, message: string): Promise<void>;
}
