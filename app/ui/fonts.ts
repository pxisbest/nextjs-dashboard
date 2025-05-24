import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ['400','700'],
  subsets: ["latin"],
});

//不对// const myFont = localFont({
//     src:[
//         {
//             path:"../fonts/Lusitana-Regular.ttf",
//             weight:"400",
//             style:"normal"
//         },
//         {}
//     ]
// })
