import React, { useState } from "react";
import { CustomRadio } from "@/components/ui/form/custom-radio";
import {
  InstagramIcon,
  InfluencerIcon,
  TikTokIcon,
  YouTubeIcon,
  PersonIcon,
  ChromeIcon,
} from "../icons/icons";

export default function ReferralForm() {
  const [selected, setSelected] = useState<number | null>(null);

  const billingRanges = [
    { label: "Anúncios no Instagram", icon: InstagramIcon },
    { label: "Influenciadores", icon: InfluencerIcon },
    { label: "TikTok", icon: TikTokIcon },
    { label: "YouTube", icon: YouTubeIcon },
    { label: "Indicação", icon: PersonIcon },
    { label: "Chrome Webstore", icon: ChromeIcon },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {billingRanges.map((item, index) => (
          <CustomRadio
            key={index}
            label={item.label}
            icon={item.icon}
            checked={selected === index}
            onChange={() => setSelected(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
