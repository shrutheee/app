export interface SpecItem {
  label: string;
  value: string;
}

export interface MobileSpecifications {
  performance: SpecItem[];
  display: SpecItem[];
  camera: SpecItem[];
  battery: SpecItem[];
  storage: SpecItem[];
  otherFeatures: SpecItem[];
}