import { MobileSpecifications } from '../types/mobile';

export const mobileSpecsData: MobileSpecifications = {
  performance: [
    { label: 'Processor', value: 'MediaTek Helio G36' },
    { label: 'CPU', value: 'Octa-core (8x ARM Cortex-A53 up to 2.2 GHz)' },
    { label: 'GPU', value: 'PowerVR GE8320' },
    { label: 'Operating System', value: 'MIUI 14 based on Android 13 Go' }
  ],
  display: [
    { label: 'Screen Size', value: '6.71 inches' },
    { label: 'Resolution', value: 'HD+ (1650 x 720 pixels)' },
    { label: 'Type', value: 'LCD' },
    { label: 'Refresh Rate', value: '60Hz' },
    { label: 'Protection', value: 'Corning Gorilla Glass' }
  ],
  camera: [
    { label: 'Rear Camera', value: '8MP (main) + 2MP (depth)' },
    { label: 'Front Camera', value: '5MP' },
    { label: 'Flash', value: 'LED flash' },
    { label: 'Features', value: 'Portrait mode, HDR, Night mode' }
  ],
  battery: [
    { label: 'Capacity', value: '5000mAh' },
    { label: 'Charging', value: '10W charging' },
    { label: 'Type', value: 'Li-Po' }
  ],
  storage: [
    { label: 'RAM', value: '2GB/3GB/4GB LPDDR4X' },
    { label: 'Internal Storage', value: '32GB/64GB eMMC 5.1' },
    { label: 'Expandable', value: 'Up to 1TB via microSD' }
  ],
  otherFeatures: [
    { label: 'Connectivity', value: '4G LTE, Wi-Fi 802.11 b/g/n, Bluetooth 5.0' },
    { label: 'Sensors', value: 'Accelerometer, Light sensor, Proximity sensor' },
    { label: 'Audio', value: '3.5mm headphone jack' },
    { label: 'Security', value: 'Rear-mounted fingerprint sensor, Face unlock' }
  ]
};