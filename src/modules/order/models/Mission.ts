export interface MotorcadeAsset {
  id: string;
  role: string;
  amount: number;
}

export interface MissionState {
  principalCount?: number;
  tierName?: string;
  hours?: number;
  dressCode?: string;
  motorcade?: Record<string, MotorcadeAsset>;
  location?: {
    lat: number;
    lng: number;
  };
  time?: string;
  principalAssigned?: boolean;
}

export interface CheckoutPayload {
  cardname: string;
  cardnumber: string;
  expiry: string;
  cvc: string;
  missionState: string; // JSON string
}
