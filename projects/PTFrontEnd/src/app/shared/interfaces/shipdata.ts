export interface ShipData {
    vesselId: string;
    vesselName: string;
    ircs?: string;
    countryCode: string;
    vesselStatus: string;
    grossTonnage?: number;
    hullNumber?: string;
    vesselType: string;
    jonesActEligible: boolean;
    disabledDate?: string;
    }