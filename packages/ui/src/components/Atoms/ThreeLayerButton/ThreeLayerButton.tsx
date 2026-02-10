// "use client";
// import Link from "next/link";
// import styles from "./ThreeLayerButton.module.scss";

// interface Props {
//   children: React.ReactNode;
//   href?: string;
//   before?: string; // Top flap (default "Have")
//   after?: string;  // Bottom flap (default "Fun")
// }

// // Named export to fix the "undefined" error in your page
// export function ThreeLayerButton({
//   children,
//   href,
//   before = "Have",
//   after = "Fun"
// }: Props) {
//   const buttonProps = {
//     className: styles.threeLayerButton,
//     "data-before": before,
//     "data-after": after,
//   };

//   if (href) {
//     return <Link href={href} {...buttonProps}>{children}</Link>;
//   }

//   return <button type="button" {...buttonProps}>{children}</button>;
// }
