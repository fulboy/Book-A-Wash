import { Time } from "@angular/common/src/i18n/locale_data_api";

export interface Booking{
    firstname: string;
    lastname: string;
    phonenumber: number;
    Carmake: string;
    CarType: string;
    RegNo: string;
    Date: Date;
    From: Time;
    To: Time;
    Duration: number;
    WashType: string;
    Price: Float32Array;
}