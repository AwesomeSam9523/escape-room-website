import TMinus from "@/public/t_minus_logo.svg";
import CSLogo from "@/public/cs_logo.svg";
import ACMLogo from "@/public/acm_logo.svg";
import SBLogo from "@/public/sb_logo.svg";
import OnoLogo from "@/public/ono_logo.svg";

import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between bg-background">
      <div className="flex flex-row">
        <Image src={TMinus} alt={"t-minus"} className="h-20 px-6 py-3 w-auto border-r-[1px] border-[#4C4C4C]" />
      </div>
      <div className={"h-20 *:h-14 *:w-auto flex flex-row *:px-3 items-center"}>
        <Image src={OnoLogo} alt={"Ono Logo"} />
        <Image src={CSLogo} alt={"CS Logo"} />
        <Image src={SBLogo} alt={"SB Logo"} />
        <Image src={ACMLogo} alt={"ACM Logo"} />
      </div>
    </div>
  )
}
